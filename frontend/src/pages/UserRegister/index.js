import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Container, Col, Row } from 'reactstrap';
import { 
    FiArrowLeftCircle,     
    FiUserPlus,
    FiUnlock,
    FiLock,
    FiAtSign,
    FiPhone,    
    FiBookOpen, 
    FiChevronsLeft,
    FiBriefcase,
    FiCrosshair, 
    FiFileText,
 } from 'react-icons/all';
import './styles.css';
import api from '../../services/api';

export default function UserRegister(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');    
    const [interestArea, setInterestArea] = useState('');
    const [experienceArea, setExperienceArea] = useState('');
    const [lastJob, setLastJob] = useState('');
    const [aboutYourself, setAboutYourself] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        if(confirmPassword === password){
            const data = {
                password,
                email,
                phone,                
                interestArea,
                experienceArea,
                lastJob,
                aboutYourself
            };

            try{
                const response = await api.post('userRegister', data);

                alert('Cadastrado!');

                history.push('/userLogin');
            } catch(err){
                alert('Erro no Cadastro! Tente Novamente!');
            }
        }
    }

    return (
        <Container fluid={true}>
            <header className="row">                
                <Col>
                    <h1>Cadastro</h1>
                    <p>Insira as informações necessárias e desfrute de nossos serviços</p>
                </Col>
            </header>
            <form onSubmit={handleRegister}>
                <Container>
                    <div className="content">
                        <Row>                    
                            <Col xs="12" md="6" lg="6">
                                <label htmlFor="password">
                                    <FiLock color="#76b7eb" size={30}  />
                                </label>
                                <input 
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Col>
                            <Col xs="12" md="6" lg="6">
                                <label htmlFor="confirm-password">
                                    <FiUnlock color="#76b7eb" size={30}  />
                                </label>
                                <input 
                                    type="password"
                                    placeholder="Confirmar Senha"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </Col>
                        </Row>                                             
                    </div>
                </Container>
                <Container>
                    <div className="content">
                        <Row>
                            <Col xs="12" md="6">
                                <label htmlFor="email">
                                    <FiAtSign color="#76b7eb" size={30}  />
                                </label>
                                <input                             
                                    type="email"
                                    placeholder="E-mail de contato"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Col>
                            <Col xs="12" md="6">
                                <label htmlFor="phone">
                                    <FiPhone color="#76b7eb" size={30}  />
                                </label>
                                <InputMask 
                                    mask="(99) 99999-9999"
                                    maskChar={null}
                                    id="phone"
                                    type="text"
                                    placeholder="Número de telefone"
                                    maxLength="15"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </Col>                    
                        </Row>                                             
                    </div>
                </Container>                
                <Container>
                    <div className="content">
                        <Row>
                            <Col xs="12" md="6" lg="6">
                                <label htmlFor="interestArea">
                                    <FiCrosshair color="#76b7eb" size={30}  />
                                </label>
                                <input                             
                                    type="text"
                                    placeholder="Área de Interesse"
                                    value={interestArea}
                                    onChange={e => setInterestArea(e.target.value)}
                                />
                            </Col>
                            <Col xs="12" md="6" lg="6">
                                <label htmlFor="experienceArea">
                                    <FiBookOpen color="#76b7eb" size={30}  />
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Experiência na Área"
                                    value={experienceArea}
                                    onChange={e => setExperienceArea(e.target.value)}
                                />
                            </Col>                        
                            <Col xs="12" md="6" lg="6">                    
                                <label htmlFor="lastJob">
                                    <FiChevronsLeft color="#76b7eb" size={30}  />
                                    <FiBriefcase color="#76b7eb" size={30}  />
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Último Emprego"
                                    value={lastJob}
                                    onChange={e => setLastJob(e.target.value)}
                                />
                            </Col>
                            <Col xs="12" md="6" lg="6">
                                <label htmlFor="aboutYourself">
                                    <FiFileText color="#76b7eb" size={30}  />
                                </label>
                                <textarea
                                    placeholder="Fale sobre si"
                                    value={aboutYourself}
                                    onChange={e => setAboutYourself(e.target.value)}
                                >

                                </textarea>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <Row className="mb-5">
                    <Col xs="9" sm="6" md="4" lg="3">
                        <button type="submit" className="button">
                            Cadastrar
                            <FiUserPlus color="#76b7eb" size={35} />
                        </button>
                    </Col>
                </Row>                
            </form>
        </Container>
    );
}