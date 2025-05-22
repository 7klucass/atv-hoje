import {useState} from 'react'

export function App() {
    const [numero, setNumero] = useState(100);
    const[esconder, setMostrarEsconder] = useState(false);

    function handleAumentar() {
      setNumero(numero + 100)
    }

    function handleMostrarEsconder() {
      esconder === true ? setMostrarEsconder(false) : setMostrarEsconder(true);
    }

    return (
      <section className=''>
        <h1>Aumentando 100</h1>
        <p>Número = {numero}</p>
        <button onClick={handleAumentar}>Aumentar</button>

        
        <button onClick={handleMostrarEsconder}>{esconder === true ? 'Esconder' : 'Mostrar'}</button>
        {esconder === true ? <p>Palmeiras maior time</p> : ""}
      </section>
      
     
    )
}