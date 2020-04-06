import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    FiBookOpen, 
    FiChevronsLeft,
    FiBriefcase,
    FiCrosshair, 
    FiFileText,    
    } from 'react-icons/fi';
import './styles.css';

export default function ProfessionalForm(){        
    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="interestArea">
                            <FiCrosshair color="#76b7eb" size={30}  />
                        </label>
                        <input                             
                            type="text"
                            placeholder="Área de Interesse"                            
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="experienceArea">
                            <FiBookOpen color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="text"
                            placeholder="Experiência na Área"
                        />
                    </Col>
                </Row>                             
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">                    
                        <label htmlFor="lastJob">
                            <FiChevronsLeft color="#76b7eb" size={30}  />
                            <FiBriefcase color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="text"
                            placeholder="Último Emprego"
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="aboutYourself">
                            <FiFileText color="#76b7eb" size={30}  />
                        </label>
                        <textarea>

                        </textarea>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}