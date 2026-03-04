// Closures

function abc() {
    let a = 10;
    return function () {
        console.log(a);
    }
}

let myFunc = abc();

// myFunc(); 


// Encapsulation

// function createCounter() {
//     let count = 0;
//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         },
//         getCount: function () {
//             return count;
//         }
//     };     
// }

// let counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// console.log(counter.getCount()); // 1

function clickLimiter () {
    let clickCount = 0;
    return function () {
        if (clickCount < 5) {
            clickCount++;
            console.log(`Button clicked ${clickCount} times`);
        } else {
            console.log('Click limit reached');
        }
    }
}

let limitedClick = clickLimiter();

// Simulating button clicks
limitedClick(); // Button clicked 1 times
limitedClick(); // Button clicked 2 times
limitedClick(); // Button clicked 3 times
limitedClick(); // Button clicked 4 times
limitedClick(); // Button clicked 5 times
limitedClick(); // Click limit reached