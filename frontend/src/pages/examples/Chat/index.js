import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar';
import Input from '../Input';
import Messages from '../Messages';
import TextContainer from '../TextContainer';

const server = 'http://localhost:3333';
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(server);
        
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error){
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }       
    }, [server, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input
                    message={message} 
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;