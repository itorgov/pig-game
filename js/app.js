"use strict";

class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.score = 0;
        this.currentScore = 0;
        this.domPanel = document.getElementById(`panel-${this.id}`);
        this.domName = document.getElementById(`name-${this.id}`);
        this.domScore = document.getElementById(`score-${this.id}`);
        this.domCurrentScore = document.getElementById(`current-${this.id}`);
    }

    setDefaultName() {
        this.setName(this.name);
    }

    setName(name) {
        this.domName.textContent = name;
    }

    active() {
        this.resetPanel();
        this.domPanel.classList.add('active');
    }

    winner() {
        this.resetPanel();
        this.setName('Winner!');
        this.domPanel.classList.add('winner');
    }

    resetPanel() {
        this.domPanel.classList.remove('active');
        this.domPanel.classList.remove('winner');
    }

    resetScore() {
        this.score = 0;
        this.updateScore();
    }

    updateScore() {
        this.domScore.textContent = this.score;
    }

    appendToCurrentScore(value) {
        this.currentScore += value;
        this.updateCurrentScore();
    }

    holdCurrentScore() {
        this.score += this.currentScore;
        this.updateScore();
        this.resetCurrentScore();
    }

    resetCurrentScore() {
        this.currentScore = 0;
        this.updateCurrentScore();
    }

    updateCurrentScore() {
        this.domCurrentScore.textContent = this.currentScore;
    }
}

class PigGame {
    constructor(finalScore = 100, namesOfPlayers = []) {
        this.domDice = document.getElementById('dice');
        this.domNewGameButton = document.getElementById('btn-new-game');
        this.domOpenRulesButton = document.getElementById('btn-open-rules');
        this.domCloseRulesButton = document.getElementById('btn-close-rules');
        this.domRollButton = document.getElementById('btn-roll');
        this.domHoldButton = document.getElementById('btn-hold');
        this.domRules = document.getElementById('rules');

        this.finalScore = finalScore;
        this.players = [];
        this.currentPlayer = null;

        for (let id in namesOfPlayers) {
            this.players[id] = new Player(id, namesOfPlayers[id]);
        }

        if (this.players.length < 2) {
            throw new Error('Not enough players!');
        }

        this.addListeners();
    }

    addListeners() {
        this.domNewGameButton.addEventListener('click', () => {
            this.start();
        });

        this.domOpenRulesButton.addEventListener('click', () => {
            this.showRules();
        });

        this.domCloseRulesButton.addEventListener('click', () => {
            this.hideRules();
        });

        this.domRollButton.addEventListener('click', () => {
            const dice = Math.floor(Math.random() * 6) + 1;

            this.showDice(dice);

            if (dice === 1) {
                this.disablePlayButtons();

                setTimeout(() => {
                    this.hideDice();
                    this.enablePlayButtons();
                    this.nextPlayer();
                }, 2000);

                return;
            }

            this.currentPlayer.appendToCurrentScore(dice);
        });

        this.domHoldButton.addEventListener('click', () => {
            this.currentPlayer.holdCurrentScore();

            if (this.currentPlayer.score >= this.finalScore) {
                this.finish();
                return;
            }

            this.hideDice();
            this.nextPlayer();
        });
    }

    start() {
        this.currentPlayer = null;

        for (let player of this.players) {
            player.setDefaultName();
            player.resetScore();
            player.resetCurrentScore();
            player.resetPanel();
        }

        this.hideOpenRulesButtons();
        this.showPlayButtons();
        this.nextPlayer();
    }

    showOpenRulesButtons() {
        this.domOpenRulesButton.classList.remove('d-none');
    }

    hideOpenRulesButtons() {
        this.domOpenRulesButton.classList.add('d-none');
    }

    showRules() {
        this.domRules.classList.remove('d-none');
    }

    hideRules() {
        this.domRules.classList.add('d-none');
    }

    finish() {
        this.currentPlayer.winner();
        this.hidePlayButtons();
        this.hideDice();
        this.showOpenRulesButtons();
    }

    nextPlayer() {
        if (this.currentPlayer === null) {
            this.currentPlayer = this.players[0];
        } else {
            this.currentPlayer.resetCurrentScore();
            this.currentPlayer.resetPanel();

            for (let i = 0; i < this.players.length; i++) {
                const next = i + 1;

                if (next === this.players.length) {
                    this.currentPlayer = this.players[0];
                    break;
                }

                if (this.players[i].id === this.currentPlayer.id) {
                    this.currentPlayer = this.players[next];
                    break;
                }
            }

        }

        this.currentPlayer.active();
    }

    showPlayButtons() {
        this.domRollButton.classList.remove('d-none');
        this.domHoldButton.classList.remove('d-none');
    }

    hidePlayButtons() {
        this.domRollButton.classList.add('d-none');
        this.domHoldButton.classList.add('d-none');
    }

    disablePlayButtons() {
        this.domRollButton.disabled = true;
        this.domHoldButton.disabled = true;
    }

    enablePlayButtons() {
        this.domRollButton.disabled = false;
        this.domHoldButton.disabled = false;
    }

    showDice(number) {
        this.domDice.classList.remove('d-none');
        this.domDice.src = `/img/dice-${number}.svg`;
    }

    hideDice() {
        this.domDice.classList.add('d-none');
    }
}

const players = ['Player 1', 'Player 2'];
new PigGame(100, players);
