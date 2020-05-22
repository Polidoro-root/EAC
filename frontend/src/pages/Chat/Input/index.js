import React from 'react';
import { FiSend } from 'react-icons/fi';
import './styles.css';

const InputMessage = ({ message, setMessage, sendMessage }) => {

    return (
        <footer className="input-message">
            <form
                onSubmit={(event) => sendMessage(event)}
            >
                <input
                    type="text"
                    placeholder="Escreva sua mensagem"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}                    
                />

                <button
                    type="submit"                    
                >
                    <FiSend size={40} />
                </button>
            </form>
        </footer>
    );
}

export default InputMessage;