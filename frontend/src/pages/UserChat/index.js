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
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

function UserChat(){
    const userId = localStorage.getItem('userId');

    const [chats, setChats] = useState([]);

    useEffect(() => {
        api.get('userProfile/chat', {
            headers: {
                userId: userId
            }
        })
        .then(response => {
            setChats(response.data);
        })
    }, []);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);        

    return (
        <main className="chat">            
            <section className="section-height side-panel">
                <Navbar expand="md">
                    <Link to="/userProfile">
                        <FiUser size={50} />
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
                                const company = document.querySelector('#currentChatCompany');
                                const vacancy = document.querySelector('#currentChatVacancy');

                                company.innerHTML = chat.name;
                                vacancy.innerHTML = chat.vacancy;
                            }}
                        >
                            <span className="briefcase">
                                <FiBriefcase size={50} />
                            </span>
                            <span className="company-vacancy">
                                <span className="company">{chat.name}</span>
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
                    <NavbarBrand href="/userProfile">
                        <FiBriefcase size={50} />
                    </NavbarBrand>
                    <div className="currentChat">
                        <strong><span id="currentChatCompany"></span></strong>
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
                    <ul></ul>
                </div>

                <footer>
                    <form>
                        <input
                            type="text"
                            placeholder="Escreva sua mensagem"
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

export default UserChat;