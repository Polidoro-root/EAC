import React, { useState } from 'react';
import { 
    Container, 
    Col, 
    Row,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Table,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import { 
    FiBook, 
    FiBookmark,    
    FiTrash2,
    FiEdit,    
    FiPlusCircle,
    FiChevronsDown,
    FiChevronsUp,    
    FiSave
 } from 'react-icons/fi';
import './styles.css';

function UserGraduationSection(){
    const [modalAddGraduation, setModalAddGraduation] = useState(false);
    const [modalDeleteAndAlterGraduation, setModalDeleteAndAlterGraduation] = 
        useState(false);
    const [nestedModalDelete, setNestedModalDelete] = 
        useState(false);
    const [nestedModalAlter, setNestedModalAlter] = 
        useState(false);

    const toggleDeleteAndAlterGraduation = () => 
        setModalDeleteAndAlterGraduation(!modalDeleteAndAlterGraduation);

    const toggleNestedDelete = () => setNestedModalDelete(!nestedModalDelete);

    const toggleNestedAlter = () => setNestedModalAlter(!nestedModalAlter);

    const toggleAddGraduation = () => setModalAddGraduation(!modalAddGraduation);    

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
                    isOpen={modalAddGraduation} 
                    toggle={toggleAddGraduation} 
                    fade={false}
                    className="add-graduation"
                >
                    <ModalHeader 
                        toggle={toggleAddGraduation}
                    >
                        Adicionar Contato
                    </ModalHeader>
                    <ModalBody className="modal-body-border">                        
                        <div className="input-graduation">
                            <select name="nivelGraduacao" id="nivelGraduacao">
                                <option value="" disabled selected hidden>
                                    Nível de Graduação...
                                </option>
                                <option value="incompleto">Incompleto</option>
                                <option value="tecnico">Técnico</option>
                                <option value="superior">Superior</option>
                                <option value="especializacao">Especialização</option>
                                <option value="mestrado">Mestrado</option>
                                <option value="doutorado">Doutorado</option>
                            </select>
                        </div>
                        <div className="input-graduation">
                            <input type="text" placeholder="Curso" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button 
                            id="add-graduation-save"
                            className="button col-3" 
                            onClick={toggleAddGraduation}
                            onMouseOver={() => createMessage('add-graduation-save', 'Salvar')}
                            onMouseLeave={() => deleteMessage()}
                        >
                            <FiSave color="#76b7eb" size={30} />
                        </button>
                    </ModalFooter>
                </Modal>
            </div>

            <div>
                <Modal 
                    isOpen={modalDeleteAndAlterGraduation} 
                    toggle={toggleDeleteAndAlterGraduation}
                    fade={false}                    
                >                    
                    <ModalFooter>
                        <div className="graduation-delete-alter-options">
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
                        <div className="graduation-delete-alter-options">
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
                            className="nested-alter-graduation"
                            fade={false}
                        >
                            <ModalHeader>
                                Editar Graduação
                            </ModalHeader>
                            <ModalBody className="modal-body-border">
                                <div className="input-graduation">
                                    <input type="text" value="Técnico" />
                                </div>
                                <div className="input-graduation">
                                    <input type="text" value="Desenvolvimento de Sistemas" />
                                </div>                                
                            </ModalBody>
                            <ModalFooter>
                                <button 
                                    id="edit-graduation-save"
                                    className="button col-3" 
                                    
                                    onMouseOver={() => createMessage('edit-graduation-save', 'Salvar')}
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
                            <h2>Graduações</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <Table responsive hover striped>
                                <thead>
                                    <tr>                                        
                                        <th>Nível de Graduação</th>
                                        <th>Curso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        id="row1" 
                                        className="clickable-row"
                                        onClick={toggleDeleteAndAlterGraduation}
                                    >                                        
                                        <td>Técnico</td>
                                        <td>Desenvolvimento de Sistemas</td>
                                    </tr>
                                    <tr>                                        
                                        <td>Superior</td>
                                        <td>Ciências da Computação</td>
                                    </tr>
                                    <tr>
                                        <td>Pós-Graduação</td>
                                        <td>Ciências de Dados</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="graduation-data-container-buttons row">                                
                                <button 
                                    id="add-graduation" 
                                    className="button col-2"
                                    onMouseOver={() => createMessage('add-graduation', 'Adicionar')}
                                    onMouseLeave={() => deleteMessage()}
                                    onClick={toggleAddGraduation}
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

export default UserGraduationSection;