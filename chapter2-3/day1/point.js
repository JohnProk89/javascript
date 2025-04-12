const emptyObj = {}
const point  = {
    x: 1, 
    y: 2,
    toString: function() {return `(${this.x}, ${this.y})`} 
}
const point2 = {x: point.x, y: point.y}

const point3D = new Object();
point3D.x = 1
point3D.y = 2
point3D.z = 3

for (let prop in point) {
    console.log(`${prop} : ${point[prop]}`)
}

console.log(point.toString())
console.log(point)

const pointLocal = {
    x: 1000.54,
    y: 2000.55,
    toString: function() {return `(${this.x}, ${this.y})` },
    toLocaleString: function() {return `(${this.x.toLocaleString()} -- ${this.y.toLocaleString('en-US')})`}
}

console.log(pointLocal.toString())
console.log(pointLocal.toLocaleString())