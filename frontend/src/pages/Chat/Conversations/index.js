import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../../services/api';
import currentUrl from '../../../utils/currentUrl';
import './styles.css';

let deleteConversation;

if(currentUrl() === '/company'){
    deleteConversation = (
        <button 
            type="button"
            className="delete-conversation"
        >
            <FiTrash2 color="#76b7eb" size={30} />
        </button>
    );
}

const Conversations = ({ header, profile, currentEmail, icon }) => {
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
                        {deleteConversation}
                    </Link>
                </li>                
            ))}
            </ul>        
        </div>        
    );
}

export default Conversations;