function addNote () {

        const note = document.getElementById('inputText').value
        const container = document.querySelector('.main');
        const newNote = document.createElement('div');
        newNote.classList.add('note');
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
        `;
        // console.log(document.getElementById('inputText').value)
    }
