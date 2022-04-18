// При помощи циклв выведите в консоль числа от 5 до 10 включительно. Цикл любой

function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}


// При помощи цикла for вывести числа от 20 до 10. В обратном порядке
//Когда цикл дойдёт до числа 13- остановить весь цикл

function secondTask() {
    for (let i = 20; i > 9; i--) {
        console.log(i);
        if (i == 13) {
            break;
        }
    }
}


//При помощи цикла for выведите все чётные числа от 2 до 10 включительно

function thirdTask() {
    for (let i = 2; i < 11; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


// Переписать цикл for на вариант с while
// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i < 16) {
        i++;
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


// Заполните массив цифрами от 5 до 10 включительно

// function fifthTask() {
//     const arrayOfNumbers = [];
//     arrayOfNumbers[4]= 5;
//     arrayOfNumbers[5]= 6;
//     arrayOfNumbers[6]= 7;
//     arrayOfNumbers[7]= 8;
//     arrayOfNumbers[8]= 9;
//     arrayOfNumbers[9]= 10;
//     return arrayOfNumbers;
// } это мой вариант и он работает

function fifthTask() {
    const arrayOfNumbers = [];
    let i = 5;
    while (i < 11) {
        arrayOfNumbers.push(i++);
    }

    return arrayOfNumbers;
}

// Или вот так

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}