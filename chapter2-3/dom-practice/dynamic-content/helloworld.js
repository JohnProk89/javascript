const container1 = document.querySelector('.container1')
container1.innerHTML = "<p>Hello World !!!</p>"
const container2 = document.querySelector('.container2')
container2.innerHTML += "<p>Says Hello World !!!</p>"
const container3 = document.querySelector('.container3')
const p3 = document.createElement('p')
p3.textContent = "Hello World !"
container3.appendChild(p3)
const container4 = document.querySelector('.container4')
const p4 = document.createElement('p')
const text4 = "Hello Coding Factory!"
p4.append(text4)
container4.appendChild(p4)