import React, { useState, useEffect } from 'react';

function Hooks11() {

    const [repositorio, setRepositorio] = useState([]);
    const [gitrepo, setGitrepo] = useState(['feedwidget']);

    useEffect(() => {
        async function carregaRepositorios() {
            const resposta = await fetch('https://api.github.com/users/julio-cesar96/repos');
            const repositorios = await resposta.json();
            //return repositorios;
            setRepositorio(repositorios);            
        }
        carregaRepositorios();
    }, []);

    return (
        <ul>
        {repositorio.map(gitrepository => (
          <li key={gitrepository.id}>
            {gitrepository.name}
          </li>
        ))}
      </ul>
    );
}
export default Hooks11;