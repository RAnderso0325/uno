# UNO

## Technical Requirements:
* Game is playable    
* Game is 2-player    
* Game is winnable    
* Winner is displayed 
* Has directions - how to play    
* Deployed on Github Pages    
* Long files appropriately split up   
* DRY Code    
* Draw detected (if applicable)
* Buttons or keyboard events work   
* It is winnable and detects such a condition accurately  
* Winner is congratulated (without alerts), game generally stops until it is reset in some way    
* Explanations included for anything that isn't abundantly clear. At * least in a README file if not directly inside the game itself.   
* Github used appropriately with commits
* Functions that are present are named and used logically, and there are few if any missed opportunities for DRYer code by using a function.

## Technologies Used
* jQuery
* Bootstrap

## Approach Taken
1. I started by finding the number of cards in a typical uno deck and adding all of the cards to a card deck array in its own js file (there are 116 cards in my deck)
2. I then added a js file for card-specific logic and went through that file and the app file and sketched out, with comments and console.logs, what each card-specific function would need to do and inked the functions in the appropriate places
3. Then I made the shuffle deck logic, which uses a Math.random function, and created the deal hand logic in addition to appending the player hands to the board so that I could see what's happening on the board. 
4. Then I added the logic for creating the discard pile to have the initial card to play against and hid all hands but the player hand in play.
5. Once the play card function worked for number cards, I started adding card-specific functionality for skip card and reverse card using the player turn logic. 
6. Once the skip, reverse, and draw two cards were working in game play, I tackled the wild card and wild card draw four. 
7. After all of the cards worked, I added a win function with win conditions.
8. Lastly, I added functionality for user input number of players and instructions. 

## Issues/Challenges
* Modals were really challenging for me to figure out, but I used a lot of them so I was really happy when I got them to work.
* The add player part was challenging as well to get the modal to work and take user input to add players to an array and get the modal to display and add only the number of players that the user wanted to add
* It was also challenging to get the card-specific logic to work when that card was the first in the discard pile.

## Next Steps
* Add a nav bar to see instructions and card logic during game
* Add high scores and player scores with option to begin a new game or reset completely (adding to player scores)