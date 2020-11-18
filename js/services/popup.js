class Popup {
    constructor(callback, title, msgTxt) {
        this.title = title;
        if(msgTxt) {
            this.msgTxt = msgTxt;
        }
        this.display(callback);

    }

    display(callback) {
        const $popup = document.createElement('div');
        $popup.className = 'popup-ctnr';
        const $content = `
            <h2>${this.title}</h2>
            <p>${this.msgTxt || ''}<p/>
        `;
        $popup.innerHTML = $content;

        const $actionBtn = document.createElement('button');
        $actionBtn.onclick = e => {
            callback();
        }
        $actionBtn.innerText = 'OK';
        $popup.appendChild($actionBtn);
        document.body.appendChild($popup);
    }
}