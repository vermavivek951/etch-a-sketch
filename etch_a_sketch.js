const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

createGrid();

function createGrid() {
    for(i=0;i<16;i++) {
        for(j=0;j<16;j++) {
            const div_board = document.createElement('div');
            div_board.classList.add("checkboard");
            div_board.style.width = "30px";
            div_board.style.height = "30px";
            container.appendChild(div_board);
        }
    }
}

container.addEventListener('mouseover' , (e) => {
    if(e.target.classList == "checkboard") {
        e.target.classList.add("divActive");
    }
    console.log(e.target.classList);
});

function clear() {
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
        createGrid();
}

btn.addEventListener('click' , (e) => {
    clear();
    console.log(container.firstChild.classList);
    
});


