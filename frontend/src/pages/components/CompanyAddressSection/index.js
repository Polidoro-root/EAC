import React, { useState } from 'react';
import {     
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,    
    Table    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import { 
    FiTrash2, 
    FiPlusCircle,     
    FiEdit,        
    FiChevronsDown,
    FiChevronsUp,
    FiSave  
    } from 'react-icons/fi';

function CompanyAddressSection(){
    const [modalAddAddress, setModalAddAddress] = useState(false);
    const [modalDeleteAndAlterAddress, setModalDeleteAndAlterAddress] =    
        useState(false);
    const [modalNestedAlter, setModalNestedAlter] = useState(false);
    const [modalNestedDelete, setModalNestedDelete] = useState(false);

    
    const toggleAddAddress = () => setModalAddAddress(!modalAddAddress);

    const toggleDeleteAndAlterAddress = 
        () => setModalDeleteAndAlterAddress(!modalDeleteAndAlterAddress);

    const toggleNestedAlter = () => setModalNestedAlter(!modalNestedAlter);

    const toggleNestedDelete = () => setModalNestedDelete(!modalNestedDelete);

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
                    isOpen={modalAddAddress} 
                    toggle={toggleAddAddress} 
                    fade={false}
                    className="add-address"
                >
                    <ModalHeader 
                        toggle={toggleAddAddress}
                    >
                        Adicionar Endereço
                    </ModalHeader>
                    <ModalBody className="modal-body-border">
                        <div className="input-address">
                            <input 
                                type="text"
                                placeholder="CEP"
                            />
                        </div>
                        <div className="input-address">
                            <input 
                                type="text"
                                placeholder="Logradouro"
                            />
                        </div>
                        <div className="input-address">
                            <input 
                                type="number"
                                placeholder="Número"
                            />
                        </div>
                        <div className="input-address">
                            <input 
                                type="text"
                                placeholder="Bairro"
                            />
                        </div>
                        <div className="input-address">
                            <input 
                                type="text"
                                placeholder="Cidade"
                            />
                        </div>
                        <div className="input-address">
                            <input 
                                type="text"
                                placeholder="Estado"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button 
                            id="add-address-save"
                            className="button col-3" 
                            onClick={toggleAddAddress}
                            onMouseOver={() => createMessage('add-address-save', 'Salvar')}
                            onMouseLeave={() => deleteMessage()}
                        >
                            <FiSave color="#76b7eb" size={30} />
                        </button>
                    </ModalFooter>
                </Modal>
            </div>

            <div>
                <Modal 
                    isOpen={modalDeleteAndAlterAddress} 
                    toggle={toggleDeleteAndAlterAddress}
                    fade={false}
                >                    
                    <ModalFooter>
                        <div className="address-delete-alter-options">
                            <button
                                id="delete-icon"                             
                                onClick={toggleNestedDelete}
                                className="button"
                                onMouseOver={() => createMessage('delete-icon', 'Excluir')}
                                onMouseLeave={() => deleteMessage()}
                            >
                                <FiTrash2                                
                                    color="#76b7eb"
                                    size={30}                                
                                />
                            </button>
                        </div>
                        <div className="address-delete-alter-options">
                            <button 
                                id="alter-icon"                            
                                onClick={toggleNestedAlter}
                                className="button"
                                onMouseOver={() => createMessage("alter-icon" , "Editar")}
                                onMouseLeave={() => deleteMessage()}
                            >
                                <FiEdit                                
                                    color="#76b7eb"
                                    size={30}                                
                                />
                            </button>
                        </div>                        
                        
                        <Modal 
                            isOpen={modalNestedAlter} 
                            toggle={toggleNestedAlter}
                            className="nested-alter"
                            fade={false}
                        >
                            <ModalHeader>
                                Editar Endereço
                            </ModalHeader>
                            <ModalBody className="modal-body-border">
                                <div className="input-address">
                                    <input type="text" value="18411-180" />
                                </div>
                                <div className="input-address">
                                    <input 
                                        type="text" 
                                        value="José Roberto Coelho de Almeida" 
                                    />
                                </div>
                                <div className="input-address">
                                    <input type="number" value="42" />
                                </div>
                                <div className="input-address">
                                    <input 
                                        type="text" 
                                        value="Jardim Virgínia" 
                                    />
                                </div>
                                <div className="input-address">
                                    <input 
                                        type="text" 
                                        value="Itapeva" 
                                    />
                                </div>
                                <div className="input-address">
                                    <input 
                                        type="text" 
                                        value="SP" 
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <button 
                                    id="edit-address-save"
                                    className="button col-3" 
                                    
                                    onMouseOver={() => createMessage('edit-address-save', 'Salvar')}
                                    onMouseLeave={() => deleteMessage()}
                                >
                                    <FiSave color="#76b7eb" size={30} />
                                </button>
                            </ModalFooter>
                        </Modal>
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
                            <h2>Endereços</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                            <Table className="address-table" responsive hover striped>
                                <thead>
                                    <tr>                    
                                        <th>CEP</th>
                                        <th>Logradouro</th>
                                        <th>Número</th>
                                        <th>Bairro</th>
                                        <th>Cidade</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>                
                                    <tr 
                                        id="row1" 
                                        className="clickable-row"
                                        onClick={toggleDeleteAndAlterAddress}
                                    > 
                                        <td>18411-180</td>
                                        <td>José Roberto Coelho de Almeida</td>
                                        <td>42</td>
                                        <td>Jardim Virgínia</td>
                                        <td>Itapeva</td>
                                        <td>SP</td>
                                    </tr>                                                    
                                </tbody>
                            </Table>
                
                                <div className="address-data-container-buttons row">                                    
                                    <button 
                                        id="add-address" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('add-address', 'Adicionar')}
                                        onMouseLeave={() => deleteMessage()}
                                        onClick={toggleAddAddress}
                                    >
                                        <FiPlusCircle color="#76b7eb" size={30} />
                                    </button>
                                </div>
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>        
        </div>
    );
}

export default CompanyAddressSection;