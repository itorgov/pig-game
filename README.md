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
Also, in this project I used classes and modules those introduced in JavaScript ES6.

## Demo

You can play this game on my web server.
Just open [pig-game.itorgov.com](https://pig-game.itorgov.com) in your browser.

## Installation

### Web server

For installation just copy all files from the `dist` directory to your web server.

### Local machine

You can't just open the `index.html` file in your browser because SVG icons won't work.
So, if you want run this game on your local machine and you don't have an installed web server on it then you can use the webpack-dev-server.

Run the game by running these commands in the root folder of this project:

    yarn
    yarn start

The game will opened at http://localhost:8080 in your default browser.

## Authors

* [**Ivan Torgov**](https://itorgov.com)

## License

This game is licensed under the [MIT](https://github.com/itorgov/pig-game/blob/master/LICENSE) license.  
Copyright &copy; 2020, Ivan Torgov.