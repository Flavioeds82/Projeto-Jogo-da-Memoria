import { GridItemType } from '../../Types/GridItemType';
import './styles.css';
import back from '../../assets/back.png'
import { items } from '../../Data/Items';

type Props = {
  
   item: GridItemType,
   onClick: ()=> void
}

export function GridItem({item, onClick}:Props){
   return(
      <div onClick={onClick} id='container-items'>
         {(item.fixed || item.shown) && item.item !== null &&
            <img src={items[item.item].icon} alt="" id='items1'/>
         }
         {(item.fixed === false && item.shown === false) && 
            <img src={back} alt="" id='items2'/>
         }
      </div>
   )
}
