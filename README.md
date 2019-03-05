# PIG DICE
## Description
This is a website for the game of pig dice; two players can play each other, and the first to reach 100 points wins.

## Setup instructions
Interested users can fork or clone this project from their github accounts.
* On your browser, login to your github account and search koros99/pig-dice
* On the top right corner, click fork.
* Alternatively, you can use the clone option on the green button.
* Users can view the live website through https://koros99.github.io/pig-dice

## Pre-requisites
1. A github account.
2. Git.

## BDD
|   Behavior   | Outcome    |
| :------------- | :------------- |
| Player rolls any number between two and six    | Player gets a corresponding score value for each number    |
| Player consecutively rolls any numbers between two and six in one round   | Player gets a turn score equal to the total of each roll value, for that round.   |
| Player Rolls 1     | Turn score for that round equals zero. Player loses any other scores they had scored for that round.      |
| Player Holds   | Player scores a round score equal to the sum of each roll value. Play switches to the next player.   |
| Player scores a total equal to or greater than 100  | Player wins the game.   |

## Technologies used
1. HTML.
2. CSS.
3. Javascript.
4. Bootstrap.
5. Jquery.

## Author and Contact Information
By Victor Kilel, Moringa prep student. Email: vickiekross99@gmail.com

## License
Licensed under the MIT License. Copyright (c) 2019 Victor Kilel.
