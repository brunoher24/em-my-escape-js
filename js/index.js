const currentLevel = 1;

const $currentLevel = document.querySelector("#level-nbr");
$currentLevel.innerText = currentLevel;

const $playLevel = document.querySelector(".play-level");
$playLevel.addEventListener('click', () => {
    window.location.href = `./html/niveau${currentLevel}.html`;
});