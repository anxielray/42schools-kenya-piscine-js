let circles = [];
let box;

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.radius = this.diameter / 2;
    this.isTrapped = false;
    this.HTML = null;
    this.draw();
    circles.push(this);
  }

  draw() {
    this.HTML = document.createElement("div");
    this.HTML.classList.add("circle");
    this.HTML.style.position = "absolute";
    this.HTML.style.top = this.y + "px";
    this.HTML.style.left = this.x + "px";
    this.HTML.style.background = "white";
    document.body.appendChild(this.HTML);
  }

  move(x, y) {
    if (!this.isTrapped) {
      // Move freely if not trapped
      this.x = x;
      this.y = y;
      this.trapped(x, y); // Check if this move would trap the circle
    } else {
      // If trapped, constrain movement within box
      const newX = Math.max(box.x + 0.5, Math.min(box.x + box.width - 50.5, x));
      const newY = Math.max(box.y + 0.5, Math.min(box.y + box.height - 50.5, y));
      this.x = newX;
      this.y = newY;
    }

    // Update position
    this.HTML.style.top = this.y + "px";
    this.HTML.style.left = this.x + "px";
  }

  trapped(newX = this.x, newY = this.y) {
    const circleCenter = {
      x: newX + this.radius,
      y: newY + this.radius,
    };

    // Check if circle is completely inside box
    const isInside =
      circleCenter.x - this.radius > box.x &&
      circleCenter.x + this.radius < box.x + box.width &&
      circleCenter.y - this.radius > box.y &&
      circleCenter.y + this.radius < box.y + box.height;

    if (isInside) {
      this.isTrapped = true;
      this.HTML.style.background = "var(--purple)";
    }

    return isInside;
  }

  inRectangle(x, y) {
    const futureCenter = {
      x: x + this.radius,
      y: y + this.radius,
    };

    return (
      futureCenter.x - this.radius > box.x &&
      futureCenter.x + this.radius < box.x + box.width &&
      futureCenter.y - this.radius > box.y &&
      futureCenter.y + this.radius < box.y + box.height
    );
  }
}

class Box {
  constructor() {
    this.HTML = document.createElement("div");
    this.HTML.classList.add("box");
    this.HTML.style.position = "absolute";
    this.HTML.style.top = "50%";
    this.HTML.style.left = "50%";
    this.HTML.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(this.HTML);

    // Get actual position after transform
    const rect = this.HTML.getBoundingClientRect();
    this.x = rect.left;
    this.y = rect.top;
    this.width = rect.width;
    this.height = rect.height;
  }
}

function createCircle(e) {
  if (e === undefined) return;
  new Circle(e.clientX - 25, e.clientY - 25);
}

function moveCircle(e) {
  if (e === undefined || circles.length === 0) return;
  circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
  box = new Box();
}

// Set up event listeners
document.body.addEventListener("click", (e) => {
  createCircle(e);
});

document.body.addEventListener("mousemove", (e) => {
  moveCircle(e);
});

export { createCircle, moveCircle, setBox };
