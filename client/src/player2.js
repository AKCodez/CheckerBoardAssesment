import React, { useState } from "react";
import "./cell.css";
import randomcolor from "randomcolor";

function Player2(props) {
  //if cells are less than or equal to
  const [color, setColor] = useState(false);
  const [shape, setShape] = useState(false);
  return (
    <td>
      {props.color === 1 ? (
        <td key={props.color} className="black">
          <div
            className="blueDot"
            style={{
              backgroundColor: color ? randomcolor() : "black",
              borderRadius: shape ? "10%" : "50%",
            }}
          ></div>
          <input
            onClick={() => setColor(!color)}
            type="radio"
            value="option2"
          />
          color
          <br />
          <input
            onClick={() => setShape(!shape)}
            type="radio"
            value="option2"
          />
          shape
        </td>
      ) : (
        <td key={props.color} className="white">
          <div
            className="blueDot"
            style={{
              backgroundColor: color ? randomcolor() : "black",
              borderRadius: shape ? "10%" : "50%",
            }}
          ></div>
          <input
            onClick={() => setColor(!color)}
            type="radio"
            value="option2"
          />
          color
          <br />
          <input
            onClick={() => setShape(!shape)}
            type="radio"
            value="option2"
          />
          shape
        </td>
      )}
    </td>
  );
}

export default Player2;
