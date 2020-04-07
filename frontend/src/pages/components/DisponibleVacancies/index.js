import React, { useState } from 'react';
import {   
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col, 
  Row,
  Card,
  CardHeader,
  CardFooter,
  CardBody,  
  CardText  
  } from 'reactstrap';
import { FiSend, FiFileText } from 'react-icons/fi';
import './styles.css';

const DisponibleVacancies = () => {
  const createMessage = function(id, message){
    if(!document.querySelector('span.action')){
        const buttonElement = document.querySelector(`#${id}`);
        const spanElement = document.createElement('span');
        const text = document.createTextNode(message);
        
        spanElement.setAttribute('class', 'action');
        spanElement.appendChild(text);
        buttonElement.appendChild(spanElement);
    }
  };

  const deleteMessage = function(){
      if(document.querySelector('span.action')){
          document.querySelector('span.action').remove();
      }
  }  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="card-container">        
        <Row>
          <Col xs="11" sm="11" md="5" lg="4">
            <Card>
              <CardHeader tag="h3">
                PROGRAMADOR
              </CardHeader>
              <CardBody>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Salário:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      R$ 2000,00
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Cidade:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Itapeva
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Estado
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      SP
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <button className="button" onClick={toggle}>
                  Detalhes
                  <FiFileText className="ml-3" color="#76b7eb"  />
                </button> 
              </CardFooter>
            </Card>
          </Col>
          <Col xs="11" sm="11" md="5" lg="4">
            <Card>
              <CardHeader tag="h3">
                PROGRAMADOR
              </CardHeader>
              <CardBody>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Salário:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      R$ 2000,00
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Cidade:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Itapeva
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Estado
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      SP
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <button className="button" onClick={toggle}>
                  Detalhes
                  <FiFileText className="ml-3" color="#76b7eb" />
                </button> 
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="11" sm="11" md="5" lg="4">
            <Card>
              <CardHeader tag="h3">
                PROGRAMADOR
              </CardHeader>
              <CardBody>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Salário:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      R$ 2000,00
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Cidade:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Itapeva
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Estado
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      SP
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <button className="button" onClick={toggle}>
                  Detalhes
                  <FiFileText className="ml-3" color="#76b7eb" />
                </button> 
              </CardFooter>
            </Card>
          </Col>
          <Col xs="11" sm="11" md="5" lg="4">
            <Card>
              <CardHeader tag="h3">
                PROGRAMADOR
              </CardHeader>
              <CardBody>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Salário:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      R$ 2000,00
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Cidade:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Itapeva
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Estado
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      SP
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <button className="button" onClick={toggle}>
                  Detalhes
                  <FiFileText className="ml-3" color="#76b7eb" />
                </button> 
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div> 
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          PROGRAMADOR          
        </ModalHeader>
        <ModalBody className="all">
        <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Empresa:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Tecnomaq
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                CNPJ:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                17.927.593/0001-39
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Salário:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                R$ 2000,00
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Cidade:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Itapeva
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Estado:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                SP
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Dias de Trabalho:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Segunda á Sexta
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Horário de Entrada:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                08:00:00
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Horário de Ida ao Almoço:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                12:00:00
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Horário de Volta do Almoço:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                14:00:00
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Horário de Saída:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                18:00:00
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Requisitos:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Curso técnico na área de TI
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Benefícios:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Vale alimentação e transporte
              </ModalBody>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>                  
          <div className="modal-footer-buttons">
            <button 
              id="send-icon"
              onMouseOver={() => createMessage("send-icon", "Enviar Mensagem")}
              onMouseLeave={() => deleteMessage()}
            >
              <FiSend color="#76b7eb" size={30} />
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DisponibleVacancies;