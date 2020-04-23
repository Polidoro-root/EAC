import React, { useState } from 'react';
import { 
    Container,
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
    FiAlertCircle,
    FiSearch,
    FiSend,
} from 'react-icons/fi';


function Chat(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <main className="chat">
            <section className="section-height side-panel">
                <Navbar expand="md">
                    <NavbarBrand href="/userProfile">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>                        
                        </Nav>                    
                    </Collapse>
                </Navbar>

                <div className="searchbar">
                    <form>
                        <InputGroup className="">                
                            <Input 
                                type="text"
                            />
                            <InputGroupAddon addonType="prepend">
                                <button
                                    className="button search-button"
                                    type="submit"
                                >
                                    <FiSearch color="#76b7eb" size={30}/>
                                </button>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>

                <div className="conversations">
                    <ul className="conversations-list">
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                        <li className="conversation-cell">
                            <span className="identifier">
                                <FiUser color="#76b7eb" size={30} />
                                <span>NOME</span>
                            </span>
                            <span className="messages-not-verified">
                                <FiAlertCircle color="#76b7eb" size={30} />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section-height main-panel">
                <Navbar expand="md">
                    <NavbarBrand href="/userProfile">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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