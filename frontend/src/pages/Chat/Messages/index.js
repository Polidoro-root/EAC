import React, { useEffect } from 'react';

import './styles.css';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message';

const Messages = ({ messages, email }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, index) => 
                <div key={index}>
                    <Message message={message} email={email} />
                </div>
            )}
        </ScrollToBottom>
    );
}

export default Messages;