"use strict";

import '../../sass/main.scss';

const domNodes = {
    panelOf1Player: document.querySelector('.js__panel--1'),
    nameOf1Player: document.querySelector('.js__name--1'),
    scoreOf1Player: document.querySelector('.js__score--1'),
    currentScoreOf1Player: document.querySelector('.js__current-score--1'),

    panelOf2Player: document.querySelector('.js__panel--2'),
    nameOf2Player: document.querySelector('.js__name--2'),
    scoreOf2Player: document.querySelector('.js__score--2'),
    currentScoreOf2Player: document.querySelector('.js__current-score--2'),

    newGameButton: document.querySelector('.js__btn--new-game'),
    rollButton: document.querySelector('.js__btn--roll'),
    holdButton: document.querySelector('.js__btn--hold'),
    openRulesButton: document.querySelector('.js__btn--open-rules'),
    closeRulesButton: document.querySelector('.js__btn--close-rules'),

    rules: document.querySelector('.js__rules'),
    dice: document.querySelector('.js__dice'),
    diceImage: document.querySelector('.js__dice use'),
};

export const getDomNodes = () => domNodes;

export const setName = (id, name) => {
    const nameNode = domNodes[`nameOf${id}Player`];

    if (nameNode) {
        nameNode.textContent = name;
    }
};

const getPlayerPanel = id => {
    return domNodes[`panelOf${id}Player`];
};

export const setPlayerActive = id => {
    const panelNode = getPlayerPanel(id);

    if (panelNode) {
        panelNode.classList.add('player__panel--active');
    }
};

export const setPlayerWinner = id => {
    const panelNode = getPlayerPanel(id);

    if (panelNode) {
        panelNode.classList.add('player__panel--winner');
    }

    setName(id, 'Winner!');
};

export const resetPlayerPanel = id => {
    const panelNode = getPlayerPanel(id);

    if (panelNode) {
        panelNode.classList.remove('player__panel--active');
        panelNode.classList.remove('player__panel--winner');
    }
};

export const updatePlayerScore = (id, score) => {
    const scoreNode = domNodes[`scoreOf${id}Player`];

    if (scoreNode) {
        scoreNode.textContent = score;
    }
};

export const updatePlayerCurrentScore = (id, currentScore) => {
    const currentScoreNode = domNodes[`currentScoreOf${id}Player`];

    if (currentScoreNode) {
        currentScoreNode.textContent = currentScore;
    }
};

export const showOpenRulesButtons = () => {
    domNodes.openRulesButton.classList.remove('d-none');
};

export const hideOpenRulesButtons = () => {
    domNodes.openRulesButton.classList.add('d-none');
};

export const showRules = () => {
    domNodes.rules.classList.remove('d-none');
};

export const hideRules = () => {
    domNodes.rules.classList.add('d-none');
};

export const showPlayButtons = () => {
    domNodes.rollButton.classList.remove('d-none');
    domNodes.holdButton.classList.remove('d-none');
};

export const hidePlayButtons = () => {
    domNodes.rollButton.classList.add('d-none');
    domNodes.holdButton.classList.add('d-none');
};

export const disablePlayButtons = () => {
    domNodes.rollButton.disabled = true;
    domNodes.holdButton.disabled = true;
};

export const enablePlayButtons = () => {
    domNodes.rollButton.disabled = false;
    domNodes.holdButton.disabled = false;
};

export const showDice = number => {
    domNodes.dice.classList.remove('d-none');
    domNodes.diceImage.setAttribute('href', `img/dice.svg#${number}`);
};

export const hideDice = () => {
    domNodes.dice.classList.add('d-none');
};
