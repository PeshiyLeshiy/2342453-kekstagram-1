/* Функция извлечения случайного индекса из массива*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length; // проверка на длину строки

/* Функция для генерации id*/
const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];


const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {
  getRandomInteger,
  isEscapeKey,
  checkStringLength,
  getRandomArrayElement,
  createIdGenerator,
  debounce};
