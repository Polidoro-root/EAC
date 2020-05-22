import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {      
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import './styles.css';
import {
    FiUser,
    FiBriefcase,
    FiAlertCircle,
    FiSearch,    
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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
            
    const [currentRoom, setCurrentRoom] = useState('');        
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);            

    useEffect(() => {
        socket.emit('disconnect');
        localStorage.setItem('previousRoom', currentRoom);
        const { email, room } = queryString.parse(location.search);        
        
        const previousRoom = localStorage.getItem('previousRoom');
        setCurrentRoom(room);        

        socket.emit('join', { email, room, previousRoom });
        api.get(`chat/${room}`).then(response => setMessages(response.data));
    }, [location.search]);

    const sendMessage = (event) => {
        event.preventDefault();
                
        if(message){
            const { email, room } = queryString.parse(location.search);
            socket.emit('sendMessage', { email, room, message });
            api.post('chat', { email, message }, {
                headers: { chatId: room }
            });
            setMessage('');            
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
                
                <MainPanelNavbar room={currentRoom} conversations={
                        <Conversations                            
                            header={header}
                            profile={profile}
                            currentEmail={currentEmail}
                            icon={icon}
                        />
                    } 
                />

                <Messages messages={messages} />

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