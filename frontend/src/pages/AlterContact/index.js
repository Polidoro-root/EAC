import React, { useState } from 'react';
import './styles.css';
import { Container } from 'reactstrap';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import { FiSave } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import api from '../../services/api';

function AlterContact(){
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

    const history = useHistory();
    
    const contactId = localStorage.getItem('contactId');
    const sessionEmail = localStorage.getItem('Email');
    const sessionPhone = localStorage.getItem('Phone');

    const [email, setEmail] = useState(sessionEmail);
    const [phone, setPhone] = useState(sessionPhone);

    async function handleAlterContact(e){
        e.preventDefault();

        const data = {            
            email: email,
            phone: phone
        };

        try{
            let profile;
            if(currentUrl() === "/user"){
                profile = 'userProfile';
            }
            if(currentUrl() === "/company"){
                profile = 'companyProfile';
            }

            await api.put(`${profile}/alterContact`, data, {
                headers: { id: contactId }
            });
            

            history.push(`/${profile}`);
        } catch(err) {
            alert('Save Error');
        }
    }

    return (
        <Container fluid={true}>
            <Navbar />

            <Container>                
                <section className="content">
                    <h2>Editar Contato</h2>
                    <form onSubmit={handleAlterContact}>
                        <div className="input-contact">
                            <input 
                                type="text" 
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="input-contact">
                            <InputMask 
                                mask="(99) 99999-9999"
                                maskChar={false}
                                type="text" 
                                placeholder="Telefone" 
                                max="15"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} 
                            />
                        </div>

                        <div className="footer">
                            <button 
                                id="add-contact-save"
                                className="button col-3" 
                                type="submit"
                                onMouseOver={() => createMessage('add-contact-save', 'Salvar')}
                                onMouseLeave={() => deleteMessage()}
                            >
                                <FiSave color="#76b7eb" size={30} />
                            </button>
                        </div>
                    </form>
                </section>
            </Container>

        </Container>
    );
}

export default AlterContact;