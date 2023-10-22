/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
//const enum - видаляється під час транспіляції, на відміну від enum

enum DayOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfTheWeek): boolean {
  return day === DayOfTheWeek.Saturday || day === DayOfTheWeek.Sunday;
}

console.log(isWeekend(DayOfTheWeek.Tuesday)); // false
console.log(isWeekend(DayOfTheWeek.Sunday)); // true
