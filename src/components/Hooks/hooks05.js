import React, {useState, useEffect} from 'react';

function Hooks05() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name);
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
};
  
export default Hooks05;