import React, { useState } from 'react';
import {     
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
    FiPaperclip,
} from 'react-icons/fi';


function Chat(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <main className="chat">
            <section className="section-height side-panel">
                <Navbar expand="md">
                    <NavbarBrand href="/userProfile">
                        <FiUser size={50} />
                    </NavbarBrand>
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
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiBriefcase size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle size={30} />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section-height main-panel">
                <Navbar expand="md">
                    <NavbarBrand href="/userProfile">
                        <FiBriefcase size={50} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>                            
                            <button>
                                <FiSearch size={30}/>
                            </button>                                                        
                            <button>
                                <FiPaperclip size={30}/>
                            </button>                                                        
                            <button>
                                <FiMoreVertical size={30}/>
                            </button>                            
                        </Nav>                    
                    </Collapse>
                </Navbar>

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

export default Chat;