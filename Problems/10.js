// Find the sum of only even numbers.
let arr = [2, 5, 8, 3, 6]
sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0)
        sum = sum + arr[i]
}
console.log(sum);