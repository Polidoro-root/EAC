import React, { useState } from 'react';
import './styles.css';
import {
    Container,
    Row, 
    Col, 
    Button, 
    InputGroup,
    InputGroupAddon,    
    Input,
    Pagination, 
    PaginationItem, 
    PaginationLink    
    } from 'reactstrap';
import { 
    FiChevronsDown,
    FiChevronsUp,
    FiSearch
    } from 'react-icons/fi';    
import { Accordion, Card } from 'react-bootstrap';
import Favorites from '../components/Favorites';
import HeaderNavbar from '../components/Navbar';
import DisponibleVacancies from '../components/DisponibleVacancies';


export default function UserIndex(){
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
    
    return (            
        <Container fluid={true}>
            <HeaderNavbar />

            <h1 className="search-title">Pesquise por Vaga:</h1>
            <InputGroup className="">                
                <Input 
                    className="search-input"                     
                />
                <InputGroupAddon addonType="prepend">
                    <button className="button search-button">
                        <FiSearch color="#76b7eb" size={30}/>
                    </button>
                </InputGroupAddon>
            </InputGroup>

            <DisponibleVacancies />

            <Row>
                <Col>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>
                </Col>
            </Row>

            <Accordion>
                <Card className="accordion">
                    <Card.Header className="accordion-header">
                        <Accordion.Toggle                             
                            className="accordion-button" 
                            variant="link" 
                            eventKey="0"
                            onClick={() => toggleAccordionIcon()}
                        >
                            <h2>Favoritos</h2>
                            {accordionIcon('Down')}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordion-body">
                                <Favorites />
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </Container>        
    );
}