import React, { useState } from 'react';
import './style.css'

function App(props) {
    
    return (
      <div id="canvas" onMouseMove={props.handleMouseOver} onClick={props.handleClick}>
          {props.squares.map((square, index) => {
              return (
                  <div key={index} className="rectangle" style={{ left: square.left, top: square.top, width: square.width, height: square.height }}></div>
              )
          })}
      </div>
    );
   }

export default App;
