// kahoot
// let number;
// console.log(number)

// const mango = 'mango';
// console.log(mango.indexOf('q'));



/***** Оголошення змінних *****/
// const;
// const number = 7;
// console.log(number)

// let;
// let name = 'Alex';
// name = 'Dan';
// console.log(name)






/***** Примітивні типи даних ****/

// Number
// const age = 20;
// console.log(age)

// String
// const city = 'Kyiv';
// console.log(city)

// Типи рядків '' "" ``
// const stringType1 = 'apple "';
// const stringType2 = "'coconut'";
//
// const fruit = 'apple';
// const sentence = `Current fruit: ${fruit}`;
// console.log(sentence)
// Boolean (true, false)
// const isAdmin = true;
// console.log(isAdmin)
//
// let haveRoots;
// haveRoots = false;
// console.log(haveRoots)

// undefined
// const apple = undefined;
// console.log(apple)

// null
// const variable = null;
// console.log(variable);

// перевірка типу даних з яким працюємо метод typeof
// const amount = 10;
// console.log(typeof amount)
//
// const name = 'Mike';
// console.log(typeof name)
//
// const bool = true;
// console.log(typeof bool);







/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// console.log('Привіт, вчи JS');

// alert('Привіт вчи JS')
//
// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);









/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0);

// ===
// console.log('25' == 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);


// !=
// console.log('1' != 1);


// !==
// console.log('1' !== 1);


// Приклади роботи

// console.log(1 == true);
// const bool = Boolean(0);
// console.log(bool)

// console.log(1 === true);
//
// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');
// 'a'.charCodeAt(0)
// console.log('Papaya' === 'papaya');









/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));








/***** Логічні оператори *****/

// ||
// console.log(2 || 0 || 1);

// ?? реагує лише на null та undefined
// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// &&
// console.log(false && 1);
// console.log(NaN && 2);
//
// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);


// Приклади роботи

// console.log(true && 3);
//
// console.log(false && 3);
//
// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 0);
//
// console.log(null || 2 || undefined);
//
// console.log('' ??  4);
//
// console.log(false ?? 7);
//
// console.log(null ?? 7);
//
// console.log(undefined ?? 7);







/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';

// Number.parseInt()
// console.log(Number.parseInt(str));


// Number.parseFloat()
// console.log(Number.parseFloat(str));

// const num = Number(str) // NaN
// console.log(num)
// Number.isNaN()  та метод isNaN()
// console.log(isNaN(num));
// console.log(Number.isNaN(num));

// console.log(isNaN(undefined));
// console.log(Number.isNaN(undefined))




// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN



// Класс Math
// const value = 11.400
// console.log(Math.floor(value));
//
// console.log(Math.ceil(value));
//
// // Math.round()
// console.log(Math.round(value));
//
//
// console.log(Math.pow(5, 4));
// console.log(5 ** 4);







/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));

// includes
// console.log(str.includes('world'));

// endsWith()
// console.log(str.endsWith(' world'));

// startsWith()
// console.log(str.startsWith('H'));



// replace()
// console.log(str.replace('l', '🍕'));


// replaceAll()
// console.log(str.replaceAll('o','🍟'));
// console.log(str.replaceAll('l','🍟'));

// slice()
// console.log(str.slice(0, 0));
// console.log(str);







// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';
//
// const appleQuantity = 8;
//
// const applePrice = 34;
//
// const  appleMessage = `Fruit: ${apple}, total price: ${appleQuantity * applePrice}`;
// console.log(appleMessage);


// const cherry = '🍒';
//
// const cherryQuantity = 3;
//
// const cherryPrice = 72;
//
// const cherryMessage = `Fruit: ${cherry}, total price: ${cherryQuantity * cherryPrice}`;
//
// console.log(cherryMessage);


// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

const totalMinutes = 450;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
console.log(result);



// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is $(name)`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = 'Total purchase, price ${delivery}  + price';
// console.log(message);


// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null || defaultValue;
// console.log(value);


