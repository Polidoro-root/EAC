import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import {     
    Collapse,
    Navbar,
    NavbarToggler,    
    Nav,        
} from 'reactstrap';
import {
    FiUser,
    FiBriefcase,    
    FiMoreVertical,    
} from 'react-icons/fi';
import currentUrl from '../../../../utils/currentUrl';

let icon, profile;

const SidePanelNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if(currentUrl() === '/user'){
        icon = <FiUser color="#194052" size={50} />;
        profile = '/userProfile';
    }
    else if(currentUrl() === '/company'){
        icon = <FiBriefcase color="#194052" size={50} />;
        profile = '/companyProfile';
    }

    return (
        <Navbar expand="md">
            <Link to={profile}>
                {icon}
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <button>
                        <FiMoreVertical size={30} />
                    </button>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default SidePanelNavbar;