import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { FiArrowLeftCircle, FiArrowRight, FiUserPlus } from 'react-icons/fi';
import './styles.css';
import UserForm from '../components/UserForm';
import ContactForm from '../components/ContactForm';
import AddressForm from '../components/AddressForm';
import ProfessionalForm from '../components/ProfessionalForm';

export default function UserRegister(){
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
            <form>
                <UserForm  />
                <ContactForm  />
                <AddressForm />
                <ProfessionalForm />

                <Row>
                    <Col xs="9" sm="6" md="4" lg="3">
                        <button type="submit" className="button">
                            Cadastrar
                            <FiUserPlus color="#76b7eb" size={35} />
                        </button>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <a href="https://discordapp.com/register">
                        Não tem conta no Discord? Crie uma
                        <FiArrowRight color="#76b7eb" size={35} className="arrow-icon" />
                    </a>
                </Row>
            </form>
        </Container>
    );
}