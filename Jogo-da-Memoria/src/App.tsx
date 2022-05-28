import { useEffect, useState } from 'react'
import './App.css'
import { GridItemType } from './Data/GridItemType';
import {items} from './Data/Items';

function App() {
  
//-----------------------------------------//

  const [playing, setPlaying] = useState<boolean>(false);
  const [clock, setClock] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [shown, setShown] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

//-----------------------------------------//

  useEffect(begin,[]);


//-----------------------------------------//

  function begin(){

//---------------- Limpar dados ---------------------//
  
    setClock(0);
    setCount(0);
    setShown(0);
    
  }

//----------------- criar grid -------------------//
  let tempGrid:GridItemType[] = [];
  for(let i=0; i < (items.length *2); i++){
    tempGrid.push({
      item: null,
      shown: false,
      fixed: false
    });
  }



  setGridItems(tempGrid);
//----------------- começar o jogo -------------------//

    setPlaying(true);




  return (
    <div className="App">
      <div className="container">
        <div className="info">
            <h1> Jogo da Memória </h1>
            <p> Tempo </p>
            <div className="relogio"> 00:00 </div>
            <p> Movimentos </p>
            <div className='contador'>{count}</div>
            <button className='button' onClick={begin}> Reiniciar</button>
        </div>
        <div className="grid-container">
            <div className="grid">

            </div>
        </div>
      </div>
      <div className="footer"> Created by Flávio Eduardo</div>
    </div>
  )
}

export default App
