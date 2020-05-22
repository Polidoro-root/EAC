import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { 
    FiUser, 
    FiBriefcase, 
    FiLock, 
    FiLogIn, 
    FiAtSign, 
    FiArrowRightCircle 
} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function CompanyLogin(){
    const registerUrl = function(){        
        const currentUrl = window.location.href;
        if(currentUrl === "http://localhost:3000/userLogin"){            
            return "/userRegister";
        }
        else if(currentUrl === "http://localhost:3000/companyLogin"){            
            return "/companyRegister";
        }
    };
    
    const icon = function(){
        const currentUrl = window.location.href;
        if(currentUrl === "http://localhost:3000/userLogin"){            
            return <FiUser color="#76b7eb" size={200} />;
        }
        else if(currentUrl === "http://localhost:3000/companyLogin"){
            return <FiBriefcase color="#76b7eb" size={200} />;
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            password
        };

        try{
            const response = await api.post('companyLogin', data);
            
            localStorage.setItem('companyId', response.data.id);
            localStorage.setItem('contactId', response.data.contactid);

            history.push('/companyIndex');
        } catch(err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <Container>            
            <div className="content mt-4">
            <section className="form">

                <div className="icon-header">
                    {icon()}
                </div>

                <form onSubmit={handleLogin}>                   

                    <div className="row input-email my-3">                        
                        <FiAtSign color="#76b7eb" size={35} />                        
                        <Col>
                            <input 
                                type="text" 
                                placeholder="ex: eac@hotmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Col>
                    </div>
                    <div className="row input-password my-3">                                                
                        <FiLock color="#76b7eb" size={35} />                        
                        <Col>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </div>

                    <Row className="mt-4 mb-3">
                        <Col xs="9" sm="6" md="4" lg="3">
                            <button type="submit" className="button">
                                Entrar
                                <FiLogIn color="#76b7eb" size={35} />
                            </button>
                        </Col>
                    </Row>

                    <Row className="links">
                        <Link to={() => registerUrl()}>
                            Não possui uma conta? Cadastre-se
                            <FiArrowRightCircle color="#76b7eb" size={35} className="arrow-icon" />
                        </Link>
                    </Row>
                </form> 
            </section>
            </div>
        </Container>
    );
}