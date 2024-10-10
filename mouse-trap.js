/* Develop a trap to capture the elements when the mouse is getting too close to the center of the page.

Create the following functions:

    createCircle: make it fire on every click on the page, and create a div at the position of the mouse on the screen, setting its background to white and its class to circle.

    moveCircle: make it fire when the mouse moves, and get the last circle created and makes it move along with the mouse.

    setBox: which creates a box with the class box in the center of the page. When a circle is entirely inside that box, it has to be purple (use the CSS global variable var(--purple) as its background). Once a circle enters the box, it is trapped inside and cannot escape.

    Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.
 */

const createCircle = () => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = "white";
  document.body.appendChild(circle);
};

const moveCircle = (event) => {
  const circle = document.querySelector(".circle");
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  const box = document.querySelector(".box");
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();
};

const setBox = () => {
  const box = document.querySelector(".box");
  const circle = document.querySelector(".circle");
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  if (
    circleRect.left + circleRect.width >= boxRect.left &&
    circleRect.left <= boxRect.left + boxRect.width &&
    circleRect.top + circleRect.height >= boxRect.top &&
    circleRect.top <= boxRect.top + boxRect.height
  ) {
    circle.style.backgroundColor = "--purple";
  }
};

document.addEventListener("click", createCircle);
document.addEventListener("mousemove", moveCircle);
document.addEventListener("DOMContentLoaded", setBox);

export { createCircle, moveCircle, setBox };
