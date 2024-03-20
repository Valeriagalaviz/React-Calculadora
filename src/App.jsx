import { useState } from "react"
import './App.css'

function App() {
  // Nos ayuda a crear variables dinámicas
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }
  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  }
  const handleSumar = (event) => {
    setResultado (parseFloat(numeroUno) + parseFloat(numeroDos));
  }
  const handleRestar = (event) => {
    setResultado (parseFloat(numeroUno) - parseFloat(numeroDos));
  }
  const handleMultiplicar= (event) => {
    setResultado (parseFloat(numeroUno) * parseFloat(numeroDos));
  }
  const handleDividir = (event) => {
    setResultado (parseFloat(numeroUno) / parseFloat(numeroDos));
  };
  console.log(numeroUno,numeroDos);
  return(
    <>
    <div class="container">
    <h1>Calculadora</h1>
    <p id="nombre">by Valeria Galaviz</p>
    <input type="number" placeholder="Numero 1" value={numeroUno} onChange={handleChangeUno}/>
    <input type="number" placeholder="Numero 2" value={numeroDos} onChange={handleChangeDos}/>
    <hr /> 
    <button onClick={handleSumar}>Sumar</button>
    <button onClick={handleRestar}>Restar</button>
    <button onClick={handleMultiplicar}>Multiplicar</button>
    <button onClick={handleDividir}>Dividir</button>
    <hr/>
    <p id="resultado">Resultado:</p>
    <p id="resultado-num">{resultado}</p>
    </div>
    </>
    
  )
}

export default App
