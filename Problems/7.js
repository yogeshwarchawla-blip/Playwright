let arr = [7, 3, 9, 1, 6];
let smaleest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smaleest) {
        smaleest = arr[i]
    }
}
console.log(smaleest);