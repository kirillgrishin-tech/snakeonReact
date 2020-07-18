import React from 'react';
import mapStatetoProps from '../store/mapState';
import {connect} from 'react-redux'; 

function Levels({level,prepare,color,dispatch}){
    return (
        <div className='GameP'>
            <h1 style={{marginBottom: '1em', color: color}}>Выберите уровень сложности</h1>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(300); dispatch({type: 'game'});}}>Легкий</button>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(200); dispatch({type: 'game'});}}>Средний</button>
            <button className = 'btn' style={{margin: '1em'}} onClick={()=>{level(100); dispatch({type: 'game'});}}>Сложный</button>
            <button className = 'btn' style={{margin: '1em', color: 'blue'}} onClick={()=>dispatch({type: 'init'})}>Назад</button>
        </div>
    )
}

export default connect(mapStatetoProps)(Levels);