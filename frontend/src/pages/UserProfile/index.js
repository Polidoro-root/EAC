import React, { useState } from 'react';
import { 
    Container, 
    Col, 
    Row,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Table,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
    FiUnlock,
    FiTrash2,
    FiEdit,    
    FiPlusCircle,
    FiChevronsDown,
    FiChevronsUp,    
    } from 'react-icons/fi';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import UserDataSection from '../components/UserDataSection';
import UserContactSection from '../components/UserContactSection';
import UserAddressSection from '../components/UserAddressSection';
import UserProfessionalSection from '../components/UserProfessionalSection';
import UserGraduationSection from '../components/UserGraduationSection';

function UserProfile(){                                
    return (                        
        <Container fluid={true}>            

            <HeaderNavbar />

            <header>                                
                <h1>Perfil</h1>
                <p>
                    Insira seus dados na área de Graduações para destacar-se
                </p>
            </header>

            <UserDataSection />

            <UserContactSection />

            <UserAddressSection />

            <UserProfessionalSection />       

            <UserGraduationSection />     
            
        </Container>
    );
}

export default UserProfile;