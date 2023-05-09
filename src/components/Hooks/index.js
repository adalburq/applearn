import React, {useState, useEffect} from 'react';

function Hooks01() {
 
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    //Call the use effect hook
    useEffect(() => {
      console.log("name before", name);
      setName({firstName: 'Alisson', surname: 'Suassuna'})
      console.log("name after", name);
    }, [])
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
            <div></div>
        </div>
    );
};

export default Hooks01;