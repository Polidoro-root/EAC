import React, { useState } from 'react';
import { Collapse, 
        Navbar, 
        NavbarToggler, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink        
    } from 'reactstrap';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiBriefcase, FiUser, FiLogOut, FiMenu } from 'react-icons/fi';

import currentUrl from '../../../utils/currentUrl';

const HeaderNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);    

    const profile = function(){      
      if(currentUrl() === "/user"){
          return "/userProfile";
      }
      if(currentUrl() === "/company"){
          return "/companyProfile";
      }    
    };

    const index = function(){
      if(currentUrl() === "/user"){
        return "/userIndex";
      }
      if(currentUrl() === "/company"){
        return "/companyIndex";
      }
    };

    let profileMessage = '';
    let logoutMessage = '';

    if(isOpen === true){
      profileMessage = <span className="nav-message">Perfil</span>;
      logoutMessage= <span className="nav-message">Encerrar Sessão</span>;
    }

    const history = useHistory();
    
    function handleLogout(){
      localStorage.clear();      
    }
        
    return (
      <div>                
        <Navbar className="navbar" expand="sm">
          <NavbarBrand>
            <Link to={index}>
              <FiBriefcase color="#194052" size={50} />
            </Link>
          </NavbarBrand>        
          <NavbarToggler onClick={toggle} >
            <FiMenu color="#194052" size={40} />            
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink>
                  <Link to={profile}>                    
                      <FiUser className="mx-3" color="#194052" size={30} />
                      {profileMessage}
                  </Link>
                </NavLink>                
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/" onClick={handleLogout}>
                    <FiLogOut className="mx-3" color="#194052" size={30} />
                    {logoutMessage}
                  </Link>
                </NavLink>
              </NavItem>            
            </Nav>          
          </Collapse>
        </Navbar>
        
      </div>      
    );
}

export default HeaderNavbar;