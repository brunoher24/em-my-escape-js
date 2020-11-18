const $heart = document.querySelector('.heart-icon');

let heartSize = 10;
let increaseHeartSize = false;
$heart.onclick = e => {
    if(!increaseHeartSize) {
        heartSize = -20;
    }  
    heartSize = heartScale(heartSize);

    if(heartSize >= 160) {
        hasWon();
        
    }
};

const pulseInterval = window.setInterval(displayPulsation , 2000);


function hasWon(){
    window.clearInterval(pulseInterval);
    new Popup(() => {
        window.location.href = './niveau2.html';
    },
    'Passer au niveau suivant');
}

function heartScale(size) {
    size += 30;
    $heart.style.fontSize = `${heartSize}vh`;
    $heart.style.marginLeft = `-${heartSize/2}vw`;
    $heart.style.marginTop = `-${heartSize/2}vh`;
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



