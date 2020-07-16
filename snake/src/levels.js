import React from 'react';

function Levels({level,prepare}){
    return (
        <div className='GameP'>
            <h1 style={{marginBottom: '1em'}}>Выберите уровень сложности</h1>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(300); prepare('game')}}>Легкий</button>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(200); prepare('game')}}>Средний</button>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(100); prepare('game')}}>Сложный</button>
            <button className = 'btn' style={{margin: '1em', color: 'blue'}} onClick={()=>{prepare('init')}}>Назад</button>
        </div>
    )
}

export default Levels;