import React from 'react';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                
                <h3>roomName</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/join">
                    CLOSE
                </a>
            </div>
        </div>
    );
}

export default InfoBar;