import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {FiBriefcase, FiLogIn} from 'react-icons/fi';
import './styles.css';
import socketIOClient from 'socket.io-client';

export default function Home(){    
    return (
        <Container className="container">
            
            <h1 className="mt-5">EAC</h1>
            <div className="logo">
                <FiBriefcase color="#76b7eb" size={250} />                
            </div>

            <Row >
                <Col className="my-3" xs="12" sm="12" md="6">            
                    <Link to="/userLogin" className="py-2 button">                        
                        <span>Login: Usuário</span>
                        <FiLogIn className="login-icon" size={50} color="#76b7eb" />                        
                    </Link>                    
                </Col>                                
                <Col className="my-3" xs="12" sm="12" md="6">                    
                    <Link to="/companyLogin" className="py-2 button">                        
                        <span>Login: Empresa</span>
                        <FiLogIn className="login-icon" size={50} color="#76b7eb" />                        
                    </Link>                     
                </Col>               
            </Row>
        </Container>
    );
}