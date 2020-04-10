# Pig

## About

Pig is a simple dice game that I developed with "vanilla" JavaScript and CSS3. 

The rules of this game is quiet simple.
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

## Motivation

I developed it just for fun when I was playing with manipulating DOM directly.
Also, in this project I tried classes those introduced in JavaScript ES6.

## Installation

This game built without CSS preprocessor and any JavaScript Bundler.
So, if you want run this game on your local machine then just open the `index.html` file in you browser and it will work.
There is only one issue with this way - SVG icons won't work.
To make them work you have to run this game on a web server.
For example, you can use [live-server](https://www.npmjs.com/package/live-server).
Just install it globally (if you haven't done it yet) :

    npm install -g live-server

Then just run the game by running this command in the root folder of this project:

    npm start

The game will opened at http://127.0.0.1:8080 in your default browser.

## Authors

* [**Ivan Torgov**](https://itorgov.com)

## License

This game is licensed under the [MIT](https://github.com/itorgov/pig-game/blob/master/LICENSE) license.  
Copyright &copy; 2020, Ivan Torgov.
