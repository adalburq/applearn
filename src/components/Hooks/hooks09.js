// IMPORTAR PACKAGES
import React from 'react';
import QRCode from 'qrcode';

// PROGRAMA
function Hooks09() {

  // VARIÁVEIS GLOBAIS
  const [count, setCount] = React.useState(0);
  const [soma, setSoma] = React.useState(0);
  const [valor1, setValor1] = React.useState("adsffafds");
  const [valor2, setValor2] = React.useState("oiouiu");  

  // FUNÇOES
  function handleCount(delta) {
    setCount(count + delta);
  }

  function calculadora(x, y) {
    let calc = x-y;   // VARIAVEL LOCAL
    console.log(calc)
    return calc;
    //return (
    //    <input type="text" value={calc} /> 
    //)
  }

  function cientifica(x, y) {
    let calc = 1+3;
    console.log(calc)
    return (
        <input type="text" value={calc} /> 
    )
  }

  // MONTAGEM DA PAGINA WEB
  return (
    <div>
      Count: {count}

      <button className="botao" type="button" onClick={() => handleCount(1)}>
        Increase Count
      </button>
      <button className="botao" type="button" onClick={() => handleCount(-1)}>
        Decrease Count
      </button>

      <button className="botao" type="button" 
        onClick={() => {
          //setSoma(calculadora(15, 7.5));
          setSoma(calculadora(valor1, valor2));
          console.log('soma ', soma);
        }}>
         Calcx : {soma}
      </button>                      

      <MyInput x="3" y="4"/>

    </div>
  );
}

function MyInput({ x, y }) {
  let calc = x + y;
  console.log(calc)  
  return (
    <input type="text" value={calc} /> 
  );
}

export default Hooks09;