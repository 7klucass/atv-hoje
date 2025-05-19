import {useState} from "react"

export function App(){
  const [numero, setNumero] = useState(100)

  function handleAumentar(){
    setNumero(numero + 100)
  }

    return(

      <section>
            <h1> Número: {numero}</h1>
       <div>
        <button onClick={handleAumentar}>Aumentar</button>
      </div>
      </section>

    )
}

