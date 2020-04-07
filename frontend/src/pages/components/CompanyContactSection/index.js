import React, { useState } from 'react';
import {     
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Table,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import { 
    FiTrash2,
    FiEdit,    
    FiPlusCircle,
    FiChevronsDown,
    FiChevronsUp,
    FiSave
 } from 'react-icons/all';


function UserContactSection(){
    const [modalAddContact, setModalAddContact] = useState(false);
    const [modalDeleteAndAlterContact, setModalDeleteAndAlterContact] = 
        useState(false);
    const [nestedModalDelete, setNestedModalDelete] = 
        useState(false);
    const [nestedModalAlter, setNestedModalAlter] = 
        useState(false);

    const toggleAddContact = () => setModalAddContact(!modalAddContact);

    const toggleDeleteAndAlterContact = () => 
        setModalDeleteAndAlterContact(!modalDeleteAndAlterContact);

    const toggleNestedDelete = () => setNestedModalDelete(!nestedModalDelete);

    const toggleNestedAlter = () => setNestedModalAlter(!nestedModalAlter);

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
                    isOpen={modalAddContact} 
                    toggle={toggleAddContact} 
                    fade={false}
                    className="add-contact"
                >
                    <ModalHeader 
                        toggle={toggleAddContact}
                    >
                        Adicionar Contato
                    </ModalHeader>
                    <ModalBody className="modal-body-border">
                        <div className="input-contact">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-contact">
                            <input type="text" placeholder="Telefone" />
                        </div>                        
                    </ModalBody>
                    <ModalFooter>
                        <button 
                            id="add-contact-save"
                            className="button col-3" 
                            onClick={toggleAddContact}
                            onMouseOver={() => createMessage('add-contact-save', 'Salvar')}
                            onMouseLeave={() => deleteMessage()}
                        >
                            <FiSave color="#76b7eb" size={30} />
                        </button>
                    </ModalFooter>
                </Modal>
            </div>

            <div>
                <Modal 
                    isOpen={modalDeleteAndAlterContact} 
                    toggle={toggleDeleteAndAlterContact}
                    fade={false}
                >                    
                    <ModalFooter>
                        <div className="contact-delete-alter-options">
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
                        <div className="contact-delete-alter-options">
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
                            isOpen={nestedModalAlter} 
                            toggle={toggleNestedAlter}
                            className="nested-alter"
                            fade={false}
                        >
                            <ModalHeader>
                                Editar Contato
                            </ModalHeader>
                            <ModalBody className="modal-body-border">
                                <div className="input-contact">
                                    <input type="text" value="jvrpfc@hotmail.com" />
                                </div>
                                <div className="input-contact">
                                    <input type="text" value="15 99731-1989" />
                                </div>                                
                            </ModalBody>
                            <ModalFooter>
                                <button 
                                    id="edit-contact-save"
                                    className="button col-3" 
                                    
                                    onMouseOver={() => createMessage('edit-contact-save', 'Salvar')}
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
                            <h2>Contatos</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                            <Table className="contact-table" responsive hover striped>
                                <thead>
                                    <tr>                    
                                        <th>Email</th>
                                        <th>Telefone</th>                                        
                                    </tr>
                                </thead>
                                <tbody>                
                                    <tr 
                                        id="row1" 
                                        className="clickable-row"
                                        onClick={toggleDeleteAndAlterContact}
                                    > 
                                        <td>jvrpfc@hotmail.com</td>
                                        <td>15 99731-1989</td>                                        
                                    </tr>                
                                    <tr id="row2" className="clickable-row">
                                        <td>jvrp03@hotmail.com</td>
                                        <td>15 99850-1951</td>                                        
                                    </tr>
                                    <tr id="row3" className="clickable-row">                    
                                        <td>jv.polidoro@outlook.com</td>
                                        <td>15 99704-4455</td>                                        
                                    </tr>
                                </tbody>
                            </Table>
                
                                <div className="contact-data-container-buttons row">                                    
                                    <button 
                                        id="add-contact" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('add-contact', 'Adicionar')}
                                        onMouseLeave={() => deleteMessage()}
                                        onClick={toggleAddContact}
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

export default UserContactSection;