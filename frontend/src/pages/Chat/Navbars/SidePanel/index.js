import React, { useState } from 'react';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
import {     
    Collapse,
    Navbar,
    NavbarToggler,
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
} from 'react-icons/fi';
import currentUrl from '../../../../utils/currentUrl';

let icon, profile;

const SidePanelNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if(currentUrl() === '/user'){
        icon = <FiUser color="#194052" className="side-panel-icon"/>;
        profile = '/userProfile';
    }
    else if(currentUrl() === '/company'){
        icon = <FiBriefcase color="#194052" className="side-panel-icon"/>;
        profile = '/companyProfile';
    }    

    const history = useHistory();
    
    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <Navbar expand="md">
            <Link to={profile}>
                {icon}
            </Link>
            <NavbarToggler onClick={toggle} />
            <Nav className="ml-auto" navbar>
                <UncontrolledButtonDropdown direction="left">
                    <DropdownToggle className="uncontrolled-button-dropdown">
                        <FiMoreVertical size={30} />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                        <DropdownItem 
                            className="dropdown-item"
                            onClick={handleLogout}
                        >
                            Encerrar Sessão
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Nav>            
        </Navbar>
    );
}

export default SidePanelNavbar;