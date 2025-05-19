import { useState } from "react";

export function App() {
  const [numero, setNumero] = useState(100);
  const [mostrarTexto, setMostrarTexto] = useState(false);

  function handleAumentar() {
    setNumero(numero + 100);
  }

  function alternarTexto() {
    setMostrarTexto(!mostrarTexto);
  }

  return (
    <section>
      <h1>Número: {numero}</h1>

      <div>
        <button onClick={handleAumentar}>Aumentar</button>
      </div>

      <button onClick={alternarTexto}>
        {mostrarTexto ? "Esconder" : "Mostrar"}
      </button>

      {mostrarTexto && (
        <p>Palmeiras maior do mundo</p>
      )}
    </section>
  );
}
