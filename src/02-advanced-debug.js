console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()


function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoeSize;

  // Find the player with the largest shoe size
  for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const playerName in players) {
          const player = players[playerName];
          if (player.shoe > largestShoeSize) {
              largestShoeSize = player.shoe;
              playerWithLargestShoeSize = player;
              debugger;
          }
      }
  }

  // Return the number of rebounds associated with the player that has the largest shoe size
  if (playerWithLargestShoeSize) {
      return playerWithLargestShoeSize.rebounds;
  } else {
      return "No player found";
  }
}
// Execute the function and use debugger
debugger;
const rebounds = bigShoeRebounds();
console.log(rebounds); // Output: 19
