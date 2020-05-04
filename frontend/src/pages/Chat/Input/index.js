import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './styles.css';

const InputMessage = ({ message, setMessage, sendMessage }) => {

    return (
        <footer>
            <form
            >
                <input
                    type="text"
                    placeholder="Escreva sua mensagem"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) =>
                        event.key === 'Enter' ? sendMessage(event) : null}
                />

                <button
                    type="submit"
                    onClick={(event) => {
                        event.preventDefault();
                        sendMessage(event);
                    }}
                >
                    <FiSend size={40} />
                </button>
            </form>
        </footer>
    );
}

export default InputMessage;