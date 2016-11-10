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

import {pp} from '../jasmine/pp.js';
import {keys} from '../util/keys.js';
import {contains} from '../util/contains.js';

/**
 * Check that actual object contains all given expected keys.
 *
 * @param {Object} ctx Test context containing tested object.
 * @param {Array<string>} expectedKeys Keys to look for in tested object.
 * @return {Object} Matcher result.
 */
export function toHaveKeys(ctx, ...expectedKeys) {
  const actual = ctx.actual;
  const actualKeys = keys(actual);
  const size = expectedKeys.length;

  let ok = true;
  for (let i = 0; i < size; ++i) {
    if (!contains(actualKeys, expectedKeys[i])) {
      ok = false;
      break;
    }
  }

  return {
    pass: ok,
    message: pp('Expect object {{%0}} {{not}} to contain keys {{%1}}', actual, expectedKeys)
  };
}
