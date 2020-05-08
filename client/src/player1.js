import React,{useState} from 'react';
import './cell.css';
import randomcolor from 'randomcolor'

function Player1 (props) {
    console.log(props.cells, 'cells')
    const [color,setColor] = useState(false)
    const [shape,setShape] = useState(false)
    return (
        <td>
        {
        props.color === 1 ? 
        (

            <td  onClick={() => setColor(!color)} key={props.color} className='black'>
                <div  style={{backgroundColor: color ? randomcolor() : 'red', 
                borderRadius: shape ? '10%' : '50%'}} className='redDot'></div>
                <input onClick={() => setColor(!color)} type="radio" value="option2" />color
                <br/>
                <input onClick={() => setShape(!shape)} type="radio" value="option2" />shape
            </td>
        ) 
        : 
        (
            <td  key={props.color} className="white">
                <div className='redDot' style={{backgroundColor: color ? randomcolor() : 'red', 
                borderRadius: shape ? '10%' : '50%'}}></div>
                <input onClick={() => setColor(!color)} type="radio" value="option2" />color
                <br/>
                <input onClick={() => setShape(!shape)} type="radio" value="option2" />shape
            </td>
        )
    }
        </td>
        
    );
}

export default Player1;