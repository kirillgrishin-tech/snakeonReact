import React from 'react';

function PrepareGamePane ({level,field,cell,makeFood,initsnake,comparOGO}){
    let KEY = {
        'left' : 37,
        'up' : 38,
        'right' : 39,
        'down' : 40
    };
    let direction = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]];
    let directx = 0;
    let direct = 0;
    let snake = {
        body : [[1,1],[1,2],[1,3]],
        initialisationSnake : function (){
            swipefc();
            makeFood();
            initsnake(this.body);
        },
        move : function (){
            direct = directx;
            let body = this.body
            let head = this.body[this.body.length-1];
            let headCell = head.map(function(value, index){ return value + direction[direct][index] });
            this.body = comparOGO(headCell,body);
        }}
    document.addEventListener('keydown', keyHandler, false);

    function remswipefc(){
        let     swipedir,
                startX,
                startY,
                distX,
                distY,
                threshold = 80,
                restraint = 100,
                allowedTime = 5000,
                elapsedTime,
                startTime
    
        document.removeEventListener('touchstart', function(e){
            let touchobj = e.changedTouches[0]
            swipedir = 'none'
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
        })
    
        document.removeEventListener('touchmove', function(e){
            e.preventDefault() // prevent scrolling when inside DIV
        })
    
        document.removeEventListener('touchend', function(e){
            let touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX 
            distY = touchobj.pageY - startY 
            elapsedTime = new Date().getTime() - startTime 
            if (elapsedTime <= allowedTime){ 
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ 
                    swipedir = (distX < 0)? 'left' : 'right'
                }
                else if (Math.abs(distY) >= threshold  && Math.abs(distX) <= restraint){ 
                    swipedir = (distY < 0)? 'up' : 'down'
                }
            }
            handleswipe(swipedir)
        })
    }
        

            function swipefc(){
                let     swipedir,
                        startX,
                        startY,
                        distX,
                        distY,
                        threshold = 80,
                        restraint = 100,
                        allowedTime = 5000,
                        elapsedTime,
                        startTime
            
                document.addEventListener('touchstart', function(e){
                    let touchobj = e.changedTouches[0]
                    swipedir = 'none'
                    startX = touchobj.pageX
                    startY = touchobj.pageY
                    startTime = new Date().getTime() // record time when finger first makes contact with surface
                }, true)
            
                document.addEventListener('touchmove', function(e){
                    e.preventDefault() // prevent scrolling when inside DIV
                }, false)
            
                document.addEventListener('touchend', function(e){
                    let touchobj = e.changedTouches[0]
                    distX = touchobj.pageX - startX 
                    distY = touchobj.pageY - startY 
                    elapsedTime = new Date().getTime() - startTime 
                    if (elapsedTime <= allowedTime){ 
                        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ 
                            swipedir = (distX < 0)? 'left' : 'right'
                        }
                        else if (Math.abs(distY) >= threshold  && Math.abs(distX) <= restraint){ 
                            swipedir = (distY < 0)? 'up' : 'down'
                        }
                    }
                    handleswipe(swipedir)
                }, false)
            }
                
                    function handleswipe(swipe){
                        switch (swipe){
                            case 'left':
                                if (direct !== 0){
                                    directx = 2;
                                }
                                break;
            
                            case 'right':
                                if (direct !== 2){
                                    directx = 0;
                                }
                                break;
            
                            case 'up':
                                if (direct !== 1){
                                    directx = 3;
                                }
                                break;
            
                            case 'down':
                                if (direct !== 3){
                                    directx = 1;
                                }
                                break;
                            default:
                                break;
                        }
                    }

    function keyHandler (event){
        switch (event.keyCode) {
            case KEY.left:
                if (direct !== 0){
                    directx = 2;
                }
                break;

            case 65:
                if (direct !== 0){
                    directx = 2;
                }
                break;

            case KEY.right:
                if (direct !== 2){
                    directx = 0;
                }
                break;
            
            case 68:
                if (direct !== 2){
                    directx = 0;
                }
                break;

            case KEY.up:
                if (direct !== 1){
                    directx = 3;
                }
                break;

            case 87:
                if (direct !== 1){
                    directx = 3;
                }
                break;

            case KEY.down:
                if (direct !== 3){
                    directx = 1;
                }
                break;

            case 83:
                if (direct !== 3){
                    directx = 1;
                }
                break;

            default :
                return;
        }
    }
    React.useEffect(()=>{
        snake.initialisationSnake();
        let inter = setInterval(() => {snake.move();},level);
        return ()=>{
            clearInterval(inter);
            remswipefc();
        }
        // eslint-disable-next-line
    },[level])
    return (
        <div>
            {field.map((gp,index) =>{return <div key={index} className={gp.className} style= {gp.style}>
                {cell.map(cl=>{
                    if (cl.x === index){
                        return <div key={`${cl.x},${cl.y}`}className={cl.className} style={cl.style} id={`${cl.x},${cl.y}`}></div>
                    }
                    return null;
                })}</div>})}
        </div>
     )
}


export default PrepareGamePane;