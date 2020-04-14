import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Container, Row, Col } from 'react-bootstrap';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import './styles.css';

export default function UserForm(){
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="6">
                        <label htmlFor="email">
                            <FiAtSign color="#76b7eb" size={30}  />
                        </label>
                        <input                             
                            type="email"
                            placeholder="E-mail de contato"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6">
                        <label htmlFor="phone">
                            <FiPhone color="#76b7eb" size={30}  />
                        </label>
                        <InputMask 
                            mask="(99) 99999-9999"
                            maskChar={null}
                            id="phone"
                            type="text"
                            placeholder="Número de telefone"
                            maxLength="15"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Col>                    
                </Row>                                             
            </div>
        </Container>
    );
}