//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

//const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
*/
const numbers = [10, 13, 20, 25, 38, 35, 40];

console.log(`The array : ${numbers}`);
// let greaterthan25 = [];

// let i =0;
// while (i < numbers.length) {
//     if (numbers[i] >= 25) {
//         greaterthan25.push(numbers[i]);
        
//     }//if
//     i++;
    
// }//while


greaterthan25 = numbers.filter(function(num){
    return num >=25;
});//filter

console.log(`numbers that are greater than or equal to 25 :  ${greaterthan25}`);



/*
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
// let divisibleby5 = [];

// let j =0;
// while (i < numbers.length) {
//     if (numbers[j] % 5 ==0) {
//         divisibleby5.push(numbers[j]);
        
//     }//if
//     i++;
    
// }//while


divisibleby5 = numbers.filter(function(num){
    return num %5 == 0;
});//filter

console.log(`numbers that are divisible by 5 :  ${divisibleby5}`);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
*/

squared = numbers.map( function(num){
    return num * num ;
}
);//map

console.log(`each number squared :  ${squared}`);


/*
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
multipliedby2 = numbers.map( function(num){
    return num*2;
});

console.log(` multiply each of them by 2 : ${multipliedby2}`);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
*/
greaterthan20 = numbers.filter(function(num){
    return num >=20;
});//filter

console.log(`numbers that are greater than or equal to 20 :  ${greaterthan20}`);

squared2 = greaterthan20.map( function(num){
    return num * num ;
}
);//map

console.log(` the numbers squared : ${squared2}`);

/*
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

console.log( `the numbers that are divisible by 5 : ${divisibleby5}`);
multipliedby3 = divisibleby5.map( function(num){
    return num*3;
});

console.log(` multiply each of them by 3 : ${multipliedby3}`);

