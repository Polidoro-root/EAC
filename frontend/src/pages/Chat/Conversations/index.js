import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../../services/api';
import currentUrl from '../../../utils/currentUrl';
import './styles.css';

const Conversations = ({ header, profile, currentEmail, icon }) => {
    const companyId = localStorage.getItem('companyId');

    const [linkRoom, setLinkRoom] = useState('');
    const [chats, setChats] = useState([]);

    useEffect(() => {
        api.get(`${profile}/chat`, header)
            .then((response) => setChats(response.data));
    }, []);

    return (                
        <div className="conversations">        
            <ul className="conversations-list"> 
            {chats.map((chat) => (                        
                <li
                    key={chat.chatId}
                    className="conversation-cell"                            
                >
                    <Link 
                        to={`/${profile}/chat?email=${currentEmail}&room=${linkRoom}&vacancy=${chat.vacancy}`}
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
                        {currentUrl() === '/company' && (
                        <button 
                            type="button"
                            className="delete-conversation"
                            onClick={async event => {
                                event.preventDefault();

                                try{
                                    const id = chat.chatId;
                                    await api.delete(`chat/${id}`, {
                                        headers: { companyId: companyId }
                                    });

                                    setChats(chats.filter(chat => chat.chatId !== id))
                                } catch(err) {
                                    alert('Erro ao deletar conversa, tente novamente.');
                                }
                            }}
                        >
                            <FiTrash2 color="#76b7eb" size={30} />
                        </button>
                        )}
                    </Link>
                </li>                
            ))}
            </ul>        
        </div>        
    );
}

export default Conversations;