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
import { Link } from 'react-router-dom';
import { FiBriefcase, FiUser, FiLogOut, FiMenu } from 'react-icons/fi';

const HeaderNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const createMessage = function(id, message){
        if(!document.querySelector('span.nav-item')){
            const aElement = document.querySelector(`#${id}`);
            const spanElement = document.createElement('span');            
            const text = document.createTextNode(message);
            
            spanElement.setAttribute('class', 'nav-item');
            spanElement.style.color = "#194052";
            spanElement.style.fontWeight = "bold";
            spanElement.style.fontSize = "18px";            
            spanElement.appendChild(text);        
            aElement.appendChild(spanElement);            
        }
    };

    const deleteMessage = function(){
        if(document.querySelector('span.nav-item')){
            document.querySelector('span.nav-item').remove();
        }

    }

    const currentUrl = function(){
      const url = window.location.href;
      if(url.indexOf('/user')) {
        return '/user';
      }
      else if(url.indexOf('/company')) {
        return '/company';
      }      
    }

    const profile = function(){      
      if(currentUrl() === "/user"){
          return "/userProfile";
      }
      else if(currentUrl() === "/company"){
          return "/companyProfile";
      }    
    };

    const index = function(){
      if(currentUrl() === "/user"){
        return "/userIndex";
      }
      else if(currentUrl() === "/company"){
        return "/companyIndex";
      }
    };
    
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
                    <button className="button" type="button" id="profile" 
                    onMouseOver={() => createMessage("profile", "Perfil")}
                    onMouseLeave={() => deleteMessage()}
                    >                  
                      <FiUser className="mx-3" color="#194052" size={30} />
                    </button>
                  </Link>
                </NavLink>                
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/logout">
                    <button className="button" id="logout"
                      onMouseOver={() => createMessage("logout", "Sair")}
                      onMouseLeave={() => deleteMessage()}
                    >
                      <FiLogOut className="mx-3" color="#194052" size={30} />
                    </button>
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