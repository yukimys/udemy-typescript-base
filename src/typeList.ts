/* typeScript基本の型 */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array
let arr1: Array<number> = [0, 1, 2]; //配列を先に指定する方法
let arr2: number[] = [0, 1, 2]; //配列の中身を先にしていする方法

// tuple
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false; //なんでも良い

// void:なにも返却しない
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "a" };
