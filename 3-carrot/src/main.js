'use strict';
import Popup from './popup.js';
import * as sound from './sound.js';
import { Reason, GameBuilder } from './game.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
    .gameDuration(5)
    .carrotCount(5)
    .bugCount(5)
    .build()
game.setGameStopListener((reason) => {
    let message;
    switch (reason) {
        case Reason.cancel:
            message = 'REPLAY'
            sound.playAlert();
            break;
        case Reason.win:
            message = 'YOU WIN'
            sound.playWin();
            break;
        case Reason.lose:
            message = 'YOU LOST'
            sound.playBug();
            break;
        default:
            throw new Error('error')
    }
    gameFinishBanner.showWithText(message);
})
gameFinishBanner.setClickListener(() => {
    game.start();
})