/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/
function createСharObject (str) {
 const charObj = {};
 str = str.toLowerCase();
 for(let i of str){
     charObj[i] = charObj[i] + 1 || 1;
 }
 return charObj;
}

function anagram(str1, str2) {
  const strNew1 = createСharObject(str1);
  const strNew2 = createСharObject(str2);

  if(Object.keys(strNew1).length !== Object.keys(strNew2).length){
    return false;
  }

  for (let j in strNew1){
    if(strNew1[j] !== strNew2[j]) {
      return false;
    }
  }
  return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

console.log(anagram('up', 'UP'));// выдается true