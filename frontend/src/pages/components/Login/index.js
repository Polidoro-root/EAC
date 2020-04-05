import React from 'react';
import { FiUser, FiBriefcase, FiLock, FiLogIn, FiAtSign, FiArrowRightCircle } from 'react-icons/fi';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Login(){
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

    return (        
        <Container>            
            <div className="content mt-4">
            <section className="form">                
                
                {icon()}

                <form>                   

                    <div className="row input-email my-3">
                        <Col xs="1">
                            <FiAtSign color="#76b7eb" size={35} />
                        </Col>
                        <Col>
                            <input type="text" placeholder="ex: eac@hotmail.com" />
                        </Col>
                    </div>
                    <div className="row input-password my-3">                        
                        <Col xs="1">
                            <FiLock color="#76b7eb" size={35} />
                        </Col>
                        <Col>
                            <input type="password" placeholder="Senha" />
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