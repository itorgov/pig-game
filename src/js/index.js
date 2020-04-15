"use strict";

import Game from './models/Game';
import * as gameView from './views/gameView';
import {timeout} from './helpers';

let game;

const init = () => {
    game = new Game(100, 'Player 1', 'Player 2');

    addEventListeners();
};

const openRules = () => {
    gameView.showRules();
};

const closeRules = () => {
    gameView.hideRules();
};

const startNewGame = () => {
    game.start();

    game.getPlayers().forEach(player => {
        gameView.resetPlayerPanel(player.id);
        gameView.setName(player.id, player.name);
        gameView.updatePlayerScore(player.id, player.score);
        gameView.updatePlayerCurrentScore(player.id, player.currentScore);

        if (player.isActive()) {
            gameView.setPlayerActive(player.id);
        }
    });

    gameView.hideOpenRulesButtons();
    gameView.showPlayButtons();
};

const rollDice = async () => {
    const dice = game.roll();

    gameView.showDice(dice);

    if (dice === 1) {
        gameView.disablePlayButtons();

        // Show to the current player the dice with 1 for two seconds before the next player's turn.
        await timeout(2000);
        gameView.hideDice();

        // Switch active user.
        game.getPlayers().forEach(player => {
            gameView.resetPlayerPanel(player.id);

            if (player.isActive()) {
                gameView.setPlayerActive(player.id);
            }
        });

        gameView.enablePlayButtons();
    }

    game.getPlayers().forEach(player => {
        gameView.updatePlayerCurrentScore(player.id, player.currentScore);
    });
};

const holdCurrentScore = () => {
    game.hold();

    game.getPlayers().forEach(player => {
        gameView.resetPlayerPanel(player.id);

        if (player.isActive()) {
            gameView.setPlayerActive(player.id);
        }

        if (player.isWinner()) {
            gameView.setPlayerWinner(player.id);
        }

        gameView.updatePlayerScore(player.id, player.score);
        gameView.updatePlayerCurrentScore(player.id, player.currentScore);
    });

    gameView.hideDice();

    if (!game.isRunning()) {
        gameView.hidePlayButtons();
        gameView.showOpenRulesButtons();
    }
};

const addEventListeners = () => {
    const domNodes = gameView.getDomNodes();

    domNodes.openRulesButton.addEventListener('click', openRules);
    domNodes.closeRulesButton.addEventListener('click', closeRules);
    domNodes.newGameButton.addEventListener('click', startNewGame);
    domNodes.rollButton.addEventListener('click', rollDice);
    domNodes.holdButton.addEventListener('click', holdCurrentScore);
};

init();