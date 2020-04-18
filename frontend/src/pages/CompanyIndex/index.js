import React, { useState, useEffect } from 'react';
import './styles.css';
import { 
    Container,     
} from 'reactstrap';
import HeaderNavbar from '../components/Navbar';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function UserIndex(){
    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        api.get('companyIndex', {
            headers: {                
                companyId: 1
            }
        }).then(response => {
            setInvitations(response.data);            
        });
    }, [invitations]);

    const history = useHistory();

    return (            
        <Container fluid={true}>
            <HeaderNavbar />
        
            <ul className="list-invitations">
                {invitations.map(invitation => (                    
                    <li key={invitation.id} className="invitation">
                        <strong>Área de Interesse:</strong>
                        <p>{invitation.interestArea}</p>

                        <strong>Experiência na Área:</strong>
                        <p>{invitation.experienceArea}</p>

                        <strong>Último Emprego:</strong>
                        <p>{invitation.lastJob}</p>

                        <strong>Sobre Si:</strong>
                        <p>{invitation.aboutYourself}</p>
                        
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

                                    history.push('/companyChat');
                                } catch(err) {
                                    alert('Erro ao aceitar convite, tente novamente.');
                                }
                            }}
                        >
                            <FiCheck color="#76b7eb" size={30} />
                        </button>                        
                        
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
                    </li>
                ))}                
            </ul>            
        </Container>        
    );
}