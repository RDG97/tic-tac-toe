//declare some global variables
let playerturn = 'x';
let score = ['e','e','e','e','e','e','e','e','e']
const app = document.getElementById('app')

//exciting isnt it?
function init() {
    buildBoard2();   
}

init();
// i used a settimeout so that this would run after the board is built
setTimeout(() => {
    isUp()
}, 100);

//this function builds the tic tac toe board

function buildBoard2() {
    createEl(app, 'div', '', 'container border', 'board')
    createEl(board, 'div', '', 'd-flex flex-row bg-dark flex-fill text-center p-1 w-auto h-auto', 'row1')
    createEl(board, 'div', '', 'd-flex flex-row bg-dark flex-fill text-center p-1 w-auto h-auto', 'row2')
    createEl(board, 'div', '', 'd-flex flex-row bg-dark flex-fill text-center p-1 w-auto h-auto', 'row3')
    createEl(row1, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box0' )
    createEl(row1, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box1' )
    createEl(row1, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box2' )
    createEl(row2, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box3' )
    createEl(row2, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box4' )
    createEl(row2, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box5' )
    createEl(row3, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box6' )
    createEl(row3, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box7' )
    createEl(row3, 'div', '', 'p-2 bg-light flex-fill p-4 border border-dark boxxy', 'box8' )
    createEl(board, 'div', '', 'text-warning', 'turnTrack')
}

// runs when you click a box, will change the text content to your teams symbol, then removes the event listener
function test() {
    if (playerturn === 'x') {
        this.textContent = 'x'
        playerturn = 'o'
        isUp()
        windConds()
        this.removeEventListener('click', test)
        this.removeEventListener('click', box0s)
        this.removeEventListener('click', box1s)
        this.removeEventListener('click', box2s)
        this.removeEventListener('click', box3s)
        this.removeEventListener('click', box4s)
        this.removeEventListener('click', box5s)
        this.removeEventListener('click', box6s)
        this.removeEventListener('click', box7s)
        this.removeEventListener('click', box8s)
        return playerturn
    } else if (playerturn === 'o') {
        this.textContent = 'o';
        playerturn = 'x'
        isUp()
        windConds()
        this.removeEventListener('click', test)
        this.removeEventListener('click', box0s)
        this.removeEventListener('click', box1s)
        this.removeEventListener('click', box2s)
        this.removeEventListener('click', box3s)
        this.removeEventListener('click', box4s)
        this.removeEventListener('click', box5s)
        this.removeEventListener('click', box6s)
        this.removeEventListener('click', box7s)
        this.removeEventListener('click', box8s)
        return playerturn
    }
}

//this function is ran when the game ends. it shows the reset button
function showReset() {
    const mResetB = document.createElement('input')
    mResetB.setAttribute('id','rBtn')
    mResetB.setAttribute('type','submit')
    mResetB.setAttribute('value','Reset')
    board.insertAdjacentElement('beforeend', mResetB)
    const rBtn = document.getElementById('rBtn')
    rBtn.addEventListener('click', reset)
}

//this function resets the board

function reset() {
    playerturn = 'x'
    box0.textContent = ''
    box1.textContent = ''
    box2.textContent = ''
    box3.textContent = ''
    box4.textContent = ''
    box5.textContent = ''
    box6.textContent = ''
    box7.textContent = ''
    box8.textContent = ''
    score = ['e','e','e','e','e','e','e','e','e']
    rBtn.style.display = 'none';
    turnTrack.textContent = playerturn + ' is up'
    
    box0.addEventListener('click', box0s)
    box0.addEventListener('click', test)
    box1.addEventListener('click', box1s)
    box1.addEventListener('click', test)
    box2.addEventListener('click', box2s)
    box2.addEventListener('click', test)
    box3.addEventListener('click', box3s)
    box3.addEventListener('click', test)
    box4.addEventListener('click', box4s)
    box4.addEventListener('click', test)
    box5.addEventListener('click', box5s)
    box5.addEventListener('click', test)
    box6.addEventListener('click', box6s)
    box6.addEventListener('click', test)
    box7.addEventListener('click', box7s)
    box7.addEventListener('click', test)
    box8.addEventListener('click', box8s)
    box8.addEventListener('click', test)
}

//will display whos turn it is

function isUp() {
    if (playerturn === 'x') {
        turnTrack.textContent = playerturn + ' is up'

    } else if (playerturn === 'o') {
        turnTrack.textContent = playerturn + ' is up'
    }
}

//adds all the event listeners for the squares
box0.addEventListener('click', box0s)
box0.addEventListener('click', test)
box1.addEventListener('click', box1s)
box1.addEventListener('click', test)
box2.addEventListener('click', box2s)
box2.addEventListener('click', test)
box3.addEventListener('click', box3s)
box3.addEventListener('click', test)
box4.addEventListener('click', box4s)
box4.addEventListener('click', test)
box5.addEventListener('click', box5s)
box5.addEventListener('click', test)
box6.addEventListener('click', box6s)
box6.addEventListener('click', test)
box7.addEventListener('click', box7s)
box7.addEventListener('click', test)
box8.addEventListener('click', box8s)
box8.addEventListener('click', test)

function setScore() {
    box0s()
    box1s()
    box2s()
    box3s()
    box4s()
    box5s()
    box6s()
    box7s()
    box8s()
}

function gameWonX() {
    turnTrack.textContent = 'GAMEOVER X WINS'
    box0.addEventListener('click', box0s)
    box0.removeEventListener('click', test)
    box1.removeEventListener('click', box1s)
    box1.removeEventListener('click', test)
    box2.removeEventListener('click', box2s)
    box2.removeEventListener('click', test)
    box3.removeEventListener('click', box3s)
    box3.removeEventListener('click', test)
    box4.removeEventListener('click', box4s)
    box4.removeEventListener('click', test)
    box5.removeEventListener('click', box5s)
    box5.removeEventListener('click', test)
    box6.removeEventListener('click', box6s)
    box6.removeEventListener('click', test)
    box7.removeEventListener('click', box7s)
    box7.removeEventListener('click', test)
    box8.removeEventListener('click', box8s)
    box8.removeEventListener('click', test)
    showReset()
}

function gameWonO() {
    turnTrack.textContent = 'GAMEOVER O WINS'
    box0.removeEventListener('click', test)
    box1.removeEventListener('click', box1s)
    box1.removeEventListener('click', test)
    box2.removeEventListener('click', box2s)
    box2.removeEventListener('click', test)
    box3.removeEventListener('click', box3s)
    box3.removeEventListener('click', test)
    box4.removeEventListener('click', box4s)
    box4.removeEventListener('click', test)
    box5.removeEventListener('click', box5s)
    box5.removeEventListener('click', test)
    box6.removeEventListener('click', box6s)
    box6.removeEventListener('click', test)
    box7.removeEventListener('click', box7s)
    box7.removeEventListener('click', test)
    box8.removeEventListener('click', box8s)
    box8.removeEventListener('click', test)
    showReset()
}

//if array = win run game won

function windConds () {
    if (score[0] === 'x' && score[1] === 'x' && score[2] === 'x') {
        gameWonX()
    } else if (score[0] === 'o' && score[1] === 'o' && score[2] === 'o') {
        gameWonO()
    }
    if (score[3] === 'x' && score[4] === 'x' && score[5] === 'x') {
        gameWonX()
    } else if (score[3] === 'o' && score[4] === 'o' && score[5] === 'o') {
        gameWonO()
    }
    if (score[6] === 'x' && score[7] === 'x' && score[8] === 'x') {
        gameWonX()
    } else if (score[6] === 'o' && score[7] === 'o' && score[8] === 'o') {
        gameWonO()
    }
    if (score[0] === 'x' && score[3] === 'x' && score[6] === 'x') {
        gameWonX()
    } else if (score[0] === 'o' && score[3] === 'o' && score[6] === 'o') {
        gameWonO()
    }
    if (score[1] === 'x' && score[4] === 'x' && score[7] === 'x') {
        gameWonX()
    } else if (score[1] === 'o' && score[4] === 'o' && score[7] === 'o') {
        gameWonO()
    }
    if (score[2] === 'x' && score[5] === 'x' && score[8] === 'x') {
        gameWonX()
    } else if (score[2] === 'o' && score[5] === 'o' && score[8] === 'o') {
        gameWonO()
    }
    if (score[0] === 'x' && score[4] === 'x' && score[8] === 'x') {
        gameWonX()
    } else if (score[0] === 'o' && score[4] === 'o' && score[8] === 'o') {
        gameWonO()
    }
    if (score[6] === 'x' && score[4] === 'x' && score[2] === 'x') {
        gameWonX()
    } else if (score[6] === 'o' && score[4] === 'o' && score[2] === 'o') {
        gameWonO()
    }
}

//these functions are ran on event listeners and will change the score in the score array

function box0s() {
    if (playerturn === 'x') {
        score[0] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[0] = 'o';
        return score
    }

}
function box1s() {
    if (playerturn === 'x') {
        score[1] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[1] = 'o';
        return score
    }
}
function box2s() {
    if (playerturn === 'x') {
        score[2] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[2] = 'o';
        return score
    }
}
function box3s() {
    if (playerturn === 'x') {
        score[3] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[3] = 'o';
        return score
    }
}
function box4s() {
    if (playerturn === 'x') {
        score[4] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[4] = 'o';
        return score
    }
}
function box5s() {
    if (playerturn === 'x') {
        score[5] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[5] = 'o';
        return score
    }
}
function box6s() {
    if (playerturn === 'x') {
        score[6] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[6] = 'o';
        return score
    }
}
function box7s() {
    if (playerturn === 'x') {
        score[7] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[7] = 'o';
        return score
    }
}
function box8s() {
    if (playerturn === 'x') {
        score[8] = 'x'
        return score
    } else if (playerturn === 'o') {
        score[8] = 'o';
        return score
    }
}
function noClick() {
        this.removeEventListener('click', test)
        this.removeEventListener('click', box0s)
        this.removeEventListener('click', box1s)
        this.removeEventListener('click', box2s)
        this.removeEventListener('click', box3s)
        this.removeEventListener('click', box4s)
        this.removeEventListener('click', box5s)
        this.removeEventListener('click', box6s)
        this.removeEventListener('click', box7s)
        this.removeEventListener('click', box8s)
}
function createEl(parentEl, tag, text, className, idName,) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    parentEl.appendChild(element)
}

