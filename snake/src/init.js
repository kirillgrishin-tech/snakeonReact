import React from 'react';
import mapStatetoProps from './store/mapState';
import {connect} from 'react-redux';

function Init({dispatch,color,setStyle}){
    return (
        <div className='GameP'>
            <h1 style={{marginBottom: '2em',color: color}}>Змейка</h1>
            <button className = 'btn' onClick={()=>{dispatch({type: 'levels'})}}>Начать игру</button>
            <button className = 'btn' onClick={()=>{dispatch({type: 'records'}); setStyle('absolute');}}>Рекорды</button>
        </div>
    )
}

export default connect(mapStatetoProps)(Init);