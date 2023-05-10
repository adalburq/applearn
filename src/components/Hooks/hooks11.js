import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hooks11() {

    const [repositorio, setRepositorio] = useState([]);
    //const [gitrepo, setGitrepo] = useState(['feedwidget']);

    useEffect(() => {
        async function carregaRepositorios() {
            const resposta = await axios('https://api.github.com/users/julio-cesar96/repos');
            //const repositorios = await resposta.json();
            //return repositorios;
            setRepositorio(resposta.data);            
        }
        carregaRepositorios();
    }, []);

    return (
        <ul>
        {repositorio.map( repository => (
          <li key={repository.id}>
            {repository.name}
          </li>
        ))}
      </ul>
    );
}
export default Hooks11;