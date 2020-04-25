import React, { useState } from 'react';
import './styles.css';
import { Container, Row, Col, Input } from 'reactstrap';
import Navbar from '../components/Navbar';
import { FiSave } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import api from '../../services/api';

function AddVacancy(){
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

    const [vacancy, setVacancy] = useState('');
    const [salary, setSalary] = useState('');
    const [requirements, setRequirements] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();    

    async function handleRegister(e){
        e.preventDefault();

        const companyId = localStorage.getItem('companyId');

        const data = {            
            vacancy: vacancy,
            salary: salary,
            requirements: requirements,
            city: city,
            uf: uf,
        };

        try{
            await api.post('companyProfile/addVacancy', data, {
                headers: {
                    companyId: companyId
                }
            });

            alert('Cadastrado!');

            history.push('/companyProfile');
        } catch(err){
            alert('Erro no Cadastro! Tente Novamente!');
        }
    }

    return (
        <Container fluid={true}>
            <Navbar />
            
            <Container>
                <section className="content">
                    <h2>Adicionar Vaga</h2>
                    <form onSubmit={handleRegister}>
                        <Row>
                            <Col className="input-vacancy">
                                <input
                                    type="text" 
                                    placeholder="Vaga Disponível"
                                    value={vacancy}
                                    onChange={e => setVacancy(e.target.value)}
                                />                                    
                            </Col>
                            <Col className="input-vacancy">
                                <InputMask
                                    mask="R$ 9999,99"
                                    maskChar={null}
                                    type="text"                                    
                                    placeholder="Salário"
                                    value={salary}
                                    onChange={e => setSalary(e.target.value)}
                                />
                            </Col>
                        </Row>                        

                        <Row>
                            <Col className="input-vacancy">
                                <input
                                    type="text" 
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />                                    
                            </Col>
                            <Col className="input-vacancy">
                                <select                                    
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                >
                                    <option value selected hidden>Estado...</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="RS">RS</option>
                                    <option value="SC">SC</option>
                                    <option value="SE">SE</option>
                                    <option value="SP">SP</option>
                                    <option value="TO">TO</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="input-vacancy">
                                <textarea
                                    type="text" 
                                    placeholder="Requisitos"
                                    value={requirements}
                                    onChange={e => setRequirements(e.target.value)}
                                >
                                </textarea>
                            </Col>
                        </Row>
                                        
                        <div className="footer">
                            <button 
                                id="add-vacancy-save"
                                className="button col-3"                                 
                                type="submit"
                                onMouseOver={() => createMessage('add-vacancy-save', 'Salvar')}
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

export default AddVacancy;