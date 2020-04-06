import React from 'react';
import InputMask from 'react-input-mask';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    FiHome, 
    TiSortNumerically, 
    FaMailBulk, 
    GiFamilyHouse,
    FaCity,
    FaSearchLocation,    
    } from 'react-icons/all';
import './styles.css';

export default function AddressForm(){        
    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="zipCode">
                            <FaMailBulk color="#76b7eb" size={30}/>
                        </label>
                        <InputMask
                            mask="99999-999"
                            maskChar={null}                                         
                            type="text"
                            placeholder="CEP"                            
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="publicPlace">
                            <FiHome color="#76b7eb" size={30}/>
                        </label>
                        <input 
                            type="text"
                            placeholder="Logradouro"
                        />
                    </Col>
                </Row>                             
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">                    
                        <label htmlFor="number">
                            <TiSortNumerically color="#76b7eb" size={30}/>
                        </label>
                        <input 
                            type="number"
                            placeholder="Número"
                            min="0"
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="neighborhood">
                            <GiFamilyHouse color="#76b7eb" size={30}/>
                        </label>
                        <input 
                            type="text"
                            placeholder="Bairro"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">                    
                        <label htmlFor="city">
                            <FaCity color="#76b7eb" size={30}/>
                        </label>
                        <input 
                            type="text"
                            placeholder="Cidade"
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="uf">
                            <FaSearchLocation color="#76b7eb" size={30} />
                        </label>
                        <select name="uf" id="uf">
                            <option value="" disabled selected hidden>Estado...</option>
                            <option value="ac">Acre</option>
                            <option value="al">Alagoas</option>
                            <option value="ap">Amapá</option>
                            <option value="am">Amazonas</option>
                            <option value="ba">Bahia</option>
                            <option value="ce">Ceará</option>
                            <option value="df">Distrito Federal</option>
                            <option value="es">Espírito Santo</option>
                            <option value="go">Goiás</option>
                            <option value="ma">Maranhão</option>
                            <option value="ms">Mato Grosso do Sul</option>
                            <option value="mt">Mato Grosso</option>
                            <option value="mg">Minas Gerais</option>
                            <option value="pa">Pará</option>
                            <option value="pb">Paraíba</option>
                            <option value="pr">Paraná</option>
                            <option value="pe">Pernambuco</option>
                            <option value="pi">Piauí</option>
                            <option value="rj">Rio de Janeiro</option>
                            <option value="rn">Rio Grande do Norte</option>
                            <option value="rs">Rio Grande do Sul</option>
                            <option value="ro">Rondônia</option>
                            <option value="rr">Roraima</option>                            
                            <option value="sc">Santa Catarina</option>
                            <option value="sp">São Paulo</option>                            
                            <option value="se">Sergipe</option>
                            <option value="to">Tocantins</option>
                        </select>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}