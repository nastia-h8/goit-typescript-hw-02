/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend",
}

function isWeekend(day: string): boolean {
  return day === "weekend" ? true : false;
}

console.log(isWeekend(Days.Monday));
