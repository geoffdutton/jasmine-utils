/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Mickael Jeanroy <mickael.jeanroy@gmail.com>
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

import {toBeInstanceOf} from 'src/core/matchers/to-be-instance-of.js';

describe('toBeInstanceOf', () => {
  let Klass;

  beforeEach(() => {
    // eslint-disable-next-line
    Klass = class Klass {
      // eslint-disable-next-line
      constructor() {}
    };
  });

  it('should pass if value is an instance of given class', () => {
    const actual = new Klass();
    const result = toBeInstanceOf({actual}, Klass);
    expect(result).toEqual({
      pass: true,
      message: 'Expect Klass({  }) {{not}} to be an instance of Function',
    });
  });

  it('should not pass if value is not an instance of given class', () => {
    const actual = '';
    const result = toBeInstanceOf({actual}, Klass);
    expect(result).toEqual({
      pass: false,
      message: `Expect '' {{not}} to be an instance of Function`,
    });
  });
});
