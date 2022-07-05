const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

// creating an <ul> parent which will contain the <li>s related to the team games extracted from warriorsGames
const ulParent = document.createElement("ul");

for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const gameLi = document.createElement("li");
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam} `;
<<<<<<< HEAD
=======
  //extracting scores infos from warriosGames to add them in our <li>s
>>>>>>> b1f0974d8daa328e0b7ee9d45be182a4eb606594

  //extracting scores infos from warriosGames to add them in our <li>s
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }

  //a green background-color will be applied whenever warriors wins a game
  //we will isolate the objects related to warriors, searching for 'Golden State' team
  //after that, we check whether isWinner in that object was set to true or false. If true, the .winner class proprieties apply.
  const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? "win" : "loss");
  console.log(warriors);
  gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
