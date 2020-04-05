import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderNavbar from '../components/Navbar';

function CompanyIndex(){
    return (
        <Container fluid={true}>
            <HeaderNavbar />
        </Container>
    );
}

export default CompanyIndex;