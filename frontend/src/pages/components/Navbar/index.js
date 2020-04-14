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

const HeaderNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);    

    const currentUrl = function(){
      const url = window.location.href;

      const toUrl = url.slice(22);

      if(toUrl.match(/user/)) {
        return '/user';
      }
      if(toUrl.match(/company/)) {
        return '/company';
      }      
    }

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

    const history = useHistory();

    function handleLogout(){
      localStorage.clear();
      history.push('/');
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
                  </Link>
                </NavLink>                
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link onClick={handleLogout}>
                    <FiLogOut className="mx-3" color="#194052" size={30} />
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