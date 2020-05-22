import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FiBriefcase, FiLogIn, FiUser } from 'react-icons/fi';
import './styles.css';

export default function Home(){
    const [icon, setIcon] = useState(<FiBriefcase color="#76b7eb" size={250} />);
    
    return (
        <Container className="container">
            
            <h1 className="mt-5">EAC</h1>
            <div className="logo">
                {icon}
            </div>

            <Row >
                <Col className="my-3" xs="12" sm="12" md="6">            
                    <Link
                        to="/userLogin"
                        className="py-2 button"
                        onMouseOver={() => 
                            setIcon(<FiUser color="#76b7eb" size={250} />)
                        }
                    >
                        <span>Login: Usuário</span>
                        <FiLogIn className="login-icon" size={50} color="#76b7eb" />                        
                    </Link>                    
                </Col>                                
                <Col className="my-3" xs="12" sm="12" md="6">                    
                    <Link
                        to="/companyLogin"
                        className="py-2 button"
                        onMouseOver={() => 
                            setIcon(<FiBriefcase color="#76b7eb" size={250} />)
                        }
                    >
                        <span>Login: Empresa</span>
                        <FiLogIn className="login-icon" size={50} color="#76b7eb" />                        
                    </Link>                     
                </Col>               
            </Row>
        </Container>
    );
}