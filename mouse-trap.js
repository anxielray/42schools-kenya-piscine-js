let circles = []
let box

class Circle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.diameter = 51
        this.isTrapped = false
        this.HTML = null
        this.draw()
        circles.push(this)
    }

    draw() {
        this.HTML = document.createElement('div')
        this.HTML.classList.add('circle')
        this.HTML.style.position = 'absolute'
        this.HTML.style.top = this.y + 'px'
        this.HTML.style.left = this.x + 'px'
        this.HTML.style.background = 'white'
        this.trapped()
        document.body.appendChild(this.HTML)
    }

    move(x, y) {
        this.trapped()
        if (!this.isTrapped) {
            // If not trapped, move freely
            this.x = x
            this.y = y
            this.HTML.style.top = this.y + 'px'
            this.HTML.style.left = this.x + 'px'
        } else {
            // If trapped, check movement constraints
            if (this.inRectangle(x, y)) {
                // Can move freely within box
                this.x = x
                this.y = y
                this.HTML.style.top = this.y + 'px'
                this.HTML.style.left = this.x + 'px'
            } else {
                // Can only move along valid axes
                if (this.inRectangle(x, this.y)) {
                    this.x = x
                    this.HTML.style.left = this.x + 'px'
                } else if (this.inRectangle(this.x, y)) {
                    this.y = y
                    this.HTML.style.top = this.y + 'px'
                }
            }
        }
    }

    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true
            this.HTML.style.background = 'var(--purple)'
        } else {
            this.isTrapped = false
            this.HTML.style.background = 'white'
        }
    }

    inRectangle(x, y) {
        return (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        )
    }
}

class Box {
    constructor() {
        this.HTML = document.createElement('div')
        this.HTML.classList.add('box')
        this.HTML.style.position = 'absolute'
        this.HTML.style.top = '50%'
        this.HTML.style.left = '50%'
        this.HTML.style.transform = 'translate(-50%, -50%)'
        document.body.appendChild(this.HTML)

        // Calculate actual position after transform
        this.x = this.HTML.offsetLeft - (this.HTML.offsetWidth / 2)
        this.y = this.HTML.offsetTop - (this.HTML.offsetHeight / 2)
        this.width = this.HTML.offsetWidth
        this.height = this.HTML.offsetHeight
    }
}

// Event handlers
function createCircle(e) {
    if (e === undefined) return
    new Circle(e.clientX - 25, e.clientY - 25)
}

function moveCircle(e) {
    if (e === undefined || circles.length === 0) return
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25)
}

function setBox() {
    box = new Box()
}

// Set up event listeners
document.body.addEventListener('click', (e) => {
    createCircle(e)
})

document.body.addEventListener('mousemove', (e) => {
    moveCircle(e)
})

export { createCircle, moveCircle, setBox }