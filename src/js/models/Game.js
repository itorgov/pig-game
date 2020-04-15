"use strict";

import Player from "./Player";

export default class Game {
    constructor(finalScore = 100, firstPlayerName, secondPlayerName) {
        this.finalScore = finalScore;
        this.players = [
            new Player('1', firstPlayerName),
            new Player('2', secondPlayerName),
        ];
        this.currentPlayer = null;
        this.running = false;
    }

    start() {
        this.players.forEach(player => {
            player.resetScore();
            player.resetCurrentScore();
            player.setInactive();
            player.setNotWinner();
        });

        this.currentPlayer = this.players[0];
        this.currentPlayer.setActive();
        this.running = true;
    }

    finish() {
        this.currentPlayer.setWinner();
        this.running = false;
    }

    roll() {
        this.abortIfNotRunning();

        const dice = Math.floor(Math.random() * 6) + 1;

        if (dice === 1) {
            this.currentPlayer.resetCurrentScore();
            this.nextPlayer();
        } else {
            this.currentPlayer.addToCurrentScore(dice);
        }

        return dice;
    }

    hold() {
        this.abortIfNotRunning();

        this.currentPlayer.holdCurrentScore();

        if (this.currentPlayer.score >= this.finalScore) {
            this.finish();
            return;
        }

        this.nextPlayer();
    }

    nextPlayer() {
        this.abortIfNotRunning();

        this.currentPlayer.setInactive();
        this.currentPlayer = this.currentPlayer.id === '1' ? this.players[1] : this.players[0];
        this.currentPlayer.setActive();
    }

    abortIfNotRunning() {
        if (!this.running) {
            throw new Error('The game is not running!');
        }
    }

    isRunning() {
        return this.running;
    }

    getPlayers() {
        return this.players;
    }
}