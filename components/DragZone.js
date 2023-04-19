import { useState } from 'react';
import s from './DragZone.module.css';

export default function DragZone({card}) {
    const [cardList, setCardList] = useState([
        { id: 1, order: 3, text: 'Lesson 1' },
        { id: 2, order: 3, text: 'Lesson 2' },
        { id: 3, order: 3, text: 'Lesson 3' },
        { id: 4, order: 3, text: 'Lesson 4' },

    ]);

    function dragStart(e,card){
      //console.log('drag', card)
     //setCurrentCard(card)
        };

        function dragEnd(e){
            //e.target.style.background = 'white'
            };
            
            function dragOver(e){
            e.preventDefault()
            //e.target.style.background = 'gray'
            };
            function dragDrop(e,card){
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
               // e.target.style.background = 'white';
            //console.log('drop',card)
            };

    return <>
        <div className={s.container}>
            <div className={s.wrapper}>
                <ul className={s.list}>
                    {cardList.map(card =>
                        <li
                            
                            //draggable={true}
                            className={s.list__caption}>
                            {card.text}
                        </li>
                    )}
                    <li className={s.list__cell}>
                   
                        <div className={s.list__card__js_card} 
                        draggable={true}
                        onDragStart={(e) => dragStart(e, card)}
                        onDragLeave={(e) => dragEnd(e)}
                        onDragEnd={(e) => dragEnd(e)}
                        onDragOver={(e) => dragOver(e)}
                        onDrop={(e) => dragDrop(e, card)}
                        >
                            <div className={s.list__card_title}>ENGLISH</div>
                            <div className={s.list__card_info}>Translation</div>
                        </div>
                 
                    
                       </li>
                    <li className={s.list__cell}>
                        <div className={s.list__card__js_card} 
                        draggable={true}
                        onDragStart={(e) => dragStart(e, card)}
                        onDragLeave={(e) => dragEnd(e)}
                        onDragEnd={(e) => dragEnd(e)}
                        onDragOver={(e) => dragOver(e)}
                        onDrop={(e) => dragDrop(e, card)}>
                            <div className={s.list__card_title}>SPANISH</div>
                            <div className={s.list__card_info}>READING</div>
                        </div>
                    </li>

                    <li className={s.list__cell}></li>
                    <li className={s.list__cell}></li>
                </ul>
            </div>
        </div>

    </>
}