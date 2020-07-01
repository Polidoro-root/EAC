import React, { useState, useEffect } from 'react';
import './styles.css';
import { 
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Accordion, Card } from 'react-bootstrap';
import HeaderNavbar from '../components/Navbar';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function UserIndex(){
    const companyId = localStorage.getItem('companyId');
    const email = localStorage.getItem('Email');

    const [vacancies, setVacancies] = useState([]);
    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        api.get('companyProfile', {
            headers: {
                companyId: companyId
            }
        })
        .then(response => {
            setVacancies(response.data[0]['vacancies']);
        })
		}, []);
		console.log(vacancies);

    useEffect(() => {
        api.get('companyIndex', {
            headers: {
                companyId: companyId
            }
        })
        .then(response => {
            setInvitations(response.data);            
        });
    }, []);

    console.log(vacancies);

    const history = useHistory();

    let filteredInvitations;

    return (            
        <Container fluid={true}>
            <HeaderNavbar />

            <h1>Interessados</h1>

            {vacancies.map(vacancy => (
            <div key={vacancy.id}>                
                <Accordion>                    
                    <Card className="accordion">
                        <Card.Header className="accordion-header">
                            <Accordion.Toggle                             
                                className="accordion-button" 
                                variant="link" 
                                eventKey="0"
                            >
                                <h2>
                                    {`${vacancy.vacancy} 
                                    em ${vacancy.city} / ${vacancy.uf} 
                                    com salário de ${vacancy.salary}`}
                                </h2>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                            <ul className="list-invitations">
                                {invitations.filter(invitation =>
                                    invitation.invitationsVacanciesId === vacancy.id)
                                    .map(invitation => (                    
                                    <li key={invitation.id} className="invitation">
                                        <Row>
                                            <Col sm="12" md="6">
                                                <strong>Área de Interesse:</strong>
                                                <p>{invitation.interestArea}</p>
                                            </Col>
                                            <Col sm="12" md="6">
                                                <strong>Experiência na Área:</strong>
                                                <p>{invitation.experienceArea}</p>
                                            </Col>                                        
                                            <Col sm="12" md="6">
                                                <strong>Último Emprego:</strong>
                                                <p>{invitation.lastJob}</p>
                                            </Col>
                                            <Col sm="12" md="6">
                                                <strong>Sobre Si:</strong>
                                                <p>{invitation.aboutYourself}</p>
                                            </Col>
                                        </Row>
                                        
                                        <h2>Graduações</h2>

                                        <ul className="list-invitations-graduations">
                                        {invitation.graduations.map(graduation => (
                                            <li key={graduation.id}>
                                                <strong>Nível de Graduação:</strong>
                                                <p>{graduation.graduationLevel}</p>

                                                <strong>Curso:</strong>
                                                <p>{graduation.course}</p>
                                            </li>
                                        ))}
                                        </ul>

                                        <footer className="accept-decline-options">
                                            <button
                                                type="button"
                                                onClick={async e => {
                                                    e.preventDefault();
                                                            
                                                    try{
                                                        const id = invitation.id;
                                                        await api.delete(`companyIndex/${id}`, {
                                                            headers: { companyId: companyId }
                                                        });

                                                        setInvitations(invitations.filter(invitation => 
                                                            invitation.id !== id));
                                                    } catch(err) {
                                                        alert('Erro ao deletar convite, tente novamente.');
                                                    }
                                                }}
                                            >
                                                <FiTrash2 color="#76b7eb" size={30} />
                                            </button>
                                            
                                            <button
                                                type="button"
                                                onClick={async e => {
                                                    e.preventDefault();
                                                            
                                                    try{
                                                        const invitationId = invitation.id;
                                                        console.log(invitationId);

                                                        await api.put(`companyIndex/${invitationId}`);

                                                        setInvitations(invitations.filter(invitation =>
                                                            invitation.id !== invitationId));

                                                        const { data } = await api.post('companyIndex', undefined, {
                                                            headers: {
                                                                userId: invitation.invitationsUsersId,
                                                                companyId: invitation.invitationsCompaniesId,
                                                                vacancyId: invitation.invitationsVacanciesId,
                                                            }
                                                        });

                                                        console.log("ROOMM =>> ", data);

                                                        history.push(`/companyProfile/chat?email=${email}&room=${data}&vacancy=${vacancy.vacancy}`);
                                                    } catch(err) {
                                                        alert('Erro ao aceitar convite, tente novamente.');
                                                    }
                                                }}
                                            >
                                                <FiCheck color="#76b7eb" size={30} />
                                            </button>                            
                                        </footer>
                                    </li>
                                ))}                
                            </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            ))}                        
        </Container>        
    );
}