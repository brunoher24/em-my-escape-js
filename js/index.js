const storage = new Storage();
const data = storage.get();

const $currentLevel = document.querySelector("#level-nbr");
$currentLevel.innerText = data.currentLevel;


const $backArrow = document.querySelector(".back-arrow");
$backArrow.addEventListener('click', () => {
    if(data.currentLevel > 1) {
        data.currentLevel --;
        $currentLevel.innerText = data.currentLevel;
    }
});

const $playLevel = document.querySelector(".play-level");
$playLevel.addEventListener('click', () => {
    window.location.href = `./html/niveau${data.currentLevel}.html`;
});


const $forwardArrow = document.querySelector(".forward-arrow");
$forwardArrow.addEventListener('click', () => {
    console.log(data.currentLevel, data.completedLevels);
    if(data.currentLevel <= data.completedLevels) {
        data.currentLevel ++;
        $currentLevel.innerText = data.currentLevel;
    }
});
