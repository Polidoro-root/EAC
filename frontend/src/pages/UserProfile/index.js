import React, { useState, useEffect } from 'react';
import { 
    Container,
    Col, 
    Row,
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import {
    FiTrash2,
    FiEdit,    
    FiBookOpen, 
    FiChevronsLeft,
    FiBriefcase,
    FiCrosshair, 
    FiFileText,  
    FiLock,
    FiUnlock,
    FiAtSign,
    FiPhone,
    FiMessageSquare,
    FiPlusCircle
    } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import createMessage from '../../utils/createMessage';
import deleteMessage from '../../utils/deleteMessage';

function UserProfile(){
    const [firstChat, setFirstChat] = useState('');
    const [firstVacancy, setFirstVacancy] = useState('');
    const [user, setUser] = useState([]);
    const [graduations, setGraduations] = useState([]);        

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('userProfile', {
            headers: {
                userId: userId
            }
        })
        .then(response => {
            setUser(response.data);
            setGraduations(response.data[0].graduations);
        });        
    }, [userId]);           
    
    user.map(user => {
        localStorage.setItem('InterestArea', user.interestArea);
        localStorage.setItem('ExperienceArea', user.experienceArea);
        localStorage.setItem('LastJob', user.lastJob);        
        localStorage.setItem('AboutYourself', user.aboutYourself);
        localStorage.setItem('Email', user.email);
        localStorage.setItem('Phone', user.phone);            
    });

    const queryString = () => {
        const email = localStorage.getItem('Email');        

        api.get('userProfile/chat', {
            headers: {
                userId: userId
            }
        })
        .then(response => {            
            setFirstChat(response.data[0].chatId);
            setFirstVacancy(response.data[0].vacancy);            
        });

        return `email=${email}&room=${firstChat}&vacancy=${firstVacancy}`;
    };    

    return (
        <Container fluid={true}>
            
            <HeaderNavbar />
            
            <header>                                
                <h1>Perfil</h1>
                <p>
                    Insira seus dados na área de Graduações para destacar-se
                </p>                
            </header>            
            
            {user.map(user => (
            <div key={user.id}>

            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            
                        >
                            <h2>Dados Pessoais</h2>
                            
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <Container>                                
                                <div className="content">                                    
                                    <Row>
                                        <Col sm="12" md="6">                                            
                                            <FiLock color="#76b7eb" className="profile-icon" />
                                            <h2 className="profile-data">
                                                **********
                                            </h2>
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
                            
                        >
                            <h2>Contato</h2>
                            
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                                <Container>
                                    <section className="content">
                                        <Row>
                                            <Col sm="12" md="6">
                                                <FiAtSign color="#76b7eb" className="profile-icon" />
                                                <h2 className="profile-data">{user.email}</h2>
                                            </Col>
                                            <Col sm="12" md="6">
                                                <FiPhone color="#76b7eb" className="profile-icon" />
                                                <h2 className="profile-data">{user.phone}</h2>
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
                        
                    >
                        <h2>Área Profissional</h2>
                        
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="accordion-body">
                        <Container>
                            <div className="content">
                                <Row>
                                    <Col sm="12" md="6">                                        
                                        <FiCrosshair color="#76b7eb" className="profile-icon" />
                                        <h2 className="profile-data">
                                            {user.interestArea}
                                        </h2>
                                    </Col>
                                    <Col sm="12" md="6">                                        
                                        <FiBookOpen color="#76b7eb" className="profile-icon" />
                                        <h2 className="profile-data">
                                            {user.experienceArea}
                                        </h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12" md="6">                                        
                                            <FiChevronsLeft color="#76b7eb" className="profile-icon" />
                                            <FiBriefcase color="#76b7eb" className="profile-icon" />
                                        <h2 className="profile-data">
                                            {user.lastJob}
                                        </h2>
                                    </Col>
                                    <Col sm="12" md="6">                                        
                                        <FiFileText color="#76b7eb" className="profile-icon" />
                                        <h2 className="profile-data">
                                            {user.aboutYourself}
                                        </h2>
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
        </div>
        ))}

        <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            
                        >
                            <h2>Graduações</h2>                            
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

            <div className="go-to-the-chat-page">
                <Link
                    id="chat-link"
                    to={`/userProfile/chat?${queryString()}`}
                    onMouseOver={() => createMessage('chat-link', 'Ir para o Chat')}
                    onMouseLeave={() => deleteMessage()}
                >
                    <FiMessageSquare color="#76b7eb" />
                </Link>
            </div>
            
        </Container>
    );
}

export default UserProfile;