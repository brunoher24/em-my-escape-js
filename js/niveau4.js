const $mainSection    = document.querySelector('#main-section');

const signs = [
    'angle-up', 'angle-down', 'angle-right', 'angle-left', 
    'angle-double-up', 'angle-double-down', 'angle-double-left', 'angle-double-right'
];

const pairs = [];

function initPairs() {
    const signsDouble = [...signs, ...signs]; 
    console.log(signsDouble);
    const length = signs.length * 2;
    for(let i = 0; i < length; i ++) {
        const random = Math.floor(Math.random() * signsDouble.length);
        pairs.push(signsDouble[random]);
        signsDouble.splice(random, 1);
    }

    console.log(pairs);
}  

initPairs();

function createGrid() {
    let i = 0;
    const length = pairs.length/4;
    for(let x = 0; x < length; x ++) {
        const $col = document.createElement('div');
        $col.className = 'column';
        for(let y = 0; y < length; y ++) {
            const $cellCtnr = document.createElement('div');
            $cellCtnr.className = 'cell-ctnr';
            $cellCtnr.innerHTML = `<div class="losange-ctnr"><i class='fas fa-${pairs[i]}'></i></div>`;
            $col.appendChild($cellCtnr);
            i++;
        }
        $mainSection.appendChild($col);
    }
}

createGrid();


function hasWon(){
    const storage = new Storage();
    storage.winHandler(5);
}