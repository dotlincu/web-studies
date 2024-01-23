import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sistema de Doação de Sangue</h1>

      <h2>Elementos: {count} </h2>

      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={() => setCount(count - 1)}>Remover</button>
      <button onClick={() => setCount(count * 2)}>Dobrar</button>

      <Menu />
    </>
  )
}

export default App
