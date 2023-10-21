/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// 1. типізація нового екземпляру класу Promise
// 2. типізація результату виконання функції getPromise

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => resolve(["Text", 50]));
}

getPromise().then((data) => {
  console.log(data);
});

export {};
