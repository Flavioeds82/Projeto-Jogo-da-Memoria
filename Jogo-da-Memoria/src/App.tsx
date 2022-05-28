import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function reset(){
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="info">
            <h1> Jogo da Memória </h1>
            <p> Tempo </p>
            <div className="relogio"> 00:00 </div>
            <p> Movimentos </p>
            <div className='contador'>{count}</div>
            <button className='button' onClick={reset}> Reiniciar</button>
        </div>
        <div className="grid">
            ***** rrrrr *****
        </div>
      </div>
      <div className="footer"> Created by Flávio Eduardo</div>
    </div>
  )
}

export default App
