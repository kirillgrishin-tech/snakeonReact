import React from 'react';
import Loading from './Loading';
import Table from './table';

function Records({prep,add,setAdd,setStyle,color}){
    const server = '192.168.1.9';
    const [value,setValue] = React.useState();
    const [rec,setRec] = React.useState();
    React.useEffect(() =>{
      fetch(`http://${server}:3000/users`)
      .then(response => response.json())
      .then(response => {
        setRec(response.data.rows)
      })
    },[])

    function addRecord(title,scr){
        let data = {player: title,score:scr};
        fetch(`http://${server}:3000/users/add`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
        )
        .then(response => response.json())
        .then(response => {
          setRec(response.data.rows)
        })
      }
    
    return(
    <div className='GameP' style={{color: color}}>
        <h1 style={{marginBottom: '1em'}}>Список рекордов</h1>
        {rec ? <Table color={color} add={add} rec={rec} setValue={setValue} value={value}/>:<Loading color={color}/>}

            {add !=0 && <tr>
              <td style={{width: '10%'}}></td>
              <td style={{width:'20%'}}></td>
              <td style={{border: `2px solid ${color}`}}>Введите имя: <input value={value} onChange={(event) => {setValue(event.target.value)}}/></td>
              <td style={{border: `2px solid ${color}`,width: '10%'}}>{add}</td>
            </tr>
            }
        {add === 0 ? 
            <button className = 'btn' style={{margin: '1em', color: 'blue'}} onClick={()=>{setStyle('fixed'); prep('init');}}>Назад</button>:<button className = 'btn' style={{margin: '1em', color: 'blue'}} onClick={()=>{addRecord(value,add); setAdd(0);}}>Добавить</button>}
    </div>
    )
}

export default Records;