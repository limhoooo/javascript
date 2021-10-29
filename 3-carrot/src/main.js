'use strict';
import Popup from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
    .gameDuration(5)
    .carrotCount(5)
    .bugCount(5)
    .build()
game.setGameStopListener((reason) => {
    let message;
    switch (reason) {
        case 'cancel':
            message = 'REPLAY'
            break;
        case 'win':
            message = 'YOU WIN'
            break;
        case 'lose':
            message = 'YOU LOST'
            break;
        default:
            throw new Error('error')
    }
    gameFinishBanner.showWithText(message);
})
gameFinishBanner.setClickListener(() => {
    game.start();
})