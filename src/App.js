import React, { useState } from "react";
import { Grid , Container} from "@material-ui/core";
import Editor from "./components/editor";
import Settings from "./components/settings";
import Option from "./components/options";
import "./App.css";

export default function App() {

  // set values using react hooks

  let [squares, setSquares] = useState([]);
  let [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0
  });
  let [undoIndex, setUndoIndex] = useState(-1);
  let [squaresArray, setSquaresArray] = useState([]);
  let [click, setClick] = useState(false);
  let [zoom, setZoom] = useState("cover");
  let [zoomValue, setZoomValue] = useState(1);
  let [shape, setShape] = useState("0%")


  // Undo and redo controll 
  const undoOnClick = () => {
    setSquares(squaresArray[undoIndex - 1] || []);
    if (undoIndex === -1) {
    } else {
      let un = undoIndex;
      un = un - 1;
      setUndoIndex(un);
    }
  };

  const redoOnClick = () => {
    if (undoIndex >= squaresArray.length - 1) {
      return;
    } else {
      setSquares(squaresArray[undoIndex + 1] || []);
      let un = undoIndex;
      un = un + 1;
      setUndoIndex(un);
    }
  }; 

  function KeyPress(e) {
    // CTRL X UNDO
    if (e.keyCode === 90 && e.ctrlKey) {
      setSquares(squaresArray[undoIndex - 1] || []);
      if (undoIndex === -1) {
      } else {
        let un = undoIndex;
        un = un - 1;
        setUndoIndex(un);
      }
    }

    // CTRL Y REDO
    if (e.keyCode === 89 && e.ctrlKey) {
      if (undoIndex >= squaresArray.length - 1) {
        return;
      } else {
        setSquares(squaresArray[undoIndex + 1] || []);
        let un = undoIndex;
        un = un + 1;
        setUndoIndex(un);
      }
    }
  }

  document.onkeydown = KeyPress;


  const setMousePosition = e => {
    var ev = e || window.event; 
    let mousePosition = { ...mouse };
    if (ev.pageX) {
      mousePosition.x = ev.pageX + window.pageXOffset;
      mousePosition.y = ev.pageY + window.pageYOffset;
    } else if (ev.clientX) {
      mousePosition.x = ev.clientX + document.body.scrollLeft;
      mousePosition.y = ev.clientY + document.body.scrollTop;
    }
    setMouse(mousePosition);
  };

  const handleClick = e => {
    setClick(!click);
    let boundBox = {};
    if (click) {

      // SAVE TO UNDO REDO ARRAY
      let sqAr = [...squaresArray];
      sqAr.push(squares);
      setSquaresArray(sqAr);
    } else {
      setUndoIndex(undoIndex + 1);
      let mousePosition = { ...mouse };
      mousePosition.startX = mouse.x;
      mousePosition.startY = mouse.y;
      setMouse(mousePosition);
      boundBox.left = mouse.x + "px";
      boundBox.top = mouse.y + "px";
      let sq = [...squares];
      sq.push(boundBox);
      setSquares(sq);
    }
  };

  const handleMouseOver = e => {
    setMousePosition(e);
    if (click) {
      let sq = [...squares];
      if (sq.length > 0) {
        sq[sq.length - 1].width = Math.abs(mouse.x - mouse.startX) + "px";
        sq[sq.length - 1].height = Math.abs(mouse.y - mouse.startY) + "px";
        sq[sq.length - 1].left =
          mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
        sq[sq.length - 1].top =
          mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
        setSquares(sq);
      }
    }
  };


  // Zoom controls
  const zoomInitial = () => {
    setZoom("100%");
  };
  const zoomIn = () => {
    if (zoomValue === 1) {
      setZoom("800px");
      setZoomValue(2);
    }
    if (zoomValue === 2) {
      setZoom("1000px");
      setZoomValue(3);
    }
    if (zoomValue === 3) {
      setZoom("1200px");
    }
  };

  const zoomOut = () => {
    if (zoomValue === 1) {
      setZoom("cover");
    }
    if (zoomValue === 2) {
      setZoom("800px");
      setZoomValue(1);
    }
    if (zoomValue === 3) {
      setZoom("1000px");
      setZoomValue(2);
    }
  };


  // change shape
  const shapeHandler = (radius) => {
    setShape(radius)
  }

  return (
    <Container maxWidth="lg" >
    <Grid container className='app-container'  >
      <Grid  item md={12} className="head">
          Annotation Editor
      </Grid>
      <Grid item md={12} sm={12}>
        <Option
          undoOnClick={undoOnClick}
          redoOnClick={redoOnClick}
          zoomInitial={zoomInitial}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
        />
      </Grid>
     
      <Grid item md={3} sm={12}>
        <Settings
        shapeHandler={shapeHandler}
        squares={squares}
        redius={shape}
        undoOnClick={undoOnClick}
        />
      </Grid>
        
      <Grid
        item
        md={9} sm={12}
        className="flex-center"
      >
        <Editor
          handleMouseOver={handleMouseOver}
          handleClick={handleClick}
          squares={squares}
          zoom={zoom}
          redius={shape}
        />
      </Grid>  
    </Grid>
    </Container>
  );
}
