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
  CardText,  
  } from 'reactstrap';
import { FiPlusCircle, FiFileText } from 'react-icons/fi';
import './styles.css';

const DisponibleUsers = () => {
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
                      Experiência na Área:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      JavaScript, NodeJS e ReactJS
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Ultimo Emprego:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Secretário em Consultório de Fisioterapia
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Sobre Você:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
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
                      Experiência na Área:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      JavaScript, NodeJS e ReactJS
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Ultimo Emprego:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Secretário em Consultório de Fisioterapia
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Sobre Você:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
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
                      Experiência na Área:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      JavaScript, NodeJS e ReactJS
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Ultimo Emprego:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Secretário em Consultório de Fisioterapia
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Sobre Você:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
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
                      Experiência na Área:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      JavaScript, NodeJS e ReactJS
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Ultimo Emprego:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Secretário em Consultório de Fisioterapia
                    </CardText>
                  </Col>
                </Row>
                <Row className="card-body-row">
                  <Col className="key">
                    <CardText>
                      Sobre Você:
                    </CardText>                
                  </Col>
                  <Col className="value">
                    <CardText>
                      Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
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
                Nível de Graduação:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Superior
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Curso:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Ciência da Computação
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Experiência na Área:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                JavaScript, NodeJS e ReactJS
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Ultimo Emprego:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Secretário em Consultório de Fisioterapia
              </ModalBody>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="6">
              <ModalBody className="key">
                Sobre Você:
              </ModalBody>
            </Col>
            <Col xs="6" sm="6">
              <ModalBody className="value">
                Auto-didata e interessado em trabalhar com as tecnologias mais atuais do mercado
              </ModalBody>
            </Col>
          </Row>        
        </ModalBody>
        <ModalFooter>                  
          <div className="modal-footer-buttons">
            <button 
              id="plus-icon"               
              onMouseOver={() => createMessage("plus-icon", "Adicionar aos Favoritos")}
              onMouseLeave={() => deleteMessage()}
            >
              <FiPlusCircle color="#76b7eb" size={30} />
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DisponibleUsers;