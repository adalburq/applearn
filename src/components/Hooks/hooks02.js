import React, {useState, useEffect} from 'react';
//import Botao from '../Botao';

function Hooks02() {

    const [age, setAge] = useState(19);
    const [nome, setNome] = useState();
    const handleClick = () => setAge(age + 1)

    return(
        <div>
            
            I am {age} Years Old
            <div>
                <button className="botao" onClick={handleClick} >Incrementar </button>
            </div>
        </div>
    );
};

export default Hooks02;