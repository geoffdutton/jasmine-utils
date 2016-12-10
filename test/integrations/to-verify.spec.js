/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Mickael Jeanroy <mickael.jeanroy@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import 'src/index.js';

describe('toVerify', () => {
  it('should pass with array', () => {
    const iterator = (item) => item % 2 === 0;
    expect([2, 4, 6, 8]).toVerify(iterator);
    expect([2, 4, 6, 8, 9]).not.toVerify(iterator);
  });

  it('should pass with set', () => {
    const iterator = (item) => item % 2 === 0;
    expect(new Set([2, 4, 6, 8])).toVerify(iterator);
    expect(new Set([2, 4, 6, 8, 9])).not.toVerify(iterator);
  });

  it('should pass with map', () => {
    const iterator = (item) => item[1] % 2 === 0;
    expect(new Map([['two', 2], ['four', 4], ['six', 6]])).toVerify(iterator);
    expect(new Map([['two', 2], ['four', 4], ['seven', 7]])).not.toVerify(iterator);
  });

  it('should pass with iterable objects', () => {
    const actual = {
      [Symbol.iterator]() {
        let x = 0;
        return {
          next() {
            return x < 3 ? {value: x++, done: false} : {done: true};
          },
        };
      },
    };

    expect(actual).toVerify((x) => x < 3);
    expect(actual).not.toVerify((x) => x > 3);
  });

  it('should pass with a custom message', () => {
    const message = 'foo bar';
    const iterator = (item) => item % 2 === 0;

    expect([2, 4, 6, 8]).toVerify(message, iterator);
    expect([2, 4, 6, 8, 9]).not.toVerify(message, iterator);
  });
});
