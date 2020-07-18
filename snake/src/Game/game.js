import React from 'react';
import PrepareGamePane from './preparePane';
import {connect} from 'react-redux'; 

function Game({level,score,setScore,setStyle,dispatch}) {
  let now = new Date();
  let hour = now.getHours();
  let brd = document.getElementsByClassName('html');
  let colorScor = '';
  let rt = 12;
  let fieldSizeX = Math.round(brd[0].clientHeight*0.8/(brd[0].clientHeight*0.05));
  let fieldSizeY = Math.round(brd[0].clientWidth*0.8/(brd[0].clientHeight*0.05));
  let fi = [],
  cl = []
  for ( let x = 0; x < fieldSizeX; x++){
    fi.push({
        className: 'field',
        style: {top: `${rt+x*5}%`}
    })
  for (let y = 0; y < fieldSizeY; y++){
      cl.push({
          className: 'ldx-float-ttb-in',
          x: x,
          y: y,
          style: {width : `calc(${75/fieldSizeY}%)`}
      })
    }
  } 
  const [field] = React.useState(fi);
  const [cell,setCell] = React.useState(cl);
  if (hour >3){
      colorScor = "rgb(+"+(hour*15)+","+(hour*10)+","+(hour*10)+")";
    } else {
      colorScor = "rgb(+"+Math.abs(255-hour*15)+","+(255-hour*10)+","+(255-hour*10)+")";
    }

   function makefood (){
      let x = Math.round(Math.random() * (fieldSizeX-1));
      let y = Math.round(Math.random() * (fieldSizeY-1));
      let sr = false;
      let buff = cell.map(ce => {
        if ((ce.x === x) && (ce.y === y) && (ce.className === 'ldx-float-ttb-in')) {
            ce.className= "ldx-float-ttb-in food";
            sr = true;
        }
        return ce;
      })
      sr ? setCell(buff):makefood();
    }


    function initSnake(body){
      let buff = cell.map(ce => {
        for (let i=0; i<body.length; i++){
          if ((ce.x === body[i][0]) && (ce.y === body[i][1])) {
              ce.className= "ldx-float-ttb-in snake";
          }
        }
        return (ce);
    })
    setCell(buff);
    }

    function compareEatOrGameOver (headCell, body) {
      let bd = body,
          ovr = false; 
      let tmp = null;
      let buff = cell.map(ce => {if ((ce.x === headCell[0]) && (ce.y === headCell[1])) {
        tmp = ce;
      }
      return ce;
    });
      if (tmp === null ) {
        if (headCell[0]===-1)
          headCell[0] = fieldSizeX - 1;
        if (headCell[0]===fieldSizeX)
          headCell[0] = 0;
        if (headCell[1]===-1)
          headCell[1] = fieldSizeY - 1;
        if (headCell[1]===fieldSizeY)
          headCell[1] = 0;
        tmp = cell.filter(ce => {return (ce.x === headCell[0]) && (ce.y === headCell[1])})[0];
      }
      if ( tmp != null && tmp.className==='ldx-float-ttb-in' ){
          let removeTail = bd.shift();
          bd.push(headCell);
          buff = buff.map(ce => {
            if ((ce.x === removeTail[0]) && (ce.y === removeTail[1])) {
              ce.className='ldx-float-ttb-in';
            }
            if ((ce.x === headCell[0]) && (ce.y === headCell[1])) {
              ce.className='ldx-float-ttb-in snake';
            }
            return ce;
        });
      } else { 
          if ( tmp != null && tmp.className==='ldx-float-ttb-in food'){
              bd.push(headCell);
              buff = buff.map(ce => {
                if ((ce.x === headCell[0]) && (ce.y === headCell[1])) {
                  ce.className='ldx-float-ttb-in snake';
                }
                return ce;
              });
              setScore(bd.length-3);
              makefood();
          } else { 
              if (tmp.className==='ldx-float-ttb-in snake'){
                  setStyle('absolute');
                  ovr = true;
                  dispatch({type: 'records'});
              }
          }
      }
    !ovr && setCell(buff);
    return bd
  }
  return (
    <div>
      <div className = 'score' style={{color: colorScor}}>Ваш счет: {score}</div>
      <PrepareGamePane level={level} field={field} cell={cell} makeFood={makefood} initsnake={initSnake} comparOGO={compareEatOrGameOver}/>
    </div>
  );
}

export default connect()(Game);
