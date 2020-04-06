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
    FiPlus,
    FiEdit,        
    FiChevronsDown,
    FiChevronsUp,
    FiSave  
    } from 'react-icons/fi';

function CompanyVacancySection(){
    const [modalAddVacancy, setModalAddVacancy] = useState(false);
    const [modalNestedSelectAddress, setModalNestedSelectAddress] = 
        useState(false);
    const [modalDeleteAndAlterVacancy, setModalDeleteAndAlterVacancy] =    
        useState(false);
    const [modalNestedAlter, setModalNestedAlter] = useState(false);
    const [modalNestedDelete, setModalNestedDelete] = useState(false);

    
    const toggleAddVacancy = () => setModalAddVacancy(!modalAddVacancy);

    const toggleNestedSelectAddress = 
        () => setModalNestedSelectAddress(!modalNestedSelectAddress);

    const toggleDeleteAndAlterVacancy = 
        () => setModalDeleteAndAlterVacancy(!modalDeleteAndAlterVacancy);

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
                isOpen={modalAddVacancy} 
                toggle={toggleAddVacancy} 
                fade={false}
                className="add-vacancy"
            >
                <ModalHeader 
                    toggle={toggleAddVacancy}
                >
                    Adicionar Vaga
                </ModalHeader>
                <ModalBody className="modal-body-border">
                    <div className="input-vacancy">
                        <input 
                            type="text"
                            placeholder="Vaga"
                        />
                    </div>
                    <div className="input-vacancy">
                        <input 
                            type="text"
                            placeholder="Salário"
                        />
                    </div>                        
                    <div className="input-vacancy">
                        <input 
                            type="text"
                            placeholder="Dias de Trabalho"
                        />
                    </div>
                    <div className="input-vacancy">
                        <input 
                            type="time"
                            placeholder="Horário de Entrada"
                        />
                    </div>
                    <div className="input-vacancy">
                        <input 
                            type="time"
                            placeholder="Horário de Saída"
                        />
                    </div>
                    <div className="input-vacancy">
                        <input 
                            type="text"
                            placeholder="Requisitos"
                        />
                    </div>
                    <div className="input-vacancy">
                        <input 
                            type="text"
                            placeholder="Benefícios"
                        />
                    </div>
                </ModalBody>
                <ModalFooter>                        
                    <button 
                        id="add-vacancy-plus"
                        className="button col-8" 
                        onClick={toggleNestedSelectAddress}
                        onMouseOver={() => createMessage('add-vacancy-plus', 'Selecionar Endereço')}
                        onMouseLeave={() => deleteMessage()}
                    >
                        <FiPlus color="#76b7eb" size={30} />
                    </button>

                    <Modal 
                        isOpen={modalNestedSelectAddress} 
                        toggle={toggleNestedSelectAddress}
                        fade={false}
                        className="add-address-vacancy"
                    >
                        <ModalHeader 
                            toggle={toggleNestedSelectAddress}
                        >
                            Selecionar Endereço
                        </ModalHeader>
                        <ModalBody className="modal-body-border">
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
                        </ModalBody>                        
                    </Modal>
                </ModalFooter>
            </Modal>
            </div>                

            <div>
                <Modal 
                    isOpen={modalDeleteAndAlterVacancy} 
                    toggle={toggleDeleteAndAlterVacancy}
                    fade={false}
                >                    
                    <ModalFooter>
                        <div className="vacancy-delete-alter-options">
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
                        <div className="vacancy-delete-alter-options">
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
                                <div className="input-vacancy">
                                    <input 
                                        type="text" 
                                        value="Programador" 
                                    />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="text" 
                                        value="R$ 2000,00" 
                                    />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="text" 
                                        value="Segunda á Sexta" />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="time" 
                                        value="08:00" 
                                    />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="time" 
                                        value="18:00" 
                                    />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="text" 
                                        value="Curso técnico na área de TI" 
                                    />
                                </div>
                                <div className="input-vacancy">
                                    <input 
                                        type="text" 
                                        value="Vale alimentação e transporte" 
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <button 
                                    id="edit-vacancy-save"
                                    className="button col-3" 
                                    
                                    onMouseOver={() => createMessage('edit-vacancy-save', 'Salvar')}
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
                            <h2>Vagas</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                            <Table 
                                className="vacancy-table" 
                                responsive
                                hover 
                                striped
                            >
                                <thead>
                                    <tr>
                                        <th>Vaga</th>
                                        <th colSpan="2">Salário</th>
                                        <th>Dias de Trabalho</th>
                                        <th>Horário de Entrada</th>
                                        <th>Horário de Saída</th>
                                        <th>Requisitos</th>
                                        <th>Benefícios</th>
                                    </tr>
                                </thead>
                                <tbody>                
                                    <tr 
                                        id="row1" 
                                        className="clickable-row"
                                        onClick={toggleDeleteAndAlterVacancy}
                                    > 
                                        <td>Programador</td>
                                        <td colSpan="2">R$ 2000,00</td>
                                        <td>Segunda á Sexta</td>
                                        <td>08:00:00</td>
                                        <td>18:00:00</td>
                                        <td>Curso técnico na área de TI</td>
                                        <td>Vale alimentação e transporte</td>
                                    </tr>                                                    
                                </tbody>
                            </Table>
                
                                <div className="address-data-container-buttons row">                                    
                                    <button 
                                        id="add-vacancy" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('add-vacancy', 'Adicionar')}
                                        onMouseLeave={() => deleteMessage()}
                                        onClick={toggleAddVacancy}
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

export default CompanyVacancySection;