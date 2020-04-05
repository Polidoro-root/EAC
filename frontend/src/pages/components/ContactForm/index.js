import React from 'react';
import InputMask from 'react-input-mask';
import { Container, Row, Col } from 'react-bootstrap';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import './styles.css';

export default function UserForm(){        
    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="4">
                        <label htmlFor="email">
                            <FiAtSign color="#76b7eb" size={30}  />
                        </label>
                        <input                             
                            type="email"
                            placeholder="E-mail de contato"                            
                        />
                    </Col>
                    <Col xs="12" sm="10" md="4">
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
                        />
                    </Col>
                    <Col xs="12" sm="10" md="4">
                        <label htmlFor="discord">
                            <FaDiscord color="#76b7eb" size={30}  />
                        </label>
                        <InputMask
                            mask="#9999"
                            maskChar={null}
                            type="text"
                            placeholder="ID discord (#)"
                            maxLength="5"                            
                        />
                    </Col>
                </Row>                                             
            </div>
        </Container>
    );
}