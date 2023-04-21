import React, { useState, useRef } from 'react';
import s from './ToDoList.module.css';


export default function ToDoList() {
    const [listItems, setListItems] = useState(['Вынести мусор', 'Погулять с собакой', 'Сходить в магазин']);
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);//useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.
    const[newList, setNewList]=useState('');

    //функция сортировки
    const handleSort = () => {
        let _listItems = [...listItems] //дубликат items

        //удаление и сохранение содержимого
        const draggedItemContent = _listItems.splice(dragItem.current, 1)[0];

        //переключение
        _listItems.splice(dragOverItem.current, 0, draggedItemContent);

        //сброс
        dragItem.current = null;
        dragOverItem.current = null;

        //обновление
        setListItems(_listItems);
    };

    const handleNameChange=(e)=>{
   setNewList(e.target.value);
    };

//добавление новой задачи
const handleAddList=()=>{
    const _listItems=[...listItems];
    _listItems.push(newList)
    setListItems(_listItems)
};


    return <>
        <div className={s.list}>
            <h2 className={s.h2}>To Do List</h2>
          <div className={s.group}>
            <input 
            className={s.input}
            type='text' 
            name='toDoList'
             placeholder='new list' 
             onChange={handleNameChange}
             />

            <button className={s.button} onClick={handleAddList}>Add new List</button>
          </div>

        <ul className={s.list__container}>
            {listItems.map((item, index) => (
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