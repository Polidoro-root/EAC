import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message, email, createdAt }) => {    
    let isSentByCurrentConnection = false;
    let showMessage = '';    
    const connection = localStorage.getItem('Email');

    const trimmedEmail = email.trim();

    if(connection === trimmedEmail){
        isSentByCurrentConnection = true;
    }

    if(isSentByCurrentConnection){
        showMessage = (
            <div className="message-container justify-end">                
                <div className="message-box background-blue">
                    <p className="message-text">
                        {message}
                    </p>
                    <p className="message-timestamp">
                        {createdAt}
                    </p>
                </div>
            </div>
        );
    }
    else {
        showMessage = (
            <div className="message-container justify-start">                    
                <div className="message-box background-light">                    
                    <p className="message-text">
                        {message}
                    </p>
                    <p className="message-timestamp">
                        {createdAt}
                    </p>
                </div>                
            </div>
        );
    }

    return (
        showMessage
    );
}

export default Message;