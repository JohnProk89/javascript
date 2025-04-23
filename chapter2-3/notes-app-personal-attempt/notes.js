const addBtn = document.getElementById('submitNote');
addBtn.addEventListener('click', function() {
    const container = document.querySelector('.main');
    const noteBlock = document.createElement('div');
    const noteText = document.getElementById('inputText').value
    noteBlock.classList.add('note');
    container.appendChild(noteBlock);
    noteBlock.innerHTML = `
            <div class="left-part">
                <div class="checker">  
                    <button class="">
                    </button> 
                </div>
                <div class="content">
                ${noteText}
                </div>
            </div>
            <div class="deleter">
                <button class="">
                    X
                </button> 
            </div>
        `;
});