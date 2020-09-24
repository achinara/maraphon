'use strict';

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

const errorMsg = 'Ожидается строка, проверьте: ';


function getNumBySymbol(string, symbol) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === symbol) {
      result++;
    }
  }
  return result;
}

function isNotString(string) {
  return typeof string !== 'string';
}

function getRow(firstRow, secondRow) {
  if (isNotString(firstRow)) return `${errorMsg}'${firstRow}'`;
  if (isNotString(firstRow)) return `${errorMsg}'${secondRow}'`;

  const symbol = prompt('Введите символ', 'а');
  if (isNotString(symbol)) return `${errorMsg}'${symbol}'`;

  const first = getNumBySymbol(firstRow, symbol);
  const second = getNumBySymbol(secondRow, symbol);

  if (!first && !second) return `Буква '${symbol}' не встречается в заданных предложениях`;
  if (first === second) return `Буква '${symbol}' встречается одинаково: ${first} раз`;
  return first > second ? firstRow : secondRow;
}

alert(getRow(firstRow, secondRow)); // мама мыла раму