import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { connection, message }, email }) => {
    let isSentByCurrentConnection = false;

    const trimmedEmail = email.trim();

    if(connection === trimmedEmail){
        isSentByCurrentConnection = true;
    }

    return (
        isSentByCurrentConnection
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">
                        {trimmedEmail}
                    </p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">
                            {message}
                        </p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">                    
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">
                            {message}
                        </p>
                    </div>
                    <p className="sentText pl-10">
                        {connection}
                    </p>
                </div>
            )
    );
}

export default Message;