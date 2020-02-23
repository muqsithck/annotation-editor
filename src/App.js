import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import Editor from './components/editor'
import Settings from  './components/settings'
import Option from './components/options'
import './App.css'

export default function App() {
   
  let [squares, squaresHandler] = useState([])
  let [mouse, mouseHandler] = useState({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0
})
  let [undoIndex, undoIndexHandler] = useState(-1);
  let [squaresArray, squaresArrayHandler] = useState([])
  let [click, clickHandler] = useState(false)




  function KeyPress(e) {
      // CTRL X UNDO
      if (e.keyCode === 90 && e.ctrlKey) {
          squaresHandler(squaresArray[undoIndex-1] || [])
          if(undoIndex === -1)
          {
          }
          else{
              let un = undoIndex;
              un = un-1;
              undoIndexHandler(un);
          } 
      };


      // CTRL Y REDO
      if (e.keyCode === 89 && e.ctrlKey) {
          if( undoIndex >= squaresArray.length - 1 ){
              return
          }else{
              squaresHandler(squaresArray[undoIndex+1] || [])
              let un = undoIndex;
              un = un+1;
              undoIndexHandler(un);
          }
      };
}

   document.onkeydown = KeyPress;
   const  setMousePosition =(e) => {
      var ev = e || window.event; //Moz || IE
      let mousePosition = {...mouse}
      if (ev.pageX) { //Moz
          mousePosition.x = ev.pageX + window.pageXOffset;
          mousePosition.y = ev.pageY + window.pageYOffset;
      } else if (ev.clientX) { //IE
          mousePosition.x = ev.clientX + document.body.scrollLeft;
          mousePosition.y = ev.clientY + document.body.scrollTop;
      }
      mouseHandler(mousePosition)
  };


  const handleClick = (e) => {
      clickHandler(!click)
      let boundBox = {};
      if (click) {
        // SAVE TO UNDO REDO ARRAY
          let sqAr = [...squaresArray]
          sqAr.push(squares);
          squaresArrayHandler(sqAr)
      } else {
          undoIndexHandler(undoIndex+1);
          let mousePosition = {...mouse}
          mousePosition.startX = mouse.x;
          mousePosition.startY = mouse.y;
          mouseHandler(mousePosition)
          boundBox.left = mouse.x + 'px';
          boundBox.top = mouse.y + 'px';
          let sq = [...squares]
          sq.push(boundBox)
          squaresHandler(sq)
      }

  }

  const handleMouseOver = (e) => {
      setMousePosition(e)
      if (click) {
          let sq = [...squares]
          sq[sq.length - 1].width = Math.abs(mouse.x - mouse.startX) + 'px';
          sq[sq.length - 1].height = Math.abs(mouse.y - mouse.startY) + 'px';
          sq[sq.length - 1].left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
          sq[sq.length - 1].top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
          squaresHandler(sq)
      }
  }
 



  
      
  const undoOnClick = () => {
    squaresHandler(squaresArray[undoIndex-1] || [])
    if(undoIndex === -1)
    {
    }
    else{
        let un = undoIndex;
        un = un-1;
        undoIndexHandler(un);
    } 
}


const redoOnClick = () => {
  if( undoIndex >= squaresArray.length - 1 ){
    return
}else{
    squaresHandler(squaresArray[undoIndex+1] || [])
    let un = undoIndex;
    un = un+1;
    undoIndexHandler(un);
}
}









  return (
    <Grid container style={{height:"100vh", padding: "20px",}}>
      <Grid item md={3}>
        <Settings />
      </Grid>
      <Grid item md={3}  style={{backgroundColor:"#fff"}}>
        <Option 
        undoOnClick={undoOnClick}
        redoOnClick={redoOnClick}
        />
      </Grid>
      <Grid item md={6} style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Editor 
        handleMouseOver={handleMouseOver}
        handleClick={handleClick}
        squares={squares}
        />
      </Grid>
    </Grid>
  )
}
