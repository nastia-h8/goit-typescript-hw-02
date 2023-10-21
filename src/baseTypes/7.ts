/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend",
}

function isWeekend(day: DayOfTheWeek): boolean {
  return day === "weekend" ? true : false;
}

console.log(isWeekend(DayOfTheWeek.Monday)); // false
console.log(isWeekend(DayOfTheWeek.Sunday)); // true
