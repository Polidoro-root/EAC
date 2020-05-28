import React, { useState } from 'react';
import {     
    Navbar,    
    NavbarBrand,    
} from 'reactstrap';
import {
    FiUser,
    FiBriefcase,        
    FiMenu
} from 'react-icons/fi';
import CheeseburgerMenu from 'cheeseburger-menu';
import './styles.css';
import currentUrl from '../../../../utils/currentUrl';

let icon;

const MainPanelNavbar = ({ email, vacancy, conversations }) => {
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
            <div className="current-chat">                                    
                <span className="email-vacancy">
                    <strong className="email">
                        {email}
                    </strong>
                    <span className="vacancy">
                        {vacancy}
                    </span>
                </span>
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