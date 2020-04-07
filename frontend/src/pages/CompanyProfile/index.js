import React from 'react';
import { 
    Container    
 } from 'reactstrap';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import CompanyDataSection from '../components/CompanyDataSection';
import CompanyContactSection from '../components/CompanyContactSection';
import CompanyAddressSection from '../components/CompanyAddressSection';
import CompanyVacancySection from '../components/CompanyVacancySection';
import CompanyConversationsSection from '../components/CompanyConversationsSection';

function CompanyProfile(){
    return (
        <Container fluid={true}>

            <HeaderNavbar />

            <header>
                <h1>Perfil</h1>
                <p>
                    Insira as Vagas disponíveis para encontrar profissionais.
                </p>
            </header>

            <CompanyDataSection />

            <CompanyContactSection />

            <CompanyAddressSection />

            <CompanyVacancySection />

            <CompanyConversationsSection />
            
        </Container>
    );
}

export default CompanyProfile;