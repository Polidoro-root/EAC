import React, { useState } from 'react';
import './styles.css';
import {
    Container,       
    InputGroup,
    InputGroupAddon,    
    Input,    
    } from 'reactstrap';
import { 
    FiChevronsDown,
    FiChevronsUp,
    FiSearch,
    FiSend
    } from 'react-icons/fi';    
import HeaderNavbar from '../components/Navbar';
import api from '../../services/api';


export default function UserIndex(){
    const [chevrons, setChevrons] = useState('Down');    

    function accordionIcon(){
        let icon;

        if(chevrons === "Down"){
            icon = <FiChevronsDown className="accordion-icon" color="#76b7eb" size={30} />;            
        }
        else if(chevrons === "Up"){
            icon = <FiChevronsUp className="accordion-icon" color="#76b7eb" size={30} />
        }

        return icon;
    }

    function toggleAccordionIcon(){
        if(chevrons === "Down"){
            setChevrons('Up');
        }
        else if(chevrons === "Up"){
            setChevrons('Down');
        }
    }

    const [search, setSearch] = useState('');
    const [vacancies, setVacancies] = useState([]);

    async function handleSearchVacancies(e){
        e.preventDefault();        
        
        try{
            api.get('userIndex', {
                headers: {
                    search: search
                }
            })
            .then(response => {
                setVacancies(response.data);
            })
            
        } catch(err){
            alert('Operation not Found');
        }
    }
    
    return (            
        <Container fluid={true}>
            <HeaderNavbar />

            <h1 className="search-title">Pesquise por Vaga:</h1>
            <form onSubmit={handleSearchVacancies}>
                <InputGroup className="">                
                    <Input 
                        className="search-input"
                        placeholder="Ex: Eletricista"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <button
                            className="button search-button"
                            type="submit"
                        >
                            <FiSearch color="#76b7eb" size={30}/>
                        </button>
                    </InputGroupAddon>
                </InputGroup>
            </form>

            <ul className="list-vacancies">
                {vacancies.map(vacancy => (
                    <li key={vacancy.id}>                        
                        <strong>VAGA:</strong>
                        <p>{vacancy.vacancy}</p>

                        <strong>SALÁRIO:</strong>
                        <p>{vacancy.salary}</p>

                        <strong>REQUISITOS:</strong>
                        <p>{vacancy.requirements}</p>
                        
                        <strong>EMPRESA:</strong>
                        <p>{vacancy.name}</p>

                        <strong>CNPJ:</strong>
                        <p>{vacancy.cnpj}</p>

                        <strong>CIDADE:</strong>
                        <p>{vacancy.city}</p>

                        <strong>ESTADO:</strong>
                        <p>{vacancy.uf}</p>

                        <button
                            className="collapse-button"
                            type="button"                            
                        >
                            <FiSend color="#76b7eb" size={30} />
                        </button>
                    </li>
                ))}
            </ul>
        </Container>        
    );
}