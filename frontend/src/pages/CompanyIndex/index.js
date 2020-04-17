import React, { useState } from 'react';
import './styles.css';
import {
    Container,    
    InputGroup,
    InputGroupAddon,    
    Input,    
    } from 'reactstrap';
import { 
    FiChevronsDown,
    FiChevronsUp,
    FiSearch
    } from 'react-icons/fi';    
import HeaderNavbar from '../components/Navbar';

export default function UserIndex(){
    
    return (            
        <Container fluid={true}>
            <HeaderNavbar />
        
                       
        </Container>        
    );
}