[![Maintainability](https://api.codeclimate.com/v1/badges/bbbb83a4486c81a7f1e7/maintainability)](https://codeclimate.com/github/VladimirMastepanov/Brain-Games/maintainability)

## BrainGames – Console Math Puzzle Game

BrainGames is a collection of 5 mini-games designed to test your math skills and logical thinking. Each game presents a unique puzzle, whether it's calculating the greatest common divisor or determining if a number is prime. Perfect for quick mental workouts!

#### Games Included:
* **Greatest Common Divisor** – Find the greatest common divisor of two numbers.
* **Even or Odd** – Answer whether a number is even or odd.
* **Arithmetic Calculations** – Solve basic arithmetic expressions.
* **Missing Element in Progression** – Identify the missing number in an arithmetic progression.
* **Prime Number Check** – Determine if a number is prime.

#### Why This Project?
This project is designed to provide simple yet challenging math-based puzzles in a command-line interface. Each game helps to improve logical thinking, problem-solving skills, and understanding of mathematical concepts.

#### Installation
To run this project locally, you'll need *Node.js* installed. Follow these steps:

```
# Clone the repository
 $ git clone git@github.com:VladimirMastepanov/BrainGames.git

# Navigate to the project directory
 $ cd BrainGames

# Install dependencies
 $ npm install
```

#### Usage
To start any of the games, run the following commands in the terminal:

```
# Launch the "Even or Odd" game
 $ make brain-even
```
[![asciicast](https://asciinema.org/a/s6rDIVAasLUiUIlK9DIiWD8od.svg)](https://asciinema.org/a/s6rDIVAasLUiUIlK9DIiWD8od)

```
# Launch the "Arithmetic Calculations" game
 $ make brain-calc
 ```
[![asciicast](https://asciinema.org/a/T0Mkn6u5BtZSxeTWJMnSoADxA.svg)](https://asciinema.org/a/T0Mkn6u5BtZSxeTWJMnSoADxA)

```
# Launch the "Greatest Common Divisor" game
 $ make brain-gcd
 ```
 [![asciicast](https://asciinema.org/a/b48gyTXphHIjWRT2dPadlIdkN.svg)](https://asciinema.org/a/b48gyTXphHIjWRT2dPadlIdkN)

```
# Launch the "Progression Puzzle" game
 $ make brain-progression
 ```
[![asciicast](https://asciinema.org/a/ig2rQVg0Ly4jnXhX4OtyMpt1f.svg)](https://asciinema.org/a/ig2rQVg0Ly4jnXhX4OtyMpt1f)

```
# Launch the "Prime Number Check" game
 $ make brain-prime
```
[![asciicast](https://asciinema.org/a/UnkgtsXZKh9VRnyMJgt9H0yXP.svg)](https://asciinema.org/a/UnkgtsXZKh9VRnyMJgt9H0yXP)

#### Technologies Used
* **Node.js** – Runtime environment for executing JavaScript code.
* **readline-sync** – For handling user input in the console.
#### Development Tools
* **ESLint** *(Airbnb config)* – For maintaining consistent code quality.