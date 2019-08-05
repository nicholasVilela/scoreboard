const team1Input = document.querySelector('.team-1-input')
let team1Name = document.querySelector('.team-1-name')

const team2Input = document.querySelector('.team-2-input')
let team2Name = document.querySelector('.team-2-name')

const team1Add = document.querySelector('.team-1-add-1-button')
const team2Add = document.querySelector('.team-2-add-1-button')

const team1Sub = document.querySelector('.team-1-subtract-1-button')
const team2Sub = document.querySelector('.team-2-subtract-1-button')

const updateTeam1Btn = document.querySelector('.update-team-1-name')
const updateTeam2Btn = document.querySelector('.update-team-2-name')

let team1Score = document.querySelector('.team-1-score')
let team2Score = document.querySelector('.team-2-score')

let team1Counter = 0
let team2Counter = 0

const updateTeamName = (team) => {
  if (team == 2) {
    team2Name.innerHTML = team2Input.value
  }
  else {
    team1Name.innerHTML = team1Input.value
  }
}

const subScore = (team) => {
  if (team == 2) {
    if(team2Counter > 0) {
      team2Counter -= 1
      team2Score.innerHTML = team2Counter
    }
    else {
      team2Score.innerHTML = 0
    }   
  }
  else {
    if (team1Counter > 0) {
      team1Counter -= 1
      team1Score.innerHTML = team1Counter
    }
    else {
      team1Score.innerHTML = 0
    }
  }
}

const addScore = (team) => {
  if (team == 2){
    team2Counter += 1
    team2Score.innerHTML = team2Counter
  }
  else {
    team1Counter += 1
    team1Score.innerHTML = team1Counter
  }
}

document.addEventListener('DOMContentLoaded', ()=>{})