import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { connection, message }, email }) => {
    let isSentByCurrentConnection = false;
    let showMessage = '';

    const trimmedEmail = email.trim();

    if(connection === trimmedEmail){
        isSentByCurrentConnection = true;
    }

    if(isSentByCurrentConnection){
        showMessage = (
            <div className="message-container justify-end">
                <p className="sent-text pr-10">
                    {trimmedEmail}
                </p>
                <div className="message-box background-blue">
                    <p className="message-text colorWhite">
                        {message}
                    </p>
                </div>
            </div>
        );
    }
    else {
        showMessage = (
            <div className="message-container justify-start">                    
                    <div className="message-box background-light">
                    <p className="message-text colorDark">
                        {message}
                    </p>
                </div>
                <p className="sent-text pl-10">
                    {trimmedEmail}
                </p>
            </div>
        );
    }

    return (
        showMessage
    );
}

export default Message;