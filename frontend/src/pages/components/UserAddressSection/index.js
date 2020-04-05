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
    FiHome, 
    TiSortNumerically, 
    FaMailBulk, 
    GiFamilyHouse,
    FaCity,
    FaSearchLocation,        
    FiEdit,        
    FiChevronsDown,
    FiChevronsUp,
    FiSave  
    } from 'react-icons/all';

function UserAddressSection(){
    const [modalAlterAddress, setModalAlterAddress] = useState(false);

    const toggleAlterAddress = () => setModalAlterAddress(!modalAlterAddress);

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
                isOpen={modalAlterAddress} 
                toggle={toggleAlterAddress} 
                fade={false} 
                className="alter-address"
            >
                <ModalHeader 
                    toggle={toggleAlterAddress}
                >
                    Editar Endereço
                </ModalHeader>
                <ModalBody className="modal-body-border">
                    <div className="input-address">
                        <input type="text" value="18411-180" />
                    </div>
                    <div className="input-address">
                        <input type="text" value="José Roberto Coelho de Almeida" />
                    </div>
                    <div className="input-address">
                        <input type="text" value="42" />                    
                    </div>
                    <div className="input-address">
                        <input type="text" value="Jardim Virgínia" />
                    </div>
                    <div className="input-address">                                                                        
                        <input type="text" value="Itapeva" />                    
                    </div>
                    <div className="input-address">
                        <input type="text" value="SP" />
                    </div>
                    
                
                </ModalBody>
                <ModalFooter>
                    <button 
                        id="alter-address-save"
                        className="button col-3" 
                        onClick={toggleAlterAddress}
                        onMouseOver={() => createMessage('alter-address-save', 'Salvar')}
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
                            <h2>Endereço</h2>
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
                                                    <FaMailBulk color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    18411-180
                                                </h3>
                                            </Col>
                                            <Col xs="12" sm="10" md="6" lg="6">
                                                <label className="icon">
                                                    <FiHome color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    José Roberto Coelho de Almeida
                                                </h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="10" md="6" lg="6">
                                                <label className="icon">
                                                    <TiSortNumerically color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    42
                                                </h3>
                                            </Col>
                                            <Col xs="12" sm="10" md="6" lg="6">
                                                <label className="icon">
                                                    <GiFamilyHouse color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    Jardim Virgínia
                                                </h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="10" md="6" lg="6">
                                                <label className="icon">
                                                    <FaCity color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    Itapeva
                                                </h3>
                                            </Col>
                                            <Col xs="12" sm="10" md="6" lg="6">
                                                <label className="icon">
                                                    <FaSearchLocation  color="#76b7eb" size={30} />
                                                </label>
                                                <h3 className="data">
                                                    SP
                                                </h3>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>

                                <div className="address-data-container-buttons row">
                                    <button 
                                        id="alter-address" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('alter-address', 'Excluir')}
                                        onMouseLeave={() => deleteMessage()}
                                        onClick={toggleAlterAddress}
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

export default UserAddressSection;