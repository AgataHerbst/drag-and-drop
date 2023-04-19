import {useState} from 'react';
import s from './DragCard.module.css';

export default function DragCard(){
 const [currentCard, setCurrentCard] = useState(null);   
const [cardList, setCardList] = useState([
    {id:1, order: 3, text: 'card 1'},
    {id:2, order: 3, text: 'card 2'},
    {id:3, order: 3, text: 'card 3'},
    {id:4, order: 3, text: 'card 4'},

]);

function dragStartHandler(e,card){
//console.log('drag', card)
setCurrentCard(card)
};

function dragEndHandler(e){
e.target.style.background = 'white'
};

function dragOverHandler(e){
e.preventDefault()
e.target.style.background = 'gray'
};
function dropHandler(e,card){
    e.preventDefault()
    setCardList(cardList.map(evt =>{
        if(evt.id === card.id) {
            return {...evt, order:currentCard.order}
        }
        if (evt.id === currentCard.id) {
            return {...evt, order: card.order}
        }
        return evt
    }))
    e.target.style.background = 'white';
//console.log('drop',card)
};

function sortCard(one, two){
if(one.order > two.order) {
    return 1
} else {
    return -1
}
}

return <>
<div className={s.drag}>
{cardList.sort(sortCard).map(card =>
    <div 
    onDragStart={(e) => dragStartHandler(e,card)}
    onDragLeave={(e) => dragEndHandler(e)}
    onDragEnd={(e) => dragEndHandler(e)}
    onDragOver={(e) => dragOverHandler(e)}
    onDrop={(e) => dropHandler(e,card)}
    draggable={true}
    className={s.card}>
        {card.text}
    </div>
    )}
</div>
</>
}