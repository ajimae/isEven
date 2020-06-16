import { isNumber } from "https://raw.githubusercontent.com/ajimae/isNumber/master/mod.ts";

export function isEven(number: number): boolean | Error {
  if(!isNumber(number)) {
    throw Error('invalid type, expecting a value of type number');
  }
  return (number % 2 === 0)
}
