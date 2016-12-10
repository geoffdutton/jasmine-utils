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

import {isDOMElement} from '../util/is-dom-element.js';

/**
 * Check that the tested object is a DOM element with an expected id.
 *
 * @param {Object} ctx Test context.
 * @param {string} id Expected id.
 * @return {Object} Test result.
 */
export function toBeDOMElementWithId(ctx, id) {
  const actual = ctx.actual;
  const isElement = isDOMElement(actual);

  let ok = isElement;
  let msg = `Expect ${jasmine.pp(actual)} {{not}} to be a DOM element`;

  if (isElement) {
    const actualId = actual.getAttribute('id');
    msg += ` with id ${jasmine.pp(id)} but was ${jasmine.pp(actualId)}`;
    ok = ok && actualId === id;
  }

  return {
    pass: ok,
    message: msg,
  };
}
