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
import io from 'socket.io-client';
import uuid from 'uuid/v4';
import api from '../../services/api';

const myId = uuid();

const socket = io('http://localhost:3333');
socket.on('connect', () => 
    console.log('[IO] Connect => A new connection has been established'));

function CompanyChat(){
    const companyId = localStorage.getItem('companyId');

    const [chats, setChats] = useState([]);

    useEffect(() => {
        api.get('companyProfile/chat', {
            headers: {
                companyId: companyId
            }
        })
        .then(response => {
            setChats(response.data);
        })
    }, []);    
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleNewMessage =
            newMessage => setMessages([...messages, newMessage]);

        socket.on('chat.message', handleNewMessage);

        return () => socket.off('chat.message', handleNewMessage);
    }, [messages]);    

    const handleSendMessage = e => {
        e.preventDefault();

        if(message.trim()){
            socket.emit('chat.message', {
                id: myId,
                message
            });
            setMessage('');
        }
    };

    return (
        <main className="chat">            
            <section className="section-height side-panel">
                <Navbar expand="md">
                    <Link to="/companyProfile">
                        <FiBriefcase size={50} />
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <button>
                                <FiMoreVertical size={30} />
                            </button>
                        </Nav>
                    </Collapse>
                </Navbar>

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
                    {chats.map(chat => (
                        <li
                            key={chat.chatId}
                            className="conversation-cell"
                            id={`chat${chat.chatId}`}
                            onClick={e => {
                                const user = document.querySelector('#currentChatUser');
                                const vacancy = document.querySelector('#currentChatVacancy');

                                user.innerHTML = chat.email;
                                vacancy.innerHTML = chat.vacancy;
                            }}
                        >
                            <span className="briefcase">
                                <FiUser size={50} />
                            </span>
                            <span className="user-vacancy">
                                <span className="user">{chat.email}</span>
                                <span className="vacancy">{chat.vacancy}</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={40} />
                            </span>
                        </li>
                    ))}   
                    </ul>
                </div>
            </section>

            <section className="section-height main-panel">
                <Navbar expand="md">
                    <NavbarBrand href="/companyProfile">
                        <FiUser size={50} />
                    </NavbarBrand>
                    <div className="currentChat">
                        <strong><span id="currentChatUser"></span></strong>
                        <span id="currentChatVacancy"></span>
                    </div>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>                            
                            <button>
                                <FiMoreVertical size={30}/>
                            </button>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="messages-area">
                    <ul className="messages-list">
                    {messages.map((m, index) => (
                        <li 
                            key={index}
                            className="messages-list-item"
                        >
                            <span                                 
                                className="messages-sent-mine"
                            >
                                {m.message}
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>

                <footer>
                    <form onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Escreva sua mensagem"
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                        />

                        <button
                            type="submit"
                        >
                            <FiSend size={40} />
                        </button>
                    </form>
                </footer>
            </section>
        </main>
    );
}

export default CompanyChat;