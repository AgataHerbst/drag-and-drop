import React, { useState, useRef } from 'react';
import s from './Img.module.css';


export default function Img() {
    const [animalItems, setAnimalItems] = useState([<img src="/logodolfin.png" alt="dolfin" />, <img src="/logofish.png" alt="fish" />, <img src="/logooctopus.png" alt="octopus" />]);
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);//useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.

    //функция сортировки
    const handleSort = () => {
        let _animalItems = [...animalItems] //дубликат items

        //удаление и сохранение содержимого
        const draggedItemContent = _animalItems.splice(dragItem.current, 1)[0];

        //переключение
        _animalItems.splice(dragOverItem.current, 0, draggedItemContent);

        //сброс
        dragItem.current = null;
        dragOverItem.current = null;

        //обновление
        setAnimalItems(_animalItems);
    }

    /*const onDragStart = (e, index) => {
        console.log('drag started', index)
    };*/

    /*const onDragEnter = (e, index) => {
        console.log('drag enter', index)
    };*/


    return <>
        <div className={s.list}>
            <h2 className={s.h2}>Animal List</h2>
          
        <ul className={s.list__container}>
            {animalItems.map((item, index) => (
                <li
                    key={index}
                    className={s.list__item}
                    draggable
                    onDragStart={(e) => (dragItem.current = index)}
                    onDragEnter={(e) => (dragOverItem.current = index)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <h3 className={s.h3}>{item}</h3>
                </li>
            ))}
        </ul>
        </div>
    </>
}