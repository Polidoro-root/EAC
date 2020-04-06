import React from 'react';
import { 
    Container,     
 } from 'reactstrap';
import './styles.css';
import HeaderNavbar from '../components/Navbar';
import UserDataSection from '../components/UserDataSection';
import UserContactSection from '../components/UserContactSection';
import UserAddressSection from '../components/UserAddressSection';
import UserProfessionalSection from '../components/UserProfessionalSection';
import UserGraduationSection from '../components/UserGraduationSection';

function UserProfile(){                                
    return (                        
        <Container fluid={true}>            

            <HeaderNavbar />

            <header>                                
                <h1>Perfil</h1>
                <p>
                    Insira seus dados na área de Graduações para destacar-se
                </p>
            </header>

            <UserDataSection />

            <UserContactSection />

            <UserAddressSection />

            <UserProfessionalSection />       

            <UserGraduationSection />     
            
        </Container>
    );
}

export default UserProfile;