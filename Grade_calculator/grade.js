
//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

// A: 90-100

//B: 80-89

// C: 70-79

//D: 60-69

// F: 0-59
let score = 65;
if (score >= 90 && score <= 100) {
    console.log("grade A")
} else if (score >= 80 && score <= 89) {
    console.log("grade b")
} else if (score >= 70 && score <= 79) {
    console.log("grade c")
}
else if (score >= 60 && score <= 69) {
    console.log("grade d")
}
else {
    console.log("grade f")
}
