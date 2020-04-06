import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUnlock, FiLock } from 'react-icons/fi';
import './styles.css';

export default function UserForm(){    
    return (
        <Container>
            <div className="content">
                <Row>                    
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="password">
                            <FiLock color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="password"
                            placeholder="Senha"
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="confirm-password">
                            <FiUnlock color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="password"
                            placeholder="Confirmar Senha"
                        />
                    </Col>
                </Row>                                             
            </div>
        </Container>
    );
}