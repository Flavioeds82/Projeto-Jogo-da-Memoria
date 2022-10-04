import { useEffect, useState } from 'react'
import './App.css';
import { GridItem } from './components/GridItem';
import { GridItemType } from './Types/GridItemType';
import {items} from './Data/Items';
import { clockFormatting } from './helpers/clockFormatting';

function App() {
  
  //-----------------------------------------//

    const [playing, setPlaying] = useState<boolean>(false);
    const [clock, setClock] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [turns, setTurns] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);
    const listSize = (items.length);
    const [final, setFinal] = useState<boolean>(false);

  // //-----------------------------------------//

    useEffect(() => begin(), []);

    useEffect(() => {
      const timer = setInterval(()=>{
        if(playing){
          setClock(clock + 1);
        }       
      }, 1000);
      return ()=> clearInterval(timer);
    }, [playing, clock]);

    useEffect(()=>{
      if(turns === 2){
        let opened = gridItems.filter(item => item.shown === true);
        if(opened.length === 2){
          if(opened[0].item === opened[1].item){
            let temp = [...gridItems];
            for(let i in temp){
              if(temp[i].shown === true){
                temp[i].fixed = true;
                temp[i].shown = false;
                

              }
            }
            setGridItems(temp)
            setTurns(0);


          }else{
            setTimeout(()=>{
              let temp = [...gridItems];
              for(let ind in temp){
                temp[ind].shown = false;
  
              }
              setGridItems(temp);
              setTurns(0);
            }, 2000)
          }
          setCount(count + 1)
        }
  
      }
    },[turns, gridItems])

    useEffect(()=>{
      if(turns > 0  && gridItems.every(item => item.fixed === true)){
          
          setPlaying(false);
          setFinal(true)
      }
    },[turns, gridItems]);

  // //-----------------------------------------/

    function clicked(index:number){
      if(playing && index !== null && turns < 2){
        let tempList = [...gridItems]
        if(tempList[index].shown === false && tempList[index].fixed === false){
          tempList[index].shown = true;
          setTurns(turns + 1);
        }
        setGridItems(tempList);
      }
    }
    
    // Função para randomizar array
    function shuffleArray(arr:number[]) {
        // Loop em todos os elementos
      for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      // Retornando array com aleatoriedade
      return arr;
    }



    function begin(){

  // //---------------- Limpar dados ---------------------//
    
      setClock(0);
      setCount(0);
      setTurns(0);
      setFinal(false);
      
      let listNumber = []
      for(let i=0; i< listSize; i++){
        listNumber.push(i);
      }
      for(let i=0; i< listSize; i++){
        listNumber.push(i);
      }
      listNumber = shuffleArray(listNumber)
      

  // //----------------- criar grid -------------------//
      let tempGrid:GridItemType[] = [];
      for(let i=0; i < listSize * 2; i++){
        tempGrid.push({item: listNumber[i], shown: false, fixed: false});
      }
      setGridItems(tempGrid);
      setPlaying(true);

      
  }

  



    
    return (
      <div className="App">
        <div className="container">
          <div className="info">
              <h1> Jogo da Memória </h1>
              <p> Tempo </p>
              <div className="relogio"> {clockFormatting(clock)}</div>
              <p> Movimentos </p>
              <div className='contador'>{count}</div>
              <button className='button' onClick={()=> begin()}> Reiniciar</button>
              {final === true  && 
                <div className="modal">
                <h2>Parabéns jogo completo!!!</h2>
                </div>
              }
          </div>
          <div className="grid-container">
              <div className="grid">
                  {gridItems.map((item, index)=>(

                      <GridItem 
                        key={index} 
                        item={item} 
                        onClick={()=> clicked(index)}
                      />
                      
                  ))}
              </div>
          </div>
          
          
        </div>
        <div className="footer"> Created by Flávio Eduardo</div>
      </div>
    )
}

export default App;
