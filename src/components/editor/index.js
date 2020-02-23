import React from 'react';
import './style.css'

function App(props) {
    
    return (
      <div id="canvas" 
    style={{backgroundSize: props.zoom}}
      onMouseMove={props.handleMouseOver} onClick={props.handleClick}>
          {props.squares.map((square, index) => {
              return (
                  <div key={index} className="rectangle"  style={{ borderRadius:props.redius ,left: square.left, top: square.top, width: square.width, height: square.height }}></div>
              )
          })}
      </div>
    );
   }

export default App;
