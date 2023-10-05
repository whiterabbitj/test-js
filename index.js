// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");
const playersData = data.getPlayers();
/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */
 // Your code
function outputPlayers (players) {
    return players.map((player, index) => `PLAYER ${index} 
NAME: ${player.name} 
LASTNAME: ${player.lastname}
POSITION: ${player.position}`).join('\n\n');
}
console.log(outputPlayers(playersData));

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */
// Your code
function logNamesOrderedByLength (players) {
    return players
        .map(player => player.name)
        .sort((a, b) => b.length - a.length);
}
console.log(logNamesOrderedByLength(playersData));

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average
 * Output example -> Goals per match: 2.19
 */
// Your code
function calculateAverageGoals(players) {
    return players
       .map(player => player.scoringChance / 100)
       .reduce((sum, chance) => sum + chance).toFixed(2);
}
console.log(`Goals per match: ${calculateAverageGoals(playersData)}`)

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */
// Your code
function findPlayerPosition(players,playerName) {
    const player = players.find(player => player.name === playerName);
    return (player
        ? `${playerName}'s position is ${player.position}`
        : `Player with name ${playerName} not found.`
    );
}
console.log(findPlayerPosition(playersData, "Pierre-Emerick"));

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

function splitAndMatch(players) {
    // randomize the team and split it
    const [teamA, teamB] = players.sort(() => Math.random() - 0.5)
        .reduce((teams, player, index) => (teams[index % 2]
                .push(player), teams), [[], []]
    );
    logMatchScore(teamA, 'A');
    logMatchScore(teamB, 'B');
}

function logMatchScore(team, teamLetter) {
    const averageScore = calculateAverageGoals(team);
    console.log(`Team ${teamLetter} has ${team.length} players. Score: ${Math.round(averageScore)}`);
}

splitAndMatch(playersData)
