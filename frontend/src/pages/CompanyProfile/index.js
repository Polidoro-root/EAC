import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { 
    Container,
    Row,
    Col,    
 } from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import {
    FiChevronsDown,
    FiChevronsUp,
    FiLock,
    FiUnlock,
    FiUser,
    FiFileText,
    FiPlusCircle,
    FiAtSign,
    FiPhone,
    FiTrash2,
    FiEdit
} from 'react-icons/all';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import CompanyConversationsSection from '../components/CompanyConversationsSection';
import api from '../../services/api';

function CompanyProfile(){
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
    
    const [vacancies, setVacancies] = useState([]);

    const companyId = localStorage.getItem('companyId');

    useEffect(() => {
        api.get('companyProfile', {
            headers: {
                companyId: companyId
            }
        }).then(response => {
            setVacancies(response.data[1]);
        })
    }, [companyId]);

    const getData = async () => {
        const response = await api.get('companyProfile', {
            headers: {
                companyId: companyId
            }
        });
        
        localStorage.setItem('Name', response.data[0].name);
        localStorage.setItem('Password', response.data[0].password);
        localStorage.setItem('Cnpj', response.data[0].cnpj);
        localStorage.setItem('Email', response.data[0].email);
        localStorage.setItem('Phone', response.data[0].phone);
    }

    getData();

    const name = localStorage.getItem('Name');
    const password = localStorage.getItem('Password');
    const cnpj = localStorage.getItem('Cnpj');
    const email = localStorage.getItem('Email');
    const phone = localStorage.getItem('Phone');

    return (
        <Container fluid={true}>

            <HeaderNavbar />

            <header>
                <h1>Perfil</h1>
                <p>
                    Insira as Vagas disponíveis para encontrar profissionais.
                </p>
            </header>

            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            onClick={() => toggleAccordionIcon()}
                        >
                            <h2>Dados da Empresa</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <Container>
                                <div className="content">
                                    <Row>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiUser color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                {name}
                                            </h3>
                                        </Col>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiLock color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                Password
                                            </h3>
                                        </Col>
                                        <Col xs="12" sm="12" md="4" lg="4">
                                            <label className="icon">
                                                <FiFileText  color="#76b7eb" size={30}  />
                                            </label>
                                            <h3 className="data">
                                                {cnpj}
                                            </h3>
                                        </Col>
                                    </Row>                                        
                                </div>
                            </Container> 
                            <div className="user-data-container-button">
                                <Link
                                    to="/companyProfile/changePassword"
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
                            <h2>Contatos</h2>
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
                                        to="/companyProfile/alterContact" 
                                        id="edit-contact" 
                                        className="button col-2"
                                        onMouseOver={() => createMessage('edit-contact', 'Editar')}
                                        onMouseLeave={() => deleteMessage()}
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
                            <h2>Vagas</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="accordion-body">
                            <ul className="list-vacancies">
                                {vacancies.map(vacancy => (
                                    <li key={vacancy.id}>
                                        <strong>VAGA:</strong>
                                        <p>{vacancy.vacancy}</p>

                                        <strong>SALÁRIO:</strong>
                                        <p>{vacancy.salary}</p>

                                        <strong>REQUISITOS:</strong>
                                        <p>{vacancy.requirements}</p>
                                        
                                        <strong>CIDADE:</strong>
                                        <p>{vacancy.city}</p>

                                        <strong>ESTADO:</strong>
                                        <p>{vacancy.uf}</p>

                                        <button
                                            className="collapse-button"
                                            type="button"
                                            onClick={async e => {
                                                e.preventDefault();

                                                try{
                                                    const id = vacancy.id;
                                                    await api.delete(`companyProfile/${id}`,{
                                                        headers: { companyId: companyId }
                                                    });

                                                    setVacancies(vacancies.filter(vacancy =>
                                                            vacancy.id !== id));
                                                } catch(err) {
                                                    alert('Erro ao deletar vaga, tente novamente.');
                                                }
                                            }}
                                        >
                                            <FiTrash2 color="#76b7eb" size={30} />
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="vacancy-data-container-buttons row">
                                <Link
                                    to="/companyProfile/addVacancy"
                                    id="add-vacancy" 
                                    className="button col-2"
                                    onMouseOver={() => createMessage('add-vacancy', 'Adicionar')}
                                    onMouseLeave={() => deleteMessage()}                                    
                                >
                                    <FiPlusCircle color="#76b7eb" size={30} />
                                </Link>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <CompanyConversationsSection />
            
        </Container>
    );
}

export default CompanyProfile;