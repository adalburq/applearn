import React, { useState, useEffect } from 'react';

// useState() cria uma variável que controlará o estado do componente

// O useEffect é um Hook que serve para lidar com os efeitos. 
// Podemos usá-los como os lifeCycles componentDidMount, componentDidUpdate e componentWillUnmount

// O useEffect() recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar. 
// Então é um ótimo lugar para fazer requisições.

// Dessa maneira como escrevemos, a função passada ao useEffect() será executada sempre que o componente for atualizado.

function Hooks10(){ 

    const produtos = [
        'Nuttela',
        'Mariola',
        'Rapadura',
    ];
    
	const [nome, setNome] = useState('Quebra-Queixo');
    const [produto, setProduto] = useState('');

	useEffect(() => {
		const prod = produtos.concat(produto);
        console.log('nome', nome);
        console.log('prod', prod);
        console.log('produtos', produtos);
	})

    return (
        <div>
            <p>{nome}</p>
            <button className="botao" onClick={() => setProduto('Chocolate')} >CLICK</button>
        </div>
    )
}

export default Hooks10;