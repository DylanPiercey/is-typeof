const { toString } = Object.prototype;
const typeClass = {
  arguments: "Arguments",
  array: "Array",
  boolean: "Boolean",
  date: "Date",
  error: "Error",
  function: "Function",
  number: "Number",
  object: "Object",
  regexp: "RegExp",
  string: "String"
};

/** Test if a value is a string. */
export const isString = isType("String");
/** Test if a value is a number. */
export const isNumber = isType("Number");
/** Test if a value is a boolean. */
export const isBoolean = isType("Boolean");
/** Test if a value is a date. */
export const isDate = isType("Date");
/** Test if a value is a regex. */
export const isRegExp = isType("RegExp");
/** Test if a value is an error. */
export const isError = isType("Error");
/** Test if a value is a function. */
export const isFunction = isType("Function");
/** Test if a value is an arguments object. */
export const isArguments = isType("Arguments");
/** Test if a value is a plain object. */
export const isObject = isType("Object");
/** Test if a value is an array. */
export const isArray = isType("Array");
/** Test if a value is a stream. */
export function isStream(val: any): boolean {
  return val != null && typeof val.pipe === "function";
}
/** Test if a value is a buffer. */
export function isBuffer(val: any): boolean {
  return (
    val != null &&
    val.constructor != null &&
    typeof val.constructor.isBuffer === "function"
  );
}
/** Test if a value is empty. */
export function isEmpty(val: any): boolean {
  // tslint:disable-next-line
  for (const key in val) {
    return false;
  }

  return true;
}

/**
 * Creates a type checker function based on the given type.
 * @internal
 */
function isType(name: string) {
  const type = name.toLowerCase();
  return (val: any): boolean => {
    const typeOf = typeof val;
    switch (typeOf) {
      case "object":
      case "function":
        return toString.call(val) === `[object ${typeClass[type]}]`;
      default:
        return typeOf === type;
    }
  };
}
