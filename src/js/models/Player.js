"use strict";

export default class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.score = 0;
        this.currentScore = 0;
        this.active = false;
        this.winner = false;
    }

    resetScore() {
        this.score = 0;
    }

    addToCurrentScore(value) {
        this.currentScore += value;
    }

    resetCurrentScore() {
        this.currentScore = 0;
    }

    holdCurrentScore() {
        this.score += this.currentScore;
        this.resetCurrentScore();
    }

    setActive() {
        this.active = true;
    }

    setInactive() {
        this.active = false;
    }

    isActive() {
        return this.active;
    }

    setWinner() {
        this.winner = true;
    }

    setNotWinner() {
        this.winner = false;
    }

    isWinner() {
        return this.winner;
    }
}
