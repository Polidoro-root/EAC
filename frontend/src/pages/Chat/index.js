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
                            <NavItem>
                                <NavLink href="/components/">
                                    <FiMoreVertical size={30} />
                                </NavLink>
                            </NavItem>                            
                        </Nav>                    
                    </Collapse>
                </Navbar>

                <div className="searchbar">
                    <form>
                        <InputGroup className="">                
                            <Input 
                                type="text"
                                className="search-input"
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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">
                                    <FiSearch size={30}/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">
                                    <FiPaperclip size={30}/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">
                                    <FiMoreVertical size={30}/>
                                </NavLink>
                            </NavItem>
                        </Nav>                    
                    </Collapse>
                </Navbar>

                <footer>
                    <input
                        type="text"
                        placeholder="Escreva sua mensagem"
                    />

                    <button>
                        <FiSend size={40} />
                    </button>
                </footer>
            </section>
        </main>
    );
}

export default Chat;