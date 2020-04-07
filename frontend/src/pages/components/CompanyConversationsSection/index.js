import React, { useState } from 'react';
import {     
    Modal,         
    ModalFooter,
    Table,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import {     
    FiTrash2,
    FiLogIn,        
    FiChevronsDown,
    FiChevronsUp,        
 } from 'react-icons/fi';
import './styles.css';

function CompanyConversationsSection(){    
    const [modalDeleteAndEnterConversation, setModalDeleteAndEnterConversation] = 
        useState(false);    

    const toggleDeleteAndEnterConversation = () => 
        setModalDeleteAndEnterConversation(!modalDeleteAndEnterConversation);    

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
                    isOpen={modalDeleteAndEnterConversation} 
                    toggle={toggleDeleteAndEnterConversation}
                    fade={false}
                    className="conversation-modal"
                >                    
                    <ModalFooter>
                        <div className="conversation-delete-enter-options">
                            <button
                                id="delete-icon"                                                             
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
                        <div className="conversation-delete-enter-options">
                            <button 
                                id="enter-icon"                                                            
                                className="button"
                                onMouseOver={() => createMessage("enter-icon" , "Ir para Conversa")}
                                onMouseLeave={() => deleteMessage()}
                            >
                                <FiLogIn
                                    color="#76b7eb"
                                    size={30}                                
                                />
                            </button>
                        </div>
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
                            <h2>Conversas</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <Table responsive hover striped>
                                <thead>
                                    <tr>                                        
                                        <th>Usuário</th>
                                        <th>Vaga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        id="row1" 
                                        className="clickable-row"
                                        onClick={toggleDeleteAndEnterConversation}
                                    >                                        
                                        <td>jv.polidoro@outlook.com</td>
                                        <td>Programador</td>
                                    </tr>
                                    <tr>                                        
                                        <td>jvrpfc@hotmail.com</td>
                                        <td>Cozinheiro</td>
                                    </tr>
                                    <tr>
                                        <td>jvrp03@hotmail.com</td>
                                        <td>Vendedor</td>
                                    </tr>
                                </tbody>
                            </Table>                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default CompanyConversationsSection;