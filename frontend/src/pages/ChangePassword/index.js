import React, { useState } from 'react';
import { Container } from 'reactstrap';
import './styles.css';
import api from '../../services/api';
import { 
    FiSave
 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ChangePassword(){
    const createMessage = function(id, message){
        if(!document.querySelector('span.action')){
            const aElement = document.querySelector(`#${id}`);
            const spanElement = document.createElement('span');            
            const text = document.createTextNode(message);
            
            spanElement.setAttribute('class', 'action');
            spanElement.style.color = "#76b7eb";
            spanElement.style.fontWeight = "bold";
            spanElement.style.fontSize = "70%";                       
            spanElement.appendChild(text);        
            aElement.appendChild(spanElement);            
        }
    };

    const deleteMessage = function(){
        if(document.querySelector('span.action')){
            document.querySelector('span.action').remove();
        }
    }

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const history = useHistory();

    const currentUrl = function(){
        const url = window.location.href;
  
        const toUrl = url.slice(22);
  
        if(toUrl.match(/user/)) {
          return '/user';
        }
        if(toUrl.match(/company/)) {
          return '/company';
        }      
    }

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
                    <form onSubmit={handleChangePassword}>
                        <div className="input-password">
                            <input 
                                type="password" 
                                placeholder="Senha Atual"
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)} 
                            />
                        </div>
                        <div className="input-password">
                            <input 
                                type="password" 
                                placeholder="Nova Senha"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)} 
                            />
                        </div>
                        <div className="input-password">
                            <input 
                                type="password" 
                                placeholder="Confirmar Nova Senha" 
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)} 
                            />
                        </div>
                    

                        <div className="footer">
                            <button 
                                id="change-password-save"
                                className="button col-3" 
                                type="submit"
                                onMouseOver={() => createMessage('change-password-save', 'Salvar')}
                                onMouseLeave={() => deleteMessage()}                        
                            >
                                <FiSave color="#76b7eb" size={35} />
                            </button>
                        </div>
                    </form>
                </section>
            </Container>
        </Container>
    );
}
