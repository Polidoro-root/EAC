import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUnlock, FiLock } from 'react-icons/fi';
import './styles.css';
import api from '../../../services/api';

export default function UserForm(){    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="confirm-password">
                            <FiUnlock color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="password"
                            placeholder="Confirmar Senha"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Col>
                </Row>                                             
            </div>
        </Container>
    );
}