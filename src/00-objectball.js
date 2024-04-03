function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Example usage:
const game = gameObject();
console.log(game);

// Bonus Question
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints;

    for (const teamKey in game) {
        const players = game[teamKey].players;
        for (const playerName in players) {
            const player = players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }

    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let maxTeamPoints = 0;
    let winningTeamName;

    for (const teamKey in game) {
        let teamPoints = 0;
        const players = game[teamKey].players;
        for (const playerName in players) {
            teamPoints += players[playerName].points;
        }
        if (teamPoints > maxTeamPoints) {
            maxTeamPoints = teamPoints;
            winningTeamName = game[teamKey].teamName;
        }
    }

    return winningTeamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName;

    for (const teamKey in game) {
        const players = game[teamKey].players;
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
                playerWithLongestName = playerName;
            }
        }
    }

    return playerWithLongestName;
}

// Example usage:
console.log(mostPointsScored()); // Output: "Ben Gordon"
console.log(winningTeam()); // Output: "Charlotte Hornets"
console.log(playerWithLongestName()); // Output: "Brendan Haywood"


// super Bonus
function doesLongNameStealATon() {
    const game = gameObject();
    let longestNamePlayerSteals = 0;
    let mostStealsPlayerSteals = 0;

    // Find the player with the longest name and the player with the most steals
    for (const teamKey in game) {
        const players = game[teamKey].players;
        for (const playerName in players) {
            const player = players[playerName];
            if (playerName.length > longestNamePlayerSteals) {
                longestNamePlayerSteals = playerName.length;
            }
            if (player.steals > mostStealsPlayerSteals) {
                mostStealsPlayerSteals = player.steals;
            }
        }
    }

    return longestNamePlayerSteals === mostStealsPlayerSteals;
}

// Example usage:
console.log(doesLongNameStealATon()); // Output: false
