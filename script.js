// JavaScript Fundamentals :
// ▶︎ Task 2

function calculateTotalAndAverage(arr) {
    // Calculate the total sum using reduce mth .
    // acc = accumulated result , curr = current value .
    // initial value = 0 , by default reduce mth begins with the first element if there is no initial value selected but if it used on an empty array it will cause a type error , yes it will do an extra execution but it makes the code more effective and error free. 
    // reduce mth is used to call a function on each nonempty element of an array accumulatly and return single value , it deos not change the original array. 
    let totalSum = arr.reduce((acc, curr) => acc + curr , 0); 

    // Calculate the average by dividing the total sum by the length of the array
    let average = totalSum / arr.length;

    return [ totalSum , average ];
}

// Example usage:
// let [ totalSum , average ] = [...calculateTotalAndAverage([1, 2, 3, -1])];
// the reduce mth will begin with an initial value  => acc = 0 and sum it with the first element in the array curr = 1 ==> 0 + 1 = 1
// acc = 1 , curr = 2 ==> 1 + 2 = 3
// acc = 3 , curr = 3 ==> 3 + 3 = 6
// acc = 6 , curr = -1 ==> 6 + -1 = 5
// so totalSum  = 5
// and average = 1.25

// =================================================================



// ▶︎ Task 3

function removeDuplicates(arr) {
    // Create an empty object to store the unique values
    let uniqueValues = {};

    // Iterate through the array and add each value to the object as a property with a value of true
    for (e of arr) {
        uniqueValues[e] = true;
    }

    // Convert the object keys back to an array and return it
    return Object.keys(uniqueValues);
}
// Example usage:
// let array2 = ["Bethlehem", "Jerusalem", "Gaza", "Hebron", "Gaza", "Hebron"];
// let result2 = removeDuplicates(array2);
// Output: ['Bethlehem', 'Jerusalem', 'Gaza', 'Hebron']

//               *****************************

// another solution is to remove duplicates by using Set object 
let removeDuplicatesBySet = arr => Array.from( new Set (arr)) ;
