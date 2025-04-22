function addNote (note="New Note") {
    // const addButton = document.querySelector('.adder')
    // addButton.addEventListener('click', function() {
        console.log("Hello Button");
        const container = document.querySelector('.main');
        const newNote = document.createElement('div');
        container.appendChild(newNote);
        newNote.innerHTML = `
            <div class="left-part">
                <div class=".checker">   
                </div>
                <div class=".content">
                ${note}
                </div>
            </div>
            <div class=".deleter">
            </div>
        `
        newNote.classList.add('note');
    }
// )
// }
