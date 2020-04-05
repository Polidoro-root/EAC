import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUser, FiLock, FiCalendar } from 'react-icons/fi';
import { GiMale, GiFemale } from 'react-icons/gi';
import './styles.css';

export default function UserForm(){    
    const [selectValue, setSelectValue] = useState('M');    

    function sexIcon(value){
        if(value === "M"){
            return <GiMale color="#76b7eb" size={30}  />;
        }
        else if(value === "F"){
            return <GiFemale color="#76b7eb" size={30}  />;
        }
    }

    return (
        <Container>
            <div className="content">
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="name">
                            <FiUser color="#76b7eb" size={30}  />
                        </label>
                        <input                             
                            type="text"
                            placeholder="Nome do Usuário"                            
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="password">
                            <FiLock color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="password"
                            placeholder="Senha"
                        />
                    </Col>
                </Row>                             
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6">                    
                        <label htmlFor="birthDate">
                            <FiCalendar color="#76b7eb" size={30}  />
                        </label>
                        <input 
                            type="date"                                                        
                        />
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6">
                        <label htmlFor="sex">
                            {sexIcon(selectValue)}
                        </label>
                        <select 
                            value={selectValue}
                            onChange={e => {
                                setSelectValue(e.target.value);
                                sexIcon(e.target.value);
                            }}
                        >                            
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}