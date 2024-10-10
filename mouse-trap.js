let lastCircle = null

const createCircle = (e) => {
  // Create a new div element for the circle
  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.style.background = 'white'
  
  // Position the circle at mouse coordinates
  circle.style.left = `${e.clientX - 25}px`
  circle.style.top = `${e.clientY - 25}px`
  
  // Add to document and update lastCircle reference
  document.body.appendChild(circle)
  lastCircle = circle
}

const moveCircle = (e) => {
  if (!lastCircle) return

  const box = document.querySelector('.box')
  const boxRect = box.getBoundingClientRect()
  const circleRect = lastCircle.getBoundingClientRect()
  
  // Calculate new positions
  let newX = e.clientX - 25
  let newY = e.clientY - 25

  // Check if circle is inside the box
  const isInBox = (
    circleRect.left >= boxRect.left &&
    circleRect.right <= boxRect.right &&
    circleRect.top >= boxRect.top &&
    circleRect.bottom <= boxRect.bottom
  )

  if (isInBox) {
    // Circle is trapped inside box
    lastCircle.style.background = 'var(--purple)'
    
    // Constrain movement within box boundaries
    newX = Math.max(boxRect.left + 1, Math.min(boxRect.right - 51, newX))
    newY = Math.max(boxRect.top + 1, Math.min(boxRect.bottom - 51, newY))
  }

  // Update circle position
  lastCircle.style.left = `${newX}px`
  lastCircle.style.top = `${newY}px`
}

const setBox = () => {
  const box = document.createElement('div')
  box.classList.add('box')
  
  // Center the box on the page
  box.style.position = 'absolute'
  box.style.left = '50%'
  box.style.top = '50%'
  box.style.transform = 'translate(-50%, -50%)'
  
  document.body.appendChild(box)
}

// Set up event listeners
document.addEventListener('click', createCircle)
document.addEventListener('mousemove', moveCircle)

// Create the box when the script loads
setBox()

export { setBox, createCircle, moveCircle };