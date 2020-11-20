const $heartsCombination    = document.querySelector('#hearts-combination');
const $btnTop               = document.querySelector('#btn-top');
const $btnBottom            = document.querySelector('#btn-bottom');
const combinationToGuess    = [];
const combinationPlayer     = [];
const COMBINATION_NUMBER    = 12;



function clickHandler(direction) {
    combinationPlayer.push(direction);

    console.log(combinationPlayer, combinationToGuess);

    if(combinationPlayer.length > COMBINATION_NUMBER) {
        combinationPlayer.shift();
    } 
    
    if(combinationPlayer.join('') === combinationToGuess.join('')) {
        hasWon();
    }
}

$btnTop.addEventListener('click' , () => {
    clickHandler('up');
});

$btnBottom.addEventListener('click' , () => {
    clickHandler('down');
});

function hasWon(){
    const storage = new Storage();
    storage.winHandler(4);
}


function generateRandomCombination(number) {
    for(let i = 0; i < number; i ++) {
        const direction = Math.random() > 0.5 ? 'up' : 'down'
        combinationToGuess.push(direction);
        const className = direction === 'up' ? 'fas fa-heart heart-icon' : 'fas fa-heart heart-icon fa-rotate-180';
        $heartsCombination.innerHTML += `<i class="${className}"></i>`;
    }
}


generateRandomCombination(COMBINATION_NUMBER);

