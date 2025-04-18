const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const p = document.createElement('p')
p.textContent = "Hello World !"
container.innerHTML = "<p>Hello World !!!</p>"
container2.innerHTML += "<p>Says Hello World !!!</p>"
container.appendChild(p)