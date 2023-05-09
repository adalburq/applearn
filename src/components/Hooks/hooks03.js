import React, {useState, useEffect} from 'react';
import Botao from '../Botao';

function Hooks03() {

    const [ fullName, setFullName ] = useState({
        name: 'Matheus',
        lastName: null
    })

    const { name, lastName } = fullName

    const display = (
        console.log('fullNameX ', fullName)
    )

    //const updateLastName = () => setFullName({ lastName: 'Castiglioni' })
    const updateLastName = () => setFullName(fullName => ({
        ...fullName,
        lastName: 'Castiglioni'
    }))    

    return (
        <div>
            <h1>My name is: { `${name} ${lastName}` }</h1>
            <button className="botao" onClick={ updateLastName } type="button">Update lastName</button>
        </div>
    )
};

export default Hooks03;