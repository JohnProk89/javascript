function addNote () {
        const container = document.querySelector('.main');
        const noteBlock = document.createElement('div');
        const noteText = document.getElementById('inputText').value
        noteBlock.classList.add('note');
        container.appendChild(noteBlock);
        noteBlock.innerHTML = `
            <div class="left-part">
                <div class=".checker">   
                    Check Button
                </div>
                <div class=".content">
                ${noteText}
                </div>
            </div>
            <div class=".deleter">
                Delete Button
            </div>
        `;
    }
