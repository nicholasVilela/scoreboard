class Team {
    constructor(name, team, teamNum) {
        this.name = name;
        this.score = 0;
        this.teamNum = teamNum;
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
        this.score--;
        this.teamClass.querySelector('#team-score').textContent = this.score;
    }
}

let Team1 = new Team('Team1', '#team-1-container', '3');
let Team2 = new Team('Team2', '#team-2-container', '2');
const Teams = [Team1, Team2];

const resetGame = () => {
    Teams.map((team) => team.resetScore());
    Team1.teamClass.querySelector("#team-name").textContent = 'Team 1';
    Team2.teamClass.querySelector("#team-name").textContent = 'Team 2';
}

const updateName = (teamNumber) => {
    let filteredTeam = Teams.filter((team) => team.teamNum % teamNumber == 0);
    filteredTeam.map((team) => team.changeName());
}

const subScore = (teamNumber) => {
    let filteredTeam = Teams.filter((team) => team.teamNum % teamNumber == 0);
    filteredTeam.map((team) => team.sub1Score());
}

const addScore = (teamNumber) => {
    let filteredTeam = Teams.filter((team) => team.teamNum % teamNumber == 0);
    filteredTeam.map((team) => team.add1Score());
}



const main = () => {}


document.addEventListener('DOMContentLoaded', main);