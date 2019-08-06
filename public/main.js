class Team {
    constructor(name, team, teamNum, id) {
        this.name = name;
        this.score = 0;
        this.teamNum = teamNum;
        this.id = id;
        this.teamClass = document.querySelector(team);
    }

    resetScore = () => {
        this.score = 0;
        this.teamClass.querySelector('#team-score').textContent = this.score;   
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
        this.score++;
        this.teamClass.querySelector('#team-score').textContent = this.score;
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



const main = () => {}


document.addEventListener('DOMContentLoaded', main);