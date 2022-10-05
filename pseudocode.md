Label boxes on board 0-8
Create an array with 9 indexes
Start with the array empty. Or maybe like
	Test {e,e,e,e,e,e,e,e,e} e for empty
When a player makes a move, change array index
	test {o,e,o,e,e,x,x,e,e}
Win conditions	 
	Example :
	If (test[0] === ‘o’ && test[1] === ‘o’ && test[2] === ‘o’) {
		gameWonO()
	}


Let playerTurn = ‘x’
	‘click’
	If (playerTurn === ‘x’) {
	box0.textContent = ‘x’
	} else if (playerTurn === ‘o’) {
	Box0.textcontent = ‘o’
	}
	

If X’s turn
	Display that its X’s turn
	Can only place X	⇐how to do this?   ‘Click’ if Xs turn text content x if Os turn content
	Set text content to X after clicked     
	(maybe show an x when hovering over square)
	After placed, push to array 
	Change to O’s turn (very similar function)

	If (box0.textcontent === ‘x’) {
	Test[0] = ‘x’
	Return test
	} else if (box1.textContent === ‘o’) {
	Test[0] = ‘o’
	Return test
	}

Append board after pressing game start button
reset()
	Playerturn = x
	Text content on buttons = none
	Score = [e,e,e,e,e,e,e,e,e]
Refactor and use this mans idea for dynamically creating functions https://github.com/Joshtdale/weather-app/blob/main/js/main.js
