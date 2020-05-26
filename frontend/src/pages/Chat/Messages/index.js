import React from 'react';
import './styles.css';
import Message from '../Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages }) => {    
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, index) =>
                <div key={index}>
                    <Message 
                        message={message.messages.message}
                        email={message.messages.email}
                        createdAt={message.created_at}
                    />
                </div>
            )}
        </ScrollToBottom>
    );
}

export default Messages;