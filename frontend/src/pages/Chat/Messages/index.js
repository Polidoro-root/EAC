import React, { useEffect } from 'react';

import './styles.css';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message';

const Messages = ({ messages, email }) => {
    return (
        <section className="messages">
            {messages.map((message, index) => 
                <div key={index}>
                    {console.log('[MESSAGE] => ', message)}
                    {console.log('[EMAIL] => ', email)}
                    <Message message={message} email={email} />
                </div>
            )}
        </section>
    );
}

export default Messages;