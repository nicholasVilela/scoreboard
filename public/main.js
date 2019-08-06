let winCounter = document.querySelector('#wins')
const addBtn = document.querySelectorAll('#add-score')
const subBtn = document.querySelectorAll('#sub-score')
const updateNameBtn = document.querySelectorAll('#submit-name')

class Team {
    constructor(name, team, teamNum, id) {
        this.name = name;
        this.score = 0;
        this.teamNum = teamNum;
        this.id = id;
        this.wins = 0
        this.teamClass = document.querySelector(team);
    }

    resetScore = () => {
        this.score = 0;
        this.teamClass.querySelector('#team-score').textContent = this.score;
        enableOrDisable('enable');
    }

    changeName = () => {
        const nameInput = this.teamClass.querySelector('#team-name-input').value;

        if (nameInput != '') {
            this.name = nameInput;           
        }
        else {
            window.alert('Please enter a value into the field.');
        }

        this.teamClass.querySelector('#team-name').textContent = this.name;
    }

    add1Score = () => {
        if (this.score === 20) {
            this.teamClass.querySelector('#team-score').textContent = 'You Win!'          
            this.addWin()
        }
        else {
            this.score++;
            this.teamClass.querySelector('#team-score').textContent = this.score;
        }  
    }

    addWin = () => {
        this.wins += 1
        winCounter.textContent = `Team Wins: ${this.wins}`
        enableOrDisable();
    }

    sub1Score = () => {
        if (this.score > 0) {
            this.score--;
        }
        else {
            this.score = 0;
        }
        this.teamClass.querySelector('#team-score').textContent = this.score;     
    }
}

let Team1 = new Team('Team1', '#team-1-container', '1', '3');
let Team2 = new Team('Team2', '#team-2-container', '2', '2');
const Teams = [Team1, Team2];

const resetGame = () => {
    Teams.map((team) => team.resetScore());
    Teams.map((team) => team.teamClass.querySelector('#team-name-input').value = '');
    Teams.map((team) => {
        team.teamClass.querySelector('#team-name').textContent = `Team ${team.teamNum}`
    })
}

const disableAll = () => {
    addBtn.forEach((btn) => {
        btn.disabled = true;
    })

    subBtn.forEach((btn) => {
        btn.disabled = true;
    })

    updateNameBtn.forEach((btn) => {
        btn.disabled = true;
    })
}

const enableOrDisable = (x) => {
    addBtn.forEach((btn) => {
        if (x == 'enable') {
            btn.disabled = false;
        }
        else {
            btn.disabled = true;
        }
    })
    subBtn.forEach((btn) => {
        if (x == 'enable') {
            btn.disabled = false;
        }
        else {
            btn.disabled = true;
        }
    })
    updateNameBtn.forEach((btn) => {
        if (x == 'enable') {
            btn.disabled = false;
        }
        else {
            btn.disabled = true;
        }
    })
}

const enableAll = () => {
    addBtn.forEach((btn) => {
        btn.disabled = true;
    })

    subBtn.forEach((btn) => {
        btn.disabled = true;
    })

    updateNameBtn.forEach((btn) => {
        btn.disabled = true;
    })
}

const updateName = (teamId) => {
    Teams.forEach((team) => {
        if(team.id % teamId == 0) {
            team.changeName();
        }
    });
}

const subScore = (teamId) => {
    Teams.forEach((team) => {
        if (team.id % teamId == 0){
            team.sub1Score();
        }
    })
}

const addScore = (teamId) => {
    Teams.forEach((team) => {
       if ( team.id % teamId == 0) {
           team.add1Score();
       }
    })
}



const main = () => {
}
document.addEventListener('DOMContentLoaded', main);