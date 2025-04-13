const point1 = {x: 0, y: 1, z: 2}
const point2 = {x: 10, y: 5, z: 6}

function printPoint(point) {
    for (let c in point) {
        console.log(`${c}: ${point[c]}`);
    }
}

function getDistance(p1, p2) {
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    let dz = p1["z"] - p2["z"];
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

printPoint(point1)
console.log(getDistance(point1, point2).toFixed(2))