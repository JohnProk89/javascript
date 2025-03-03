// Map HTML UI Element to DOM node
const pDOM = document.getElementById('helloText')
pDOM.innerHTML = "<strong>Hello World!</strong>"

// console for logging
console.log('Hello World!')

function printText(){
    const text = document.getElementById('inputText').value
    document.getElementById('helloText').innerHTML = text
}

function printText2(){
    const text = document.getElementById('inputText2').value
    document.getElementById('helloText2').innerHTML = text
}