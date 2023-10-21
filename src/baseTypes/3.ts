// не знаємо точного типу даних, треба робити перевірку (typeof, instanceof, as)

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") str = some;

export {};
