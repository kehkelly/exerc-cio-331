import React, { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState('Kelly')
  function aumentar() {
  setNome(nome+'y')
}

  return (
    <div>
      <h1>{nome}</h1>
      <button onClick={aumentar}>aumentar</button>
    </div>
  )
}
