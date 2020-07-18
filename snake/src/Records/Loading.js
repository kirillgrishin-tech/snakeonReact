import React from 'react';

function Loading({color}){
    return <div className="lds-ring" ><div style={{borderColor: `${color} transparent transparent transparent`}}></div><div style={{borderColor: `${color} transparent transparent transparent`}}></div><div style={{borderColor: `${color} transparent transparent transparent`}}></div><div style={{borderColor: `${color} transparent transparent transparent`}}></div></div>
}

export default Loading;