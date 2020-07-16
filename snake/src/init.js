import React from 'react';

function Init({prep,color,setStyle}){
    return (
        <div className='GameP'>
            <h1 style={{marginBottom: '2em',color: color}}>Змейка</h1>
            <button className = 'btn' onClick={()=>{prep('levels')}}>Начать игру</button>
            <button className = 'btn' onClick={()=>{prep('records'); setStyle('absolute');}}>Рекорды</button>
        </div>
    )
}

export default Init;