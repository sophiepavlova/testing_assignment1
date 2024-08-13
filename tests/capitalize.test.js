import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.deepStrictEqual(capitalize('baby'), 'Baby');
assert.deepStrictEqual(capitalize(''), '');
// if (capitalize('baby') !== 'Baby') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');
