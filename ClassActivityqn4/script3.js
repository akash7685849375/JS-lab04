for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // For 3's and 5's multiplies
    } else if (i % 3 === 0) {
        console.log("Fizz"); // For 3's multiplies
    } else if (i % 5 === 0) {
        console.log("Buzz"); // For 5's multiplies
    } else {
        console.log(i); // For all other numbers
    }
}