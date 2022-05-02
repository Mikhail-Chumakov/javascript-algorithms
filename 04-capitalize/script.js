/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  let upStr = "";
  let arr = str.toLowerCase().split(" ");
  for (let i = 0; arr.length > i; i++){
    let firstLetters = arr[i][0].toUpperCase();
    let otherLetters = arr[i].substring(1);
    upStr += firstLetters + otherLetters + " ";   
  }
  return (upStr.slice(0, -1));
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"