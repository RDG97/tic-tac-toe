let playerturn = 'x';
let score = ['e','e','e','e','e','e','e','e','e']
const app = document.getElementById('app')

function init() {
    buildBoard();   
}

init();

setTimeout(() => {
    isUp()
}, 100);

function buildBoard() {
    const mBoard = document.createElement('div');
    const mRow1 = document.createElement('div');
    const mRow2 = document.createElement('div');
    const mRow3 = document.createElement('div');
    const mBox0 = document.createElement('div');
    const mBox1 = document.createElement('div');
    const mBox2 = document.createElement('div');
    const mBox3 = document.createElement('div');
    const mBox4 = document.createElement('div');
    const mBox5 = document.createElement('div');
    const mBox6 = document.createElement('div');
    const mBox7 = document.createElement('div');
    const mBox8 = document.createElement('div');
    const mTurnTrack = document.createElement('div')
    mBoard.setAttribute('class','container border')
    mBoard.setAttribute('id','board')
    mRow1.setAttribute('class','d-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto')
    mRow2.setAttribute('class','d-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto')
    mRow3.setAttribute('class','d-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto')
    mRow1.setAttribute('id','row1')
    mRow2.setAttribute('id','row2')
    mRow3.setAttribute('id','row3')
    mBox0.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox1.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox2.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox3.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox4.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox5.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox6.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox7.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox8.setAttribute('class','p-2 bg-danger flex-fill p-4 border border-dark')
    mBox0.setAttribute('id','box0')
    mBox1.setAttribute('id','box1')
    mBox2.setAttribute('id','box2')
    mBox3.setAttribute('id','box3')
    mBox4.setAttribute('id','box4')
    mBox5.setAttribute('id','box5')
    mBox6.setAttribute('id','box6')
    mBox7.setAttribute('id','box7')
    mBox8.setAttribute('id','box8')
    mTurnTrack.setAttribute('id','turnTrack')
    const app = document.getElementById('app')
    app.insertAdjacentElement("afterbegin", mBoard)
    const board = document.getElementById('board')
    board.insertAdjacentElement("afterbegin", mRow1)
    board.insertAdjacentElement("afterbegin", mRow2)
    board.insertAdjacentElement("afterbegin", mRow3)
    const row1 = document.getElementById('row1')
    const row2 = document.getElementById('row2')
    const row3 = document.getElementById('row3')
    row1.insertAdjacentElement("afterbegin", mBox8)
    row1.insertAdjacentElement("afterbegin", mBox7)
    row1.insertAdjacentElement("afterbegin", mBox6)
    row2.insertAdjacentElement("afterbegin", mBox5)
    row2.insertAdjacentElement("afterbegin", mBox4)
    row2.insertAdjacentElement("afterbegin", mBox3)
    row3.insertAdjacentElement("afterbegin", mBox2)
    row3.insertAdjacentElement("afterbegin", mBox1)
    row3.insertAdjacentElement("afterbegin", mBox0)
    board.insertAdjacentElement('beforeend', mTurnTrack)
}
const box0 = document.getElementById('box0')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const turnTrack = document.getElementById('turnTrack')

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

function showReset() {
    const mResetB = document.createElement('input')
    mResetB.setAttribute('id','rBtn')
    mResetB.setAttribute('type','submit')
    mResetB.setAttribute('value','Reset')
    board.insertAdjacentElement('beforeend', mResetB)
    const rBtn = document.getElementById('rBtn')
    rBtn.addEventListener('click', reset)
}

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

function isUp() {
    if (playerturn === 'x') {
        turnTrack.textContent = playerturn + ' is up'

    } else if (playerturn === 'o') {
        turnTrack.textContent = playerturn + ' is up'
    }
}


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
