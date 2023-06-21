console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let numbers = 1; numbers <=100; numbers++) {
    if (numbers % 2 == 1){
        console.log(numbers);
    }else {
        
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let numbers = 1; numbers <=100; numbers++){
    if (numbers % 3 == 0 && numbers % 5 == 0){
        console.log("FIZZBUZZ");
    }else if (numbers % 5 == 0){
        console.log("BUZZ");
    }else if (numbers % 3 == 0){
        console.log("FIZZ");
    }else {
        console.log(numbers);
    }

    }

// Exercise 3 Section
console.log("Exercise 3:\n==========\n");
//let number =1;
//while(number <= 100){
    //if(number % 2 !== 0){
        //console.log(number);
    //}
    //number++;
//}

//let number = 1;
//do{
    //if(number % 2 !== 0){
       // console.log(number);
    //}
    //number++
//}while(number <= 100);

// let numbers = 1;
// while (numbers <= 100){
//     if (numbers % 3 == 0 && numbers % 5 == 0){
//         console.log("FIZZBUZZ");
//     }else if (numbers % 5 == 0){
//         console.log("BUZZ");
//     }else if (numbers % 3 == 0){
//         console.log("FIZZ");
//     }else {
//         console.log(numbers);
//     }
//     numbers++
// }

let numbers = 1;
do{
    if (numbers % 3 == 0 && numbers % 5 == 0){
        console.log("FIZZBUZZ");
    }else if (numbers % 5 == 0){
        console.log("BUZZ");
    }else if (numbers % 3 == 0){
        console.log("FIZZ");
    }else {
        console.log(numbers);
    }
    numbers++; 
}while (numbers <= 100);

//Exercise 4 Section
console.log("Exercise 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
 let foundValue = false;

 for (let number = 0; number <= n; number++){
     if(number == value){
         console.log("Found Value!");
         foundValue = true;
         break;
     }
     }
     if(!foundValue) {
         console.log("Did not find value.");
     }

//Exercise 5 Section
console.log("Exercise 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (i = start; i <= end; i++){
    if(i == fizzDivisor){
        console.log("FIZZ");
    }
    else if (i == buzzDivisor){
        console.log("BUZZ");
    }
    else {
        console.log("FIZZBUZZ");
    }
}





    

