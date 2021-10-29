'use strict';

export default class Popup {
    constructor() {
        this.popUp = document.querySelector('.pop-up')
        this.popUpMessage = document.querySelector('.pop-up_message')
        this.popUpRefresh = document.querySelector('.pop-up_refresh')
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        })
    }
    // 클릭했을때 어떤 이벤트를 전달할건지 정해주는 함수
    setClickListener(onClick) {
        this.onClick = onClick;
    }
    showWithText(text) {
        this.popUpMessage.innerText = text;
        this.popUp.classList.remove('pop-up-hide');
    }
    hide() {
        this.popUp.classList.add('pop-up-hide');
    }

}