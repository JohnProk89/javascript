const addBtn = document.getElementById('submitNote');
addBtn.addEventListener('click', function() {
    const container = document.querySelector('.main');
    const noteBlock = document.createElement('div');
    const id = 1;
    const noteText = document.getElementById('inputText').value
    noteBlock.classList.add('note');
    container.appendChild(noteBlock);
    noteBlock.innerHTML = `
            <div class="left-part">
                <div class="checker">  
                    <button id="checkNote" onclick="checkNote()">
                    </button> 
                </div>
                <div class="content">
                ${noteText}
                </div>
            </div>
            <div class="deleter">
                <button id="deleteNote" onclick="deleteNote()">
                    X
                </button> 
            </div>
        `;
    // noteBlock.id = id++;
});

function checkNote() {
    const btn = document.getElementById('checkNote');
    btn.innerHTML = `
        <i class="fa-solid fa-check"></i>
    ` 
}

function deleteNote() {
    // const currentId = '';
    // const note = document.getElementById('id');
    // note.remove();
    console.log("Trying to remove note...")
}