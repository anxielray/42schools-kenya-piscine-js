let lastCircle = null;

const createCircle = (e) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.background = "white";

  circle.style.left = `${e.clientX - 25}px`;
  circle.style.top = `${e.clientY - 25}px`;

  document.body.appendChild(circle);
  lastCircle = circle;
};

const moveCircle = (e) => {
  if (!lastCircle) return;

  const box = document.querySelector(".box");
  const boxRect = box.getBoundingClientRect();
  const circleRect = lastCircle.getBoundingClientRect();

  let newX = e.clientX - 25;
  let newY = e.clientY - 25;

  const isInBox =
    circleRect.left >= boxRect.left &&
    circleRect.right <= boxRect.right &&
    circleRect.top >= boxRect.top &&
    circleRect.bottom <= boxRect.bottom;

  if (isInBox) {
    lastCircle.style.background = "var(--purple)";

    newX = Math.max(boxRect.left + 1, Math.min(boxRect.right - 51, newX));
    newY = Math.max(boxRect.top + 1, Math.min(boxRect.bottom - 51, newY));
  }

  lastCircle.style.left = `${newX}px`;
  lastCircle.style.top = `${newY}px`;
};

const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  box.style.position = "absolute";
  box.style.left = "50%";
  box.style.top = "50%";
  box.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(box);
};

document.addEventListener("click", createCircle);
document.addEventListener("mousemove", moveCircle);

setBox();

export { setBox, createCircle, moveCircle };
