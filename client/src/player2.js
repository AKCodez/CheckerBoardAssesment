import React,{useState} from 'react';
import './cell.css';

function Player2(props) {
    //if cells are less than or equal to 
console.log(props.num)
    return (
        <td>
        {
        props.color === 1 ? 
        (

            <td key={props.color} className='black'>
                <div className='blueDot'></div>
            </td>
        ) 
        : 
        (
            <td key={props.color} className="white">
                <div className='blueDot'></div>
            </td>
        )
    }
        </td>
        
    );
}

export default Player2;