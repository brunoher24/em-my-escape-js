const storage = new Storage();

const currentLevel = storage.getItem('currentLevel');

const $currentLevel = document.querySelector("#level-nbr");
$currentLevel.innerText = currentLevel;

const $playLevel = document.querySelector(".play-level");
$playLevel.addEventListener('click', () => {
    window.location.href = `./html/niveau${currentLevel}.html`;
});
