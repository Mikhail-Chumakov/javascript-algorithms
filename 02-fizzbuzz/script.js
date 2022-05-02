/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *  
*/

function fizzBuzz(num) {
    // Напишите код здесь
  if (!Number.isInteger(num)){
    return("введите целое число число");
  }
  for (let i = 1; i <= num; i++){
    if (i <= 0) {
      console.log ("введите число больше 0");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log ("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log ("fizz");
    } else if (i % 5 === 0) {
      console.log ("buzz");
    } else {
      console.log (i);
    }
  }
  
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fizzBuzz(0.6));
console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(2));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(0));
console.log(fizzBuzz(-1));
console.log(fizzBuzz(0.2));