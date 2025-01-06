class DiceGame {
  constructor() {
      this.diceRollsOrig = [0, 0, 0, 0];
      this.diceRolls = [0, 0, 0, 0];
      this.twoKind = false;
      this.threeKind = false;
      this.fourKind = false;
      this.twoPair = false;
      this.straight = false;
      this.finalVerdict = '';
  }

  // Getter and Setter methods
  getTwoKind() { return this.twoKind; }
  setTwoKind(newTwoKind) { this.twoKind = newTwoKind; }

  getThreeKind() { return this.threeKind; }
  setThreeKind(newThreeKind) { this.threeKind = newThreeKind; }

  getFourKind() { return this.fourKind; }
  setFourKind(newFourKind) { this.fourKind = newFourKind; }

  getTwoPair() { return this.twoPair; }
  setTwoPair(newTwoPair) { this.twoPair = newTwoPair; }

  getStraight() { return this.straight; }
  setStraight(newStraight) { this.straight = newStraight; }

  getFinalVerdict() { return this.finalVerdict; }
  setFinalVerdict(newFinalVerdict) { this.finalVerdict = newFinalVerdict; }

  // Generate random dice values
  setDice() {
      let dice = [];
      for (let i = 0; i < 4; i++) {
          dice.push(Math.floor(Math.random() * 6) + 1);
      }
      return dice;
  }

  // Print dice rolls
  print() {
      console.log(this.diceRolls.join(' ') + '     \n');
  }

  // Check if there is a 4-of-a-kind
  is4Kind() {
      this.diceRolls = [...this.diceRollsOrig].sort((a, b) => a - b);
      for (let i = 0; i < this.diceRolls.length - 3; i++) {
          if (this.diceRolls[i] === this.diceRolls[i + 1] && this.diceRolls[i] === this.diceRolls[i + 2] && this.diceRolls[i] === this.diceRolls[i + 3]) {
              this.setFinalVerdict('Is4Kind');
              this.setFourKind(true);
              return true;
          }
      }
      return false;
  }

  // Check if there is a 3-of-a-kind
  is3Kind() {
      this.diceRolls = [...this.diceRollsOrig].sort((a, b) => a - b);
      for (let i = 0; i < this.diceRolls.length - 2; i++) {
          if (this.diceRolls[i] === this.diceRolls[i + 1] && this.diceRolls[i] === this.diceRolls[i + 2]) {
              this.setFinalVerdict('Is3Kind');
              this.setThreeKind(true);
              return true;
          }
      }
      return false;
  }

  // Check if there is a 2-of-a-kind
  is2Kind() {
      this.diceRolls = [...this.diceRollsOrig].sort((a, b) => a - b);
      for (let i = 0; i < this.diceRolls.length - 1; i++) {
          if (this.diceRolls[i] === this.diceRolls[i + 1]) {
              this.setFinalVerdict('Is2Kind');
              this.setTwoKind(true);
              return true;
          }
      }
      return false;
  }

  // Check if there are two pairs
  is2Pair() {
      let firstPair = false;
      let secondPair = false;

      this.diceRolls = [...this.diceRollsOrig].sort((a, b) => a - b);
      for (let i = 0; i < this.diceRolls.length - 1; i++) {
          if (firstPair && secondPair) break;
          if (this.diceRolls[i] === this.diceRolls[i + 1]) {
              firstPair = true;
              for (let z = i + 2; z < this.diceRolls.length - 1; z++) {
                  if (this.diceRolls[z] === this.diceRolls[z + 1]) secondPair = true;
              }
          }
      }

      if (firstPair && secondPair) {
          this.setTwoPair(true);
          return true;
      }
      return false;
  }

  // Check if there is a straight
  isStraight() {
      let found = true;

      this.diceRolls = [...this.diceRollsOrig].sort((a, b) => a - b);

      for (let i = 0; i < this.diceRolls.length - 1; i++) {
          if (this.diceRolls[i + 1] !== this.diceRolls[i] + 1) {
              found = false;
              break;
          }
      }
      if (found) {
          this.setStraight(found);
      }
      return found;
  }

  // Remove duplicate hands, keeping only the highest hand
  deDupe() {
      if (this.getFourKind()) {
          this.setThreeKind(false);
          this.setTwoKind(false);
          this.setTwoPair(false);
      } else if (this.getThreeKind()) {
          this.setTwoKind(false);
      } else if (this.getTwoPair()) {
          this.setTwoKind(false);
      }
  }

  // Reset all hand values
  resetHands() {
      this.setTwoKind(false);
      this.setThreeKind(false);
      this.setFourKind(false);
      this.setTwoPair(false);
      this.setStraight(false);
  }

  // Simulate second round re-roll
  secondRound(numReroll) {
      if (numReroll === 0) {
          console.log('Nothing will be rerolled. Press enter to start a new game.');
          return;
      }
      let rerollIndexes = [];
      for (let i = 0; i < numReroll; i++) {
          rerollIndexes.push(prompt('Enter the index numbers (0 to 3) of the dice you wish to re-draw:').split(' ').map(Number));
      }

      rerollIndexes.flat().forEach(index => {
          this.diceRollsOrig[index] = Math.floor(Math.random() * 6) + 1;
      });
  }

  // Start the game
  startGame() {
      this.diceRollsOrig = this.setDice();
      this.diceRolls = [...this.diceRollsOrig];
      this.print();
  }
}

// Create new instance of DiceGame
let game = new DiceGame();
game.startGame();

// Example usage for second round reroll (prompts user for input)
game.secondRound(3); // Simulate re-rolling 3 dice



