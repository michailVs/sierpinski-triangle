let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')


canvas.height = window.innerHeight
canvas.width = window.innerWidth

ctx.fillStyle = 'white'

let arrayPoint = []

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

function fill(e) {
    ctx.beginPath()
    ctx.fillRect(e.clientX, e.clientY, 1, 1)
    arrayPoint.push(new Point(e.clientX, e.clientY))
}
let step = 0
let count = 0

canvas.addEventListener('mousedown', e => {
    e.preventDefault()
    if (count < 3) {
        count++
        fill(e)
        if (count === 3) {
            render()
        }
    } else {
        e.stopPropagation()
    }
})


function point () {
    let randVertex = Math.floor(Math.random() * 3)
    let randPoint = Math.floor(Math.random() * arrayPoint.length)

    let x = arrayPoint[randVertex].x + (arrayPoint[randPoint].x - arrayPoint[randVertex].x) / 2
    let y = arrayPoint[randVertex].y + (arrayPoint[randPoint].y - arrayPoint[randVertex].y) / 2

    ctx.fillRect(x, y, 1, 1)
    arrayPoint.push(new Point(x, y))
    step++
    render()
    console.log(step)
}

function render() {
    if (step < 100000) {
        setTimeout(point, 2)
    } else {
        return false
    }
}