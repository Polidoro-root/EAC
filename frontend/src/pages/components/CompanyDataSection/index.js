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
    FiUnlock,
    FiUser,
    FiLock,
    FiFileText,    
    FiChevronsDown,
    FiChevronsUp,
    FiSave
 } from 'react-icons/fi';

function CompanyDataSection(){
    const [modalChangePassword, setModalChangePassword] = useState(false);    

    const toggleChangePassword =
        () => setModalChangePassword(!modalChangePassword);

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

    return (
        <div>
            <div>
                <Modal 
                    isOpen={modalChangePassword} 
                    toggle={toggleChangePassword} 
                    fade={false} 
                    className="change-password"
                >
                    <ModalHeader 
                        toggle={toggleChangePassword}
                    >
                        Editar Senha
                    </ModalHeader>
                    <ModalBody className="modal-body-border">
                        <div className="input-password">
                            <input type="password" placeholder="Senha Atual" />
                        </div>
                        <div className="input-password">
                            <input type="password" placeholder="Nova Senha" />
                        </div>
                        <div className="input-password">
                            <input type="password" placeholder="Confirmar Nova Senha" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button 
                            id="change-password-save"
                            className="button col-3" 
                            onClick={toggleChangePassword}
                            onMouseOver={() => createMessage('change-password-save', 'Salvar')}
                            onMouseLeave={() => deleteMessage()}
                        >
                            <FiSave color="#76b7eb" size={30} />
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            onClick={() => toggleAccordionIcon()}
                        >
                            <h2>Dados da Empresa</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <Container>
                                <div className="content">
                                    <Row>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiUser color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                Tecnomaq
                                            </h3>
                                        </Col>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiLock color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                Password
                                            </h3>
                                        </Col>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiFileText  color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                17.927.593/0001-39
                                            </h3>
                                        </Col>
                                    </Row>                                        
                                </div>
                            </Container> 
                            <div className="user-data-container-button">
                                <button
                                    id="alter-password"
                                    className="button col-2 mx-auto"
                                    onMouseOver={() => 
                                        createMessage(
                                            'alter-password', 'Editar Senha'
                                        )}
                                    onMouseLeave={() => deleteMessage()}
                                    onClick={toggleChangePassword}
                                >                    
                                    <FiUnlock color="#76b7eb" size={30} />
                                </button>
                            </div>        
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>            
        </div>
    );
}

export default CompanyDataSection;