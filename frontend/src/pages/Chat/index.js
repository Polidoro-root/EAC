import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {     
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,    
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
    FiSend,
    FiMoreVertical,    
} from 'react-icons/fi';
import api from '../../services/api';
import currentUrl from '../../utils/currentUrl';
import queryString from 'query-string';
import io from 'socket.io-client';

import SidePanelNavbar from './Navbars/SidePanel';
import MainPanelNavbar from './Navbars/MainPanel';
import InputMessage from './Input';
import Messages from './Messages';

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
let socket;

const Chat = ({ location }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [chats, setChats] = useState([]);
    const [linkRoom, setLinkRoom] = useState('');    
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const [connections, setConnections] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api.get(`${profile}/chat`, header)
            .then(response => setChats(response.data));        
    }, []);

    useEffect(() => {
        const { email, room } = queryString.parse(location.search);
        console.log(email, room);
        socket = io(server);

        setEmail(email);
        setRoom(room);

        const error = (error) => {
            if(error) alert(error);
        }        

        socket.emit('join', { email, room }, error);                        
        
    }, [location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ connections }) => {
            setConnections(connections);
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
        <main className="chat">            
            <section className="section-height side-panel">

                <SidePanelNavbar />

                <div className="searchbar">
                    <form>
                        <InputGroup className="">
                            <Input 
                                type="text"
                                className="search-input"
                                placeholder="Procure por vaga"
                            />
                            <InputGroupAddon addonType="prepend">
                                <button
                                    className="button"
                                    type="submit"
                                >
                                    <FiSearch size={30}/>
                                </button>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>

                <div className="conversations">
                    <ul className="conversations-list"> 
                    {chats.map((chat) => (                        
                        <li
                            key={chat.chatId}
                            className="conversation-cell"
                            onClick={(event) => {
                                event.preventDefault();

                                socket.emit('disconnect');
                            }}
                        >
                            <Link 
                                to={`/${profile}/chat?email=${currentEmail}&room=${linkRoom}`}
                                onMouseOver={(event) => {
                                    event.preventDefault();

                                    setLinkRoom(chat.chatId);
                                }}                                
                            >
                            <span className="conversation-icon">
                                {icon}
                            </span>
                            <span className="email-vacancy">
                                <span className="email">
                                    {chat.email}
                                </span>
                                <span className="vacancy">
                                    {chat.vacancy}
                                </span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={40} />
                            </span>
                            </Link>
                        </li>                        
                    ))}
                    </ul>
                </div>
            </section>
                        
            <section                 
                className="section-height main-panel"
            >                
                
                <MainPanelNavbar room={room} />

                <Messages messages={messages} email={email} />

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