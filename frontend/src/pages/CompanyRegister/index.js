import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { 
    FiArrowLeftCircle, 
    FiArrowRight, 
    FiPlusCircle,
    FiBriefcase, 
    FiLock,
    FiUnlock,
    FiFileText,
    FiAtSign,
    FiPhone,
    FiHome, 
    TiSortNumerically, 
    FaMailBulk, 
    GiFamilyHouse,
    FaCity,
    FaSearchLocation,    
 } from 'react-icons/all';
import './styles.css';
import InputMask from 'react-input-mask';
import api from '../../services/api';

export default function CompanyRegister(){
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        if(confirmPassword === password){
            const data = {
                name,
                cnpj,
                password,
                email,
                phone,
            };

            try{
                const response = await api.post('companyRegister', data);

                alert('Cadastrado!');

                history.push('/companyLogin');
            } catch(err){
                alert('Erro no Cadastro! Tente Novamente!');
            }
        }
    }

    return (
        <Container fluid={true}>
            <header className="row">
                <Col xs="1">
                    <Link to="/userLogin">
                        <FiArrowLeftCircle color="#76b7eb" size={50} />
                    </Link>
                </Col>
                <Col xs="10">
                    <h1>Cadastro</h1>
                    <p>Insira as informações necessárias e desfrute de nossos serviços</p>
                </Col>
            </header>
            <form onSubmit={handleRegister}>
                <Container>
                    <div className="content">                    
                        <Row>
                            <Col xs="12" sm="10" md="6">
                                <label htmlFor="name">
                                    <FiBriefcase color="#76b7eb" size={30}  />
                                </label>
                                <input                             
                                    type="text"
                                    placeholder="Nome da Empresa"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Col>
                            <Col xs="12" sm="10" md="6">
                                <label htmlFor="cnpj">
                                    <FiFileText color="#76b7eb" size={30}  />
                                </label>
                                <InputMask
                                    mask="99. 999. 999/9999-99"
                                    maskChar={null}
                                    type="text"
                                    placeholder="CNPJ"
                                    maxLength="20"
                                    value={cnpj}
                                    onChange={e => setCnpj(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>                    
                            <Col xs="12" sm="10" md="6">
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
                            <Col xs="12" sm="10" md="6">
                                <label htmlFor="password">
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
                            <Col xs="12" sm="10" md="6">
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
                            <Col xs="12" sm="10" md="6">
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

                <Row className="my-5">
                    <Col xs="9" sm="6" md="4" lg="3">
                        <button type="submit" className="button">
                            Cadastrar
                            <FiPlusCircle color="#76b7eb" size={35} />
                        </button>
                    </Col>
                </Row>

                <Row className="my-5">
                    <a href="https://discordapp.com/register">
                        Não tem conta no Discord? Crie uma
                        <FiArrowRight color="#76b7eb" size={35} className="arrow-icon" />
                    </a>
                </Row>
            </form>
        </Container>
    );
}