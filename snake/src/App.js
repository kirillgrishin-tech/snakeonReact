import React from 'react';
import Game from './Game/game';
import Init from './init';
import Levels from './Game/levels';
import Records from './Records/records';
import {connect} from 'react-redux'; 
import mapStatetoProps from './store/mapState'

function App({prepare}) {
  const [level,setLevel] = React.useState();
  const [score,setScore] = React.useState(0);
  let now = new Date();
  let hour = now.getHours();
  let color = '',
      colorText='';
  let brd = document.getElementsByClassName('html');
  if (hour >3){
    colorText = "rgb(+"+(hour*15)+","+(hour*10)+","+(hour*10)+")";
    color = "rgb(+"+Math.abs(255-hour*15)+","+(255-hour*10)+","+(255-hour*10)+")";
    brd[0].style.backgroundColor = color;
  } else {
    colorText = "rgb(+"+Math.abs(255-hour*15)+","+(255-hour*10)+","+(255-hour*10)+")";
    color = "rgb(+"+Math.abs(hour*15)+","+(hour*10)+","+(hour*10)+")";
    brd[0].style.backgroundColor = color;
  }
  const [position,setPosition] = React.useState('fixed');
  return (
    <div className='border' style ={{backgroundColor: color, position: position}} >
      {prepare === 'levels' && <Levels color={colorText} level={setLevel}/>}
      {prepare === 'init' && <Init color={colorText}  setStyle={setPosition}/>}
      {prepare === 'game' && <Game score ={score} setScore={setScore} level={level} setStyle={setPosition}/>}
      {prepare === 'records' && <Records color={colorText}  add={score} setAdd={setScore} setStyle={setPosition}/>}
    </div>
  );
}

export default connect(mapStatetoProps)(App);
