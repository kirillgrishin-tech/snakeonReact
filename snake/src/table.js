import React from 'react';

function Table({color,rec,add,value,setValue}){
    return (
        <table style={{border: `2px solid ${color}` , width: '100%'}}>
        <tr>
          <th style={{border: `2px solid ${color}`, width: '10%'}}>Место</th>
          <th style={{border: `2px solid ${color}`, width:'20%'}}>Дата</th>
          <th style={{border: `2px solid ${color}`}}>Игрок</th>
          <th style={{border: `2px solid ${color}`,width: '10%'}}>Счет</th>
        </tr>
        {rec && rec.map((rc,index) => {
            return (
            <tr key={rc.id}>
              <td style={{border: `2px solid ${color}`, width: '10%'}}>{index+1}</td>
              <td style={{border: `2px solid ${color}`, width:'20%'}}>{rc.date.slice(0,10)}</td>
              <td style={{border: `2px solid ${color}`}}>{rc.player}</td>
              <td style={{border: `2px solid ${color}`,width: '10%'}}>{rc.score}</td>
            </tr>)
        })
        }

        {add !=0 && <tr>
          <td style={{width: '10%'}}></td>
          <td style={{width:'20%'}}></td>
          <td style={{border: `2px solid ${color}`}}>Введите имя: <input value={value} onChange={(event) => {setValue(event.target.value)}}/></td>
          <td style={{border: `2px solid ${color}`,width: '10%'}}>{add}</td>
        </tr>
        }
    </table>
    )
}

export default Table;