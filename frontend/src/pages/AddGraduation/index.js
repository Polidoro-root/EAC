import React, { useState } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import { FiSave } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function AddGraduation(){
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

    const [graduationLevel, setGraduationLevel] = useState('');
    const [course, setCourse] = useState('');

    const history = useHistory();    

    async function handleRegister(e){
        e.preventDefault();

        const userId = localStorage.getItem('userId');

        const data = {            
            graduationLevel: graduationLevel,
            course: course            
        };

        try{
            await api.post('userProfile/addGraduation', data, {
                headers: {
                    userId: userId
                }
            });

            alert('Cadastrado!');

            history.push('/userProfile');
        } catch(err){
            alert('Erro no Cadastro! Tente Novamente!');
        }
    }

    return (
        <Container fluid={true}>
            <Navbar />
            
            <Container>
                <section className="content">
                    <h2>Adicionar Graduação</h2>
                    <form onSubmit={handleRegister}>
                        <Row>
                            <Col className="input-graduation">
                                <input
                                    type="text" 
                                    placeholder="Nível de Graduação"
                                    value={graduationLevel}
                                    onChange={e => setGraduationLevel(e.target.value)}
                                />                                    
                            </Col>
                            <Col className="input-graduation">
                                <input 
                                    type="text" 
                                    placeholder="Curso"
                                    value={course}
                                    onChange={e => setCourse(e.target.value)}
                                />
                            </Col>
                        </Row>                        
                                        
                        <div className="footer">
                            <button 
                                id="add-graduation-save"
                                className="button col-3"                                 
                                type="submit"
                                onMouseOver={() => createMessage('add-graduation-save', 'Salvar')}
                                onMouseLeave={() => deleteMessage()}
                            >
                                <FiSave color="#76b7eb" size={30} />
                            </button>
                        </div >
                    </form>
                </section>
            </Container>
        </Container>
    );
}

export default AddGraduation;