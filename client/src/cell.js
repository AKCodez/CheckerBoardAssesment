import React from 'react';
import './cell.css';

function Cell(props) {
    return (
        <td>
        {
        props.color === 1? 
        (
            <td key={props.color} className='black'></td>
        ) 
        : 
        (
            <td key={props.color} className="white"></td>
        )
    }
        </td>
        
    );
}

export default Cell;