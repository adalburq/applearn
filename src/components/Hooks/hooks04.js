import React, {useState, useEffect} from 'react';

function Hooks04() {
  const [nome, setNome] = useState(""); 

  const display = (
    console.log('nome ', nome)
  )
  
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
    </form>
  )
};

export default Hooks04; 