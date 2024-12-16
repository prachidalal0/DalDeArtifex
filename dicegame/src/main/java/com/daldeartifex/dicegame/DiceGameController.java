package com.daldeartifex.dicegame;

import java.util.Arrays;
import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests only from localhost:3000
public class DiceGameController {

    // Handle input for rolling a dice poker game
    @GetMapping("/roll-dice")  // Changed endpoint to /roll-dice
    public String rollDice(@RequestParam(defaultValue = "5") int numOfDice) {
        if (numOfDice < 2) {
            return "Error: You must roll at least 2 dice.";
        }

        // Roll the dice
        Random rand = new Random();
        int[] diceRolls = new int[numOfDice];
        for (int i = 0; i < numOfDice; i++) {
            diceRolls[i] = rand.nextInt(6) + 1; // Roll a dice (values from 1 to 6)
        }

        // Sort the dice rolls to help determine the poker hand
        Arrays.sort(diceRolls);

        // Determine the best poker hand (for simplicity, we'll just check for Full House)
        String hand = getPokerHand(diceRolls);

        // Build the result message
        StringBuilder result = new StringBuilder();
        result.append("You rolled: ");
        for (int roll : diceRolls) {
            result.append(roll).append(" ");
        }
        result.append("\nHand: ").append(hand);

        return result.toString();
    }

    private String getPokerHand(int[] diceRolls) {
        // A simple version of dice poker hand recognition (Full House check)
        if (diceRolls[0] == diceRolls[1] && diceRolls[1] == diceRolls[2] && diceRolls[3] == diceRolls[4]) {
            return "Four of a Kind";
        }
        if (diceRolls[0] == diceRolls[1] && diceRolls[2] == diceRolls[3] && diceRolls[3] == diceRolls[4]) {
            return "Full House";
        }
        return "No Hand"; // For simplicity, we can expand this with more poker hands
    }
}
