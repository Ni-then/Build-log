// Filter : Array me se condition satisfy karne wale elements ko select karke ek NEW array banana.
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((ele) => {
    return ele > 2;
})
console.log(result)

// map : array ke har ele ko transform krke new array return krta hai 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEvenOrOdd(array) {
    let even = []
    let odd = []
    array.map(ele => {
        if (ele % 2 == 0) {
            even.push(ele)
        } else {
            odd.push(ele)
        }
    }
    )
    console.log(even)
    console.log(odd)
}

checkEvenOrOdd(array)

let res = array.map((ele) => {
    return ele * 2;
})
console.log(res)
