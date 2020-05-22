import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';
import api from '../../services/api';
import { 
    FiSave
 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import createMessage from '../../utils/createMessage';
import deleteMessage from '../../utils/deleteMessage';
import currentUrl from '../../utils/currentUrl';

export default function ChangePassword(){
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const history = useHistory();

    let id;

    if(currentUrl() === "/user"){
        id = localStorage.getItem('userId');
    }
    if(currentUrl() === "/company"){
        id = localStorage.getItem('companyId');
    }

    async function handleChangePassword(e){
        e.preventDefault();

        if(newPassword === confirmNewPassword){
            const data = {
                currentPassword,
                newPassword,
                id
            };

            try{
                let profile;

                if(currentUrl() === "/user"){
                    profile = 'userProfile';
                }
                if(currentUrl() === "/company"){
                    profile = 'companyProfile';
                }

                const response = await api.put(`${profile}/changePassword`, data);
                
                alert('Changed Password');

                history.push(`/${profile}`);
            } catch(err) {
                alert('Action error');
            }
        }
    }

    return (
        <Container fluid={true}>
            <Navbar />

            <Container>                
                <section className="content">
                    <h2>Editar Senha</h2>
                    <form className="row" onSubmit={handleChangePassword}>
                        <Col 
                            sm="12"
                            md="9"                        
                            className="input-password"
                        >
                            <input 
                                type="password" 
                                placeholder="Senha Atual"
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)} 
                            />
                        </Col>
                        <Col
                            sm="12"
                            md="9"
                            className="input-password"
                        >
                            <input 
                                type="password" 
                                placeholder="Nova Senha"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)} 
                            />
                        </Col>
                        <Col
                            sm="12"
                            md="9"
                            className="input-password"
                        >
                            <input 
                                type="password" 
                                placeholder="Confirmar Nova Senha" 
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)} 
                            />
                        </Col>
                    

                        <div className="footer col-12">
                            <button 
                                id="change-password-save"
                                className="button col-sm-12 col-lg-3" 
                                type="submit"
                                onMouseOver={() => createMessage('change-password-save', 'Salvar')}
                                onMouseLeave={() => deleteMessage()}                        
                            >
                                <FiSave color="#76b7eb" size={40} />
                            </button>
                        </div>
                    </form>
                </section>
            </Container>
        </Container>
    );
}
