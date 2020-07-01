import React, { useState, useEffect } from 'react';
import './styles.css';
import {
    FiUser,
    FiBriefcase,    
} from 'react-icons/fi';
import api from '../../services/api';
import currentUrl from '../../utils/currentUrl';
import queryString from 'query-string';
import io from 'socket.io-client';

import SidePanelNavbar from './Navbars/SidePanel';
import MainPanelNavbar from './Navbars/MainPanel';
import InputMessage from './Input';
import Messages from './Messages';
import Conversations from './Conversations';

let profile, header, icon;

if(currentUrl() === '/user') {
    profile = 'userProfile';

    header = {
        headers: {
            userId: localStorage.getItem('userId')
        }
    };

    icon = <FiBriefcase color="#76b7eb" size={50} />;
}
else if(currentUrl() === '/company') {
    profile = 'companyProfile';

    header = {
        headers: {
            companyId: localStorage.getItem('companyId')
        }
    }

    icon = <FiUser color="#76b7eb" size={50} />;
}

const currentEmail = localStorage.getItem('Email');

const server = 'http://localhost:3333';
const socket = io(server);

const Chat = ({ location }) => {    
    const [currentRoom, setCurrentRoom] = useState('');
    const [currentVacancy, setCurrentVacancy] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);            

    useEffect(() => {
        socket.emit('disconnect');
        localStorage.setItem('previousRoom', currentRoom);
        const { email, room, vacancy } = queryString.parse(location.search);        
        
        const previousRoom = localStorage.getItem('previousRoom');        
        setCurrentRoom(room);
        setCurrentVacancy(vacancy);

        socket.emit('join', { email, room, previousRoom });
        api.get(`chat/${room}`).then(response => setMessages(response.data));        
    }, [location.search]);

    socket.on('message', ({ email, message, created_at }) => {        
        setMessages([...messages, {
            messages: { email, message },
            created_at: created_at
        }]);
    });

    const sendMessage = async event => {
        event.preventDefault();        
        
        try {
            const { email, room } = queryString.parse(location.search);

            if(message){
                const dbMessage = message;
                setMessage('');
                socket.emit('sendMessage', { email, room, message: dbMessage });            
                await api.post('chat', { email, message: dbMessage }, {
                    headers: { chatId: room }
                });
            }
        } catch (error) {
            alert('Sorry. Was not possible to send your message now!');
        }
    }

    return (
        <main className="chat">            
            <section className="section-height side-panel">

                <SidePanelNavbar />                

                <Conversations 
                    header={header}
                    profile={profile}
                    currentEmail={currentEmail}
                    icon={icon}
                />
            </section>
                        
            <section                 
                className="section-height main-panel"
            >                
                
                <MainPanelNavbar
                    email={currentEmail}
                    vacancy={currentVacancy}
                    conversations={
                        <Conversations                            
                            header={header}
                            profile={profile}
                            currentEmail={currentEmail}
                            icon={icon}
                        />
                    } 
                />

                <Messages
                    messages={messages}
                    email={currentEmail}
                />

                <InputMessage 
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </section>            
        </main>
    );
}

export default Chat;