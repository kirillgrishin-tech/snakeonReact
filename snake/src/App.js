import React from 'react';
import Game from './game';
import Init from './init';
import Levels from './levels';
import Records from './records';

function App() {
  const [level,setLevel] = React.useState();
  const [score,setScore] = React.useState(0);
  let now = new Date();
  let hour = now.getHours();
  let color = '';
  if (hour >3){
    color = "rgb(+"+Math.abs(255-hour*15)+","+(255-hour*10)+","+(255-hour*10)+")";
  } else {
    color = "rgb(+"+Math.abs(hour*15)+","+(hour*10)+","+(hour*10)+")";
  }
  const [position,setPosition] = React.useState('fixed');
  const [prepare,setPrepare] = React.useState('init');
  return (
    <div className='border' style ={{backgroundColor: color, position: position}} >
      {prepare === 'levels' && <Levels prepare={setPrepare} level={setLevel}/>}
      {prepare === 'init' && <Init prep={setPrepare} setStyle={setPosition}/>}
      {prepare === 'game' && <Game score ={score} setScore={setScore} level={level} over={setPrepare} setStyle={setPosition}/>}
      {prepare === 'records' && <Records prep={setPrepare} add={score} setAdd={setScore} setStyle={setPosition}/>}
    </div>
  );
}

export default App;
