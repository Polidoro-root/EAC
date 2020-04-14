import React, { useState, useEffect } from 'react';
import { 
    Container,
    Col, 
    Row,
    Table,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import {
    FiTrash2,
    FiEdit,
    FiChevronsDown,
    FiChevronsUp,
    FiBookOpen, 
    FiChevronsLeft,
    FiBriefcase,
    FiCrosshair, 
    FiFileText,  
    FiLock,
    FiUnlock,
    FiAtSign,
    FiPhone,
    FaMailBulk,
    FiHome,
    TiSortNumerically,
    GiFamilyHouse,
    FaCity,
    FaSearchLocation,
    FiPlusCircle
    } from 'react-icons/all';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function UserProfile(){
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

    const [graduations, setGraduations] = useState([]);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('userProfile', {
            headers: {
                userId: userId
            }
        }).then(response => {
            setGraduations(response.data[1]);
        });        
    }, [userId]);

    const getData = async () => {
        const response = await api.get('userProfile', {
            headers: {
                userId: userId
            }
        });

        localStorage.setItem('InterestArea', response.data[0].interestArea);
        localStorage.setItem('ExperienceArea', response.data[0].experienceArea);
        localStorage.setItem('LastJob', response.data[0].lastJob);        
        localStorage.setItem('AboutYourself', response.data[0].aboutYourself);
        localStorage.setItem('Email', response.data[0].email);
        localStorage.setItem('Phone', response.data[0].phone);        
    };
    
    getData();
    
    const interestArea = localStorage.getItem('InterestArea');
    const experienceArea = localStorage.getItem('ExperienceArea');
    const lastJob = localStorage.getItem('LastJob');
    const aboutYourself = localStorage.getItem('AboutYourself');
    const email = localStorage.getItem('Email');
    const phone = localStorage.getItem('Phone');    

    const history = useHistory();

    return (        
        <Container fluid={true}>
            
            <HeaderNavbar />
            
            <header>                                
                <h1>Perfil</h1>
                <p>
                    Insira seus dados na área de Graduações para destacar-se
                </p>                
            </header>
            {console.log(graduations)}
            
            <div>
            
            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            onClick={() => toggleAccordionIcon()}
                        >
                            <h2>Dados Pessoais</h2>
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
                                                <FiLock color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                Password
                                            </h3>
                                        </Col>
                                    </Row>                                    
                                </div>
                            </Container> 
                            <div className="user-data-container-button">
                                <Link
                                    to="/userProfile/changePassword"
                                    id="alter-password"
                                    className="button col-2 mx-auto"
                                    onMouseOver={() => 
                                        createMessage(
                                            'alter-password', 'Editar Senha'
                                        )}
                                    onMouseLeave={() => deleteMessage()}                                    
                                >                    
                                    <FiUnlock color="#76b7eb" size={30} />
                                </Link>
                            </div>        
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            onClick={() => toggleAccordionIcon()}
                        >
                            <h2>Contato</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                                <Container>
                                    <section className="content">
                                        <Row>
                                            <Col>
                                                <FiAtSign color="#76b7eb" size={50} />
                                                <h2>{email}</h2>
                                            </Col>
                                            <Col>
                                                <FiPhone color="#76b7eb" size={50} />
                                                <h2>{phone}</h2>
                                            </Col>
                                        </Row>
                                    </section>
                                </Container>
                
                                <div className="contact-data-container-buttons row">                                    
                                    <Link 
                                        id="alter-contact" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('alter-contact', 'Editar')}
                                        onMouseLeave={() => deleteMessage()}
                                        to="/userProfile/alterContact"
                                    >
                                        <FiEdit color="#76b7eb" size={30} />
                                    </Link>
                                </div>
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>            

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
                                            {interestArea}
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiBookOpen color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            {experienceArea}
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
                                            {lastJob}
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiFileText color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            {aboutYourself}
                                        </h3>
                                    </Col>
                                </Row>                                
                            </div>
                        </Container>
                        <div className="professional-data-container-buttons row">
                            <Link 
                                id="alter-professional" 
                                className="button col-2"
                                onMouseOver={() => createMessage('alter-professional', 'Editar')}
                                onMouseLeave={() => deleteMessage()}
                                to="/userProfile/alterProfessional"
                            >
                                <FiEdit color="#76b7eb" size={30} />
                            </Link>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>      

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
                            <ul className="list-graduations">
                                {graduations.map(graduation => (
                                    <li key={graduation.id}>
                                        <strong>NÍVEL DE GRADUAÇÃO:</strong>
                                        <p>{graduation.graduationLevel}</p>

                                        <strong>CURSO:</strong>
                                        <p>{graduation.course}</p>

                                        <button                                            
                                            className="collapse-button"
                                            type="button"
                                            onClick={async e => {
                                                e.preventDefault();

                                                try{
                                                    const id = graduation.id;
                                                    await api.delete(`userProfile/${id}`,{
                                                        headers: { userId: userId }
                                                    });

                                                    setGraduations(graduations.filter(graduation =>
                                                            graduation.id !== id));                                                                                                    
                                                } catch(err) {
                                                    alert('Erro ao deletar graduação, tente novamente.');
                                                }
                                            }}                                            
                                        >
                                            <FiTrash2 color="#76b7eb" size={30} />
                                        </button>
                                    </li>
                                ))}
                            </ul>                            

                            <div className="graduation-data-container-buttons row">                                
                                <Link 
                                    id="add-graduation" 
                                    className="button col-2"
                                    onMouseOver={() => createMessage('add-graduation', 'Adicionar')}
                                    onMouseLeave={() => deleteMessage()}
                                    to="/userProfile/addGraduation"
                                >
                                    <FiPlusCircle color="#76b7eb" size={30} />
                                </Link>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
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
                                        <th>Empresa</th>
                                        <th>Vaga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        id="row1" 
                                        className="clickable-row"                                        
                                    >                                        
                                        <td>Tecnomaq</td>
                                        <td>Programador</td>
                                    </tr>
                                    <tr>                                        
                                        <td>X-tudo</td>
                                        <td>Cozinheiro</td>
                                    </tr>
                                    <tr>
                                        <td>Lojas CEM</td>
                                        <td>Vendedor</td>
                                    </tr>
                                </tbody>
                            </Table>                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>            
        </Container>
    );
}

export default UserProfile;