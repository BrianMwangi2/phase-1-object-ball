console.log('Simple debugging example running.')
debugger

let x = 99
debugger
console.log(x)


// building nested functions
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return "Player not found";
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return "Player not found";
}

function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return game[teamKey].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            const players = game[teamKey].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return "Team not found";
}

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName];
        }
    }
    return "Player not found";
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return "Player not found";
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return "Player not found";
}

function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return game[teamKey].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            const players = game[teamKey].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return "Team not found";
}

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (playerName in players) {
            return players[playerName];
        }
    }
    return "Player not found";
}

// Example usage:
console.log(numPointsScored("Alan Anderson")); // Output: 22
console.log(shoeSize("Ben Gordon")); // Output: 15
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]
console.log(playerStats("Mason Plumlee")); // Output: { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 }
