import React, { useState } from 'react';
import {     
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
} from 'reactstrap';
import {
    FiUser,
    FiBriefcase,    
    FiMoreVertical,
    FiMenu
} from 'react-icons/fi';
import CheeseburgerMenu from 'cheeseburger-menu';
import './styles.css';
import currentUrl from '../../../../utils/currentUrl';
import api from '../../../../services/api';

let icon;

const MainPanelNavbar = ({ room, conversations }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if(currentUrl() === '/user'){
        icon = <FiBriefcase color="#194052" className="main-panel-icon" />;        
    }
    else if(currentUrl() === '/company'){
        icon = <FiUser color="#194052" className="main-panel-icon" />;        
    }    

    return (
        <Navbar expand="lg">
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
            <button
                className="slide-menu"
                onClick={toggle}
            >
                <FiMenu className="main-panel-icon" />
            </button>                            
            <CheeseburgerMenu
                className="slide-menu"
                isOpen={isOpen}
                closeCallback={() => toggle()}
                right={true}
                backgroundColor="#194052"
            >
                {conversations}
            </CheeseburgerMenu>                
        </Navbar>
    );
}

export default MainPanelNavbar;