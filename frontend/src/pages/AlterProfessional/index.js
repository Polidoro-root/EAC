import React, { useState } from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import { FiSave } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function AlterProfessional(){
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

    const sessionId = localStorage.getItem('userId');
    const sessionInterestArea = localStorage.getItem('InterestArea');
    const sessionExperienceArea = localStorage.getItem('ExperienceArea');
    const sessionLastJob = localStorage.getItem('LastJob');
    const sessionAboutYourself = localStorage.getItem('AboutYourself');

    const [interestArea, setInterestArea] = useState(sessionInterestArea);
    const [experienceArea, setExperienceArea] = useState(sessionExperienceArea);
    const [lastJob, setLastJob] = useState(sessionLastJob);
    const [aboutYourself, setAboutYourself] = useState(sessionAboutYourself);

    const history = useHistory();

    async function handleAlterProfessional(e){
        e.preventDefault();

        const data = {
            interestArea,
            experienceArea,
            lastJob,
            aboutYourself
        };

        try{
            await api.put('userProfile/alterProfessional', data, {
                headers: { id: sessionId }
            });

            history.push('/userProfile');
        } catch(err) {
            alert('Save Error');
        }
    }

    return (
        <Container fluid={true}>
            <Navbar />

            <Container>
                <section className="content">
                    <h2>Editar Área Profissional</h2>
                    <form onSubmit={handleAlterProfessional}>
                        <Row>
                            <Col className="input-professional">
                                <input
                                    type="text"
                                    placeholder="Área de Interesse"
                                    value={interestArea}
                                    onChange={e => setInterestArea(e.target.value)}
                                />                                    
                            </Col>
                            <Col className="input-professional">
                                <input 
                                    type="text"
                                    placeholder="Experiência na Área"
                                    value={experienceArea}
                                    onChange={e => setExperienceArea(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="input-professional">
                                <input 
                                    type="text" 
                                    placeholder="Último Emprego"
                                    value={lastJob}
                                    onChange={e => setLastJob(e.target.value)}
                                />
                            </Col>
                            <Col className="input-professional">
                                <textarea 
                                    type="text" 
                                    placeholder="Sobre si mesmo"
                                    value={aboutYourself}
                                    onChange={e => setAboutYourself(e.target.value)}
                                >
                                </textarea>
                            </Col>
                        </Row>                        
                                        
                        <div className="footer">
                            <button 
                                id="alter-professional-save"
                                className="button col-3"
                                type="submit"
                                onMouseOver={() => createMessage('alter-professional-save', 'Salvar')}
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

export default AlterProfessional;