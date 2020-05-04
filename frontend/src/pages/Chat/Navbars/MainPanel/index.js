import React, { useState } from 'react';
import {     
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,    
} from 'reactstrap';
import {
    FiUser,
    FiBriefcase,    
    FiMoreVertical,    
} from 'react-icons/fi';
import './styles.css';
import currentUrl from '../../../../utils/currentUrl';

let icon;

const MainPanelNavbar = ({ room }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if(currentUrl() === '/user'){
        icon = <FiBriefcase color="#194052" size={50} />;        
    }
    else if(currentUrl() === '/company'){
        icon = <FiUser color="#194052" size={50} />;        
    }

    return (
        <Navbar expand="md">
            <NavbarBrand>
                {icon}
            </NavbarBrand>
            <div className="currentChat">
                <strong>
                    <span id="roomName">
                        {room}
                    </span>
                </strong>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>                            
                    <button>
                        <FiMoreVertical size={30}/>
                    </button>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default MainPanelNavbar;