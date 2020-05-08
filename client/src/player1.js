import React,{useState} from 'react';
import './cell.css';

function Player1 (props) {
    //if props.num 
console.log(props.num)
    return (
        <td>
        {
        props.color === 1 ? 
        (

            <td key={props.color} className='black'>
                <div className='redDot'></div>
            </td>
        ) 
        : 
        (
            <td key={props.color} className="white">
                <div className='redDot'></div>
            </td>
        )
    }
        </td>
        
    );
}

export default Player1;