let myString: string = "TypeScript is powerful!";
let myNumber: number = 2024;
let isAvailable: boolean = true;
let nothingHere: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol("id");
// let bigNumber: bigint = 123456789123456789n; // BigInt literals are not available when targeting lower than ES2020.

// Object
let person: { name: string; age: number } = { name: "John", age: 30 };

// Array
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Tuple
let coordinate: [number, number] = [10, 20];

// // Enum
// enum Direction {
//   North,
//   South,
//   East,
//   West,
// }
// let myDirection: Direction = Direction.North;

// // Any
// let anything: any = "Could be anything";

// // Void
// function logMessage(): void {
//   console.log("This function does not return anything.");
// }

// // Never
// function throwError(): never {
//   throw new Error("This is an error!");
// }
