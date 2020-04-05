import React from 'react';
import InputMask from 'react-input-mask';
import { Container, Row, Col } from 'react-bootstrap';
import { FiBriefcase, FiLock, FiFileText } from 'react-icons/fi';
import './styles.css';

export default function CompanyForm(){
    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="4">
                        <label htmlFor="name">
                            <FiBriefcase color="#76b7eb" size={30}  />
                        </label>
                        <input                             
                            type="text"
                            placeholder="Nome da Empresa"                            
                        />
                    </Col>
                    <Col xs="12" sm="10" md="4">
                        <label htmlFor="password">
                            <FiLock color="#76b7eb" size={30}  />
                        </label>
                        <input                                                         
                            type="password"
                            placeholder="Senha"                                                    
                        />
                    </Col>
                    <Col xs="12" sm="10" md="4">
                        <label htmlFor="cnpj">
                            <FiFileText color="#76b7eb" size={30}  />
                        </label>
                        <InputMask
                            mask="99. 999. 999/9999-99"
                            maskChar={null}
                            type="text"
                            placeholder="CNPJ"
                            maxLength="20"
                        />
                    </Col>
                </Row>                                             
            </div>
        </Container>
    );
}