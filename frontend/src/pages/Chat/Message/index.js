import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message, email, createdAt }) => {    
    let isSentByCurrentConnection = false;
    let showMessage = '';    
    const connection = localStorage.getItem('Email');    

    if(connection === email){
        isSentByCurrentConnection = true;
    }

    if(isSentByCurrentConnection){
        showMessage = (
            <div className="message-container justify-end">                
                <div className="message-box current-account">
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
                <div className="message-box other-account">                    
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