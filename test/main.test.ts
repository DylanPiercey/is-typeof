import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { Stream } from "stream";
import * as types from "../src";

const examples = {
  // tslint:disable-next-line
  string: ["", "a", new String("a"), new String(1)],
  // tslint:disable-next-line
  number: [1, 0, Infinity, new Number("a"), new Number(1)],
  // tslint:disable-next-line
  boolean: [true, false, new Boolean("a"), new Boolean(1)],
  date: [new Date(), new Date("a"), new Date(1)],
  regexp: [/.*/, new RegExp(".*")],
  error: [new Error()],
  // tslint:disable-next-line
  function: [function() {}, new Function()],
  arguments: [
    // tslint:disable-next-line
    (function() {
      return arguments;
    })()
  ],
  object: [{}, new Object()],
  array: [[], new Array()],
  stream: [
    new Stream(),
    fs.createReadStream(path.join(__dirname, "/../package.json"))
  ],
  buffer: [new Buffer("")]
};

const methods = {
  arguments: "isArguments",
  array: "isArray",
  boolean: "isBoolean",
  buffer: "isBuffer",
  date: "isDate",
  error: "isError",
  function: "isFunction",
  number: "isNumber",
  object: "isObject",
  regexp: "isRegExp",
  stream: "isStream",
  string: "isString"
};

const similar = {
  arguments: ["arguments"],
  array: ["array"],
  boolean: ["boolean"],
  buffer: ["buffer"],
  date: ["date"],
  error: ["error"],
  function: ["function"],
  number: ["number"],
  object: ["object", "stream"],
  regexp: ["regexp"],
  stream: ["stream"],
  string: ["string"]
};

describe("Is-TypeOf", () => {
  // Test each function against eachothers types.
  Object.keys(examples).forEach(testType => {
    const method = methods[testType];
    it(`.${method}`, () => {
      Object.keys(examples).forEach(type => {
        const isValid = similar[testType].indexOf(type) !== -1;
        examples[type].forEach(value => {
          assert.equal(
            types[method](value),
            isValid,
            `${testType} ${isValid ? "is" : "isn't"} ${type} (${toString(
              value
            )})`
          );
        });
      });
    });
  });

  it(".Empty", () => {
    const emptyExamples = [[], {}, 0, null, undefined, ""];
    const notEmptyExamples = [[1], { a: 1 }, "hello"];

    emptyExamples.forEach(value => {
      assert.equal(
        types.isEmpty(value),
        true,
        `(${toString(value)}) should be empty`
      );
    });

    notEmptyExamples.forEach(value => {
      assert.equal(
        types.isEmpty(value),
        false,
        `(${toString(value)}) should not be empty`
      );
    });
  });
});

/**
 * Try's to convert an object to json.
 */
function toString(val: any): string {
  try {
    return JSON.stringify(val).slice(0, 30);
  } catch (_) {
    return String(val);
  }
}
