import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading"></h1>

                <div>
                    <input 
                        type="text" 
                        className="joinInput"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        className="joinInput"
                        onChange={e => setRoom(e.target.value)}
                        value={room }
                    />
                </div>

                <Link 
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={e => (!name || !room) ? e.preventDefault() : null}
                >
                    <button 
                        type="submit mt-20"
                        className="button"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Join;