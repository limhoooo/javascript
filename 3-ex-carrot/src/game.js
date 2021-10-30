
import { Field } from './field.js'

export class Game {
    constructor() {
        this.gameFlag = false;
        this.gameBtn = document.querySelector('.game_button');
        this.gameBtn.addEventListener('click',
            (event) => this.onclick(event));
        this.field = new Field();
    }
    onclick(event) {
        if (this.gameFlag) {
            this.stop()
        } else {
            // 벌레, 당근을 뿌린다.
            this.start()
        }
    }
    start() {
        this.gameFlag = true;
        this.gameBtnFlag('start');
        this.field.addInit();
    }
    stop() {
        this.gameFlag = false;
        this.gameBtnFlag('stop');
        this.field.init();
    }
    gameBtnFlag(flag) {
        const icon = this.gameBtn.querySelector('.fas');
        switch (flag) {
            case 'start':
                icon.classList.remove('fa-play');
                icon.classList.add('fa-stop');
                break;
            case 'stop':
                icon.classList.remove('fa-stop');
                icon.classList.add('fa-play');
                break;
            default:
                break;
        }

    }
}