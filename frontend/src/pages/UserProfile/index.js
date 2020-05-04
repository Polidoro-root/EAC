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
    
    console.log(graduations);
    
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
        .then(response => setFirstChat(response.data[0].chatId));

        return `email=${email}&room=${firstChat}`;
    };

    console.log(queryString());

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
                            
                        >
                            <h2>Contato</h2>
                            
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                                <Container>
                                    <section className="content">
                                        <Row>
                                            <Col>
                                                <FiAtSign color="#76b7eb" size={50} />
                                                <h2>{user.email}</h2>
                                            </Col>
                                            <Col>
                                                <FiPhone color="#76b7eb" size={50} />
                                                <h2>{user.phone}</h2>
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
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiCrosshair color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            {user.interestArea}
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiBookOpen color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            {user.experienceArea}
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
                                            {user.lastJob}
                                        </h3>
                                    </Col>
                                    <Col xs="12" sm="10" md="6" lg="6">
                                        <label className="icon">
                                            <FiFileText color="#76b7eb" size={30} />
                                        </label>
                                        <h3 className="data">
                                            {user.aboutYourself}
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