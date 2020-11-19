const $heart = document.querySelector('.heart-icon');

let heartSize = 10;
let increaseHeartSize = false;
$heart.onclick = () => {
    if(!increaseHeartSize) {
        heartSize = -20;
    }  
    heartSize = heartScale(heartSize);

    if(heartSize >= 160) {
        window.clearInterval(pulseInterval);
        hasWon();
        
    }
};

const pulseInterval = window.setInterval(displayPulsation , 2000);


function hasWon(){
    const storage = new Storage();
    storage.winHandler(3);
}

function heartScale(size) {
    size += 30;
    $heart.style.fontSize = `${size}vh`;
    return size;
}

function displayPulsation(){
    document.body.className = 'pulse';
    increaseHeartSize = true;
    window.setTimeout(() => {
        document.body.classList.remove('pulse');  
        increaseHeartSize = false;     
    }, 500);
}



