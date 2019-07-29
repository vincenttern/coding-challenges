/* John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 
103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
    Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw 
    (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average 
    winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

const johnAvgScore = (116 + 94 + 123) / 3;
const mikeAvgScore = (116 + 94 + 123) / 3;
const maryAvgScore = (116 + 94 + 123) / 3;
let sameAvgScore;

if (johnAvgScore > mikeAvgScore && maryAvgScore) {
  console.log('John team average a higher score. With an average score of: ', johnAvgScore);
} else if (mikeAvgScore > johnAvgScore && maryAvgScore) {
  console.log('Mike team average a higher score. With an average score of: ', mikeAvgScore);
} else if (maryAvgScore > johnAvgScore && mikeAvgScore) {
  console.log('Mary team average a higher score. With an average score of: ', maryAvgScore);
} else if (johnAvgScore === mikeAvgScore && johnAvgScore === maryAvgScore) {
  sameAvgScore = johnAvgScore;
  console.log('John, Mike, Mary have equal team average score of: ', sameAvgScore);
}
