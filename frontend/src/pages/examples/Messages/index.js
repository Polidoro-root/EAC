import React from 'react';

import './styles.css';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message';

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, index) => 
                <div key={index}>
                    <Message message={message} name={name} />
                </div>
            )}
        </ScrollToBottom>
    );
}

export default Messages;