import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { connection, text }, email }) => {
    let isSentByCurrentConnection = false;

    const trimmedEmail = email.trim().toLowerCase();

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
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">                    
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">
                            {ReactEmoji.emojify(text)}
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