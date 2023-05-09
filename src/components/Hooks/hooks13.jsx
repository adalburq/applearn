import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hooks13() { 

    const [data, setData] = useState(null); 
    const [url, setUrl] = useState('http://api.weatherstack.com/current?access_key=8e757b99b9f3aa69a48ad8402e57caac&query="');
    
    /*
    const getData = async () => {
      const response = await axios.get('http://api.weatherstack.com/current?access_key=8e757b99b9f3aa69a48ad8402e57caac&query="Rio de Janeiro"');
      setData(response.data);
    };    
    */

    const fetchData = async (cityName) => {
      const uri = url + cityName;
      console.log("uri:", uri);
      const retorno = await axios.get(uri);
      //setData(retorno.data);
      console.log(retorno.data);
    };
    
    fetchData('New York');

    /*
    useEffect(() => {
      getData();
    }, []);
    */

    return (
        <ul>

      </ul>
    );
}
export default Hooks13;