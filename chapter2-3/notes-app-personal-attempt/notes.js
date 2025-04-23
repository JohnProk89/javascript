const addBtn = document.getElementById('submitNote');
let noteId = 0;
// let checkId = 0;
addBtn.addEventListener('click', function createNote() {
    const container = document.querySelector('.main');
    const noteBlock = document.createElement('div');
    const noteText = document.getElementById('inputText').value
    noteBlock.classList.add('note');
    noteBlock.id = noteId++;
    container.appendChild(noteBlock);
    noteBlock.innerHTML = `
            <div class="left-part">
                <div class="checker">  
                    <button id="checkNote" onclick="checkNote(${noteBlock.id})">
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
    console.log(noteBlock.id);
});

function checkNote(id) {
    const note = document.getElementById('id');
    // const btn = document.getElementById('checkNote');
    const btn = note.children[0].children[0].children[0];
    btn.innerHTML = `
        <i class="fa-solid fa-check"></i>
    ` 
    console.log("Checked note", id)
}

function deleteNote() {
    // const currentId = '';
    // const note = document.getElementById('id');
    // note.remove();
    console.log("Trying to remove note...")
}