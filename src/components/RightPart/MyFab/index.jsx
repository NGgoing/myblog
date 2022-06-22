import * as React from "react";
import Fab from "@mui/material/Fab";
import "./index.css";

/**
 *  customize Fab(Floating Action Button) component, mainly click-and-move
 */
export default (props) => {
  const { color, children } = props; //get the props from parent

  /**
   *  bind some eventListeners here
   */
  React.useEffect(() => {
    const container = document.getElementById("container"); //get the div container
    let mousemoveHandler = null; // mousemove Event Listener
    const winWidth = window.innerWidth - container.offsetWidth; // the width of viewport except the container's width
    const winHeight = window.innerHeight - container.offsetHeight; // the height of viewport except the container's height

    //calculate x and y and add mousemove eventListener when clicking the container
    container.addEventListener("mousedown", (event) => {
      let x = event.pageX - container.offsetLeft; // the offset X between pointer and container
      let y = event.pageY - container.offsetTop; // the offset Y between pointer and container

      //set the position of the container when moving the pointer in the container
      document.addEventListener(
        "mousemove",
        (mousemoveHandler = (event) => {
          const tempX = event.pageX - x; //the position X of the pointer minus the offset X
          const tempY = event.pageY - y; //the position Y of the pointer minus the offset Y
          if (tempX > 0 && tempX < winWidth) {
            container.style.left = tempX + "px"; //set the value of left within viewport's width
          }
          if (tempY > 0 && tempY < winHeight) {
            container.style.top = tempY + "px"; //set the value of top within viewport's height
          }
        })
      );
    });

    //remove the mousemove eventListener when mouse up
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    });
  }, []);

  return (
    <div id="container">
      <Fab color="primary" color={color}>
        {children}
      </Fab>
    </div>
  );
};
