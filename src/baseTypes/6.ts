/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
} // для функцій, які не повертають значення

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
} // для функцій, які завжди викидають вийняток або у нескінченних циклах

export {};
