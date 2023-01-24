let num = Math.floor(Math.random() * 101);
let guess;
let attempts = 0;
//console.log(num);
while (guess != num) {
  guess = prompt("Guess the number between 1 to 100");
  guess = Number.parseInt(guess);
  if (num == guess) {

    console.log("Your Guess is Correct");

  }
  else if (num < guess) {
    console.log("Your Guess is Bigger than the actual number");
  }
  else {
    console.log("Your Guess is Smaller than the actual number");
  }
  a = attempts++;
}
// if user guess the no. in first attempt in that case control won't jump into the loop so this if condition will display msg for user

if (attempts <= 0) {
  console.log("Your Guess is Correct");
  let count = attempts + 1
  console.log(count + "attempts");
}
else {
  console.log(attempts + "attempts");

}
