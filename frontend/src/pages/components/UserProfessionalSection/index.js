import React, { useState } from 'react';
import { 
    Container, 
    Col, 
    Row,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,      
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import {
    FiEdit,
    FiChevronsDown,
    FiChevronsUp,
    FiBookOpen, 
    FiChevronsLeft,
    FiBriefcase,
    FiCrosshair, 
    FiFileText,  
    FiSave  
    } from 'react-icons/fi';

function UserProfessionalSection(){
    const [modalAlterProfessional, setModalAlterProfessional] = useState(false);

    const toggleAlterProfessional = 
        () => setModalAlterProfessional(!modalAlterProfessional);

    const createMessage = function(id, message){
        if(!document.querySelector('span.action')){
            const aElement = document.querySelector(`#${id}`);
            const spanElement = document.createElement('span');            
            const text = document.createTextNode(message);
            
            spanElement.setAttribute('class', 'action');
            spanElement.style.color = "#76b7eb";
            spanElement.style.fontWeight = "bold";
            spanElement.style.fontSize = "70%";                       
            spanElement.appendChild(text);        
            aElement.appendChild(spanElement);            
        }
    };

    const deleteMessage = function(){
        if(document.querySelector('span.action')){
            document.querySelector('span.action').remove();
        }

    }

    const [chevrons, setChevrons] = useState('Down');    

    function accordionIcon(){
        let icon;

        if(chevrons === "Down"){
            icon = <FiChevronsDown className="accordion-icon" color="#76b7eb" size={30} />;            
        }
        else if(chevrons === "Up"){
            icon = <FiChevronsUp className="accordion-icon" color="#76b7eb" size={30} />
        }

        return icon;
    }

    function toggleAccordionIcon(){
        if(chevrons === "Down"){
            setChevrons('Up');
        }
        else if(chevrons === "Up"){
            setChevrons('Down');
        }
    }
    return (
        <div>
            <div>
            <Modal 
                isOpen={modalAlterProfessional} 
                toggle={toggleAlterProfessional} 
                fade={false} 
                className="alter-professional"
            >
                <ModalHeader 
                    toggle={toggleAlterProfessional}
                >
                    Editar Área Profissional
                </ModalHeader>
                <ModalBody className="modal-body-border">
                    <div className="input-professional">
                        <input type="text" value="PROGRAMADOR" />
                    </div>
                    <div className="input-professional">
                        <input type="text" value="JavaScript, NodeJS e ReactJS" />
                    </div>
                    <div className="input-professional">
                        <input type="text" value="Secretário em Consultório de Fisioterapia" />
                    </div>
                    <div className="input-professional">
                        <textarea name="" id="">
                            Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
                        </textarea>
                    </div>                                                    
                </ModalBody>
                <ModalFooter>
                    <button 
                        id="alter-address-save"
                        className="button col-3" 
                        onClick={toggleAlterProfessional}
                        onMouseOver={() => createMessage('alter-address-save', 'Salvar')}
                        onMouseLeave={() => deleteMessage()}
                    >
                        <FiSave color="#76b7eb" size={30} />
                    </button>
                </ModalFooter>
            </Modal>
        </div>
        
        <Accordion>
            <Card className="accordion-card">
                <Card.Header className="accordion-header">
                    <Accordion.Toggle                             
                        className="accordion-button" 
                        variant="link" 
                        eventKey="0"
                        onClick={() => toggleAccordionIcon()}
                    >
                        <h2>Área Profissional</h2>
                        {accordionIcon('Down')}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="accordion-body">
                        <Container>
                            <div className="content">
                                <Row>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiCrosshair color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            Programação
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiBookOpen color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            Javascript, NodeJS e ReactJS
                                        </h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiChevronsLeft color="#76b7eb" size={30} />
                                            <FiBriefcase color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            Secretário em consultório de Fisioterapia
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiFileText color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
                                        </h3>
                                    </Col>
                                </Row>                                
                            </div>
                        </Container>
                        <div className="professional-data-container-buttons row">
                            <button 
                                id="alter-professional" 
                                className="button col-2"
                                onMouseOver={() => createMessage('alter-professional', 'Editar')}
                                onMouseLeave={() => deleteMessage()}
                                onClick={toggleAlterProfessional}
                            >
                                <FiEdit color="#76b7eb" size={30} />
                            </button>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>        
        </div>
    );
}

export default UserProfessionalSection;