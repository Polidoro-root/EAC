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

function CompanyChat(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                            //onClick={() => setCurrentNamespace(`${chat.chatId}`)}
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
                        
            <section                 
                className="section-height main-panel"
            >                
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
                        <li                             
                            className={`
                                messages-list-item 
                                messages-list-item--mine
                            `}
                        >
                            <span                                 
                                className={`
                                    message
                                    message--mine
                                `}
                            >                                
                            </span>
                        </li>                    
                    </ul>
                </div>

                <footer>
                    <form                        
                    >
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

export default CompanyChat;