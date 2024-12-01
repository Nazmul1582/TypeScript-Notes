<div align="center">

# TypeScript Notes

</div>

## Table of Contents

- [1 Explore Basic Type in TypeScript](#1-explore-basic-type-in-typescript)
  - [1-1 Introduction To TypeScript](#1-1-introduction-to-typescript)
    - [Shortcomings of JavaScript](#shortcomings-of-javascript)
    - [Benefits of Using TypeScript](#benefits-of-using-typescript)
    - [JavaScript and TypeScript Types](#javascript-and-typescript-types)
      - [TypeScript-Specific Types](#typescript-specific-types)
   - [Drawbacks of Using TypeScript](#drawbacks-of-using-typescript)
  - [1-2 install typescript and fast node version manager](#1-2-install-typescript-and-fast-node-version-manager)
  - [1-3 Write your first typescript program](#1-3-write-your-first-typescript-program)
  - [1-4 Understanding Data Types and Runtime Behavior](#1-4-understanding-data-types-and-runtime-behavior)
  - [1-5 Object , Optional and Literal Types](#1-5-object-optional-literal-and-readonly-types-in-typescript)
  - [1-6 Functions in TypeScript](#1-6-functions-in-typescript)


# 1 Explore Basic Type in TypeScript

---

## 1-1 Introduction To TypeScript

TypeScript is an Object-Oriented Programming language built on top of JavaScript. It adds additional features to JavaScript, such as static typing, which makes development more robust. TypeScript code can be transpiled into JavaScript, allowing it to run in any environment that supports JavaScript.

## Shortcomings of JavaScript

- JavaScript is a dynamically typed language.
- Handling types in large-scale applications can be challenging.
- Type-related errors are caught only at **runtime**, not during **compile-time**.
- JavaScript does not natively support Object-Oriented Programming.
- Maintaining a large codebase becomes increasingly difficult.
- Debugging is harder due to the lack of strict type checking.

## Benefits of Using TypeScript

- **Supports Older Browsers:** TypeScript allows you to use modern syntax while transpiling the code into older JavaScript versions (e.g., ES3) for compatibility with legacy browsers.
- **Type Safety:** Helps catch errors during compile-time, reducing runtime bugs.
- **Increased Productivity:** Developers benefit from features like IntelliSense, autocompletion, and type checking.
- **Fewer Bugs and Less Testing:** Strict typing reduces the likelihood of errors, saving time on debugging and testing.

---

## JavaScript and TypeScript Types

### JavaScript Types and Their TypeScript Equivalents

| **JavaScript Type**         | **TypeScript Equivalent**   |
|------------------------------|-----------------------------|
| `string`                    | `string`                   |
| `number`                    | `number`                   |
| `boolean`                   | `boolean`                  |
| `object`                    | `object`                   |
| `undefined`                 | `undefined`                |
| `null`                      | `null`                     |
| `function`                  | `(args) => returnType`      |
| `array`                     | `Array<type>` or `type[]`  |
| `symbol`                    | `symbol`                   |
| `bigint`                    | `bigint`                   |

### TypeScript-Specific Types

| **TypeScript Type**          | **Description**                                  |
|------------------------------|-------------------------------------------------|
| `any`                        | A type that can be **any value** (disables type checking). |
| `unknown`                    | A safer alternative to `any`, requiring type checks before usage. |
| `never`                      | Represents values that **never occur** (e.g., functions that always throw errors). |
| `void`                       | Represents the absence of a return value, usually for functions. |
| `tuple`                      | A fixed-size array with specific types, e.g., `[string, number]`. |
| `enum`                       | Allows defining a set of named constant values. |
| `union`                      | Combines multiple types, e.g., `string | number`. |
| `intersection`               | Combines multiple types into one, e.g., `TypeA & TypeB`. |
| `literal`                    | A specific value type, e.g., `"hello"` or `42`. |
| `interface`                  | Defines a contract for object shapes. |
| `type` (alias)               | Creates custom type aliases for reuse. |

---

## Drawbacks of Using TypeScript

1. **Type Complexities:**  
   Managing and maintaining complex types, generics, and type inference can become overwhelming as projects grow, especially for developers unfamiliar with advanced type systems.

2. **Limited Library Support:**  
   While TypeScript supports most JavaScript libraries, some libraries lack complete or accurate type definitions. Developers might need to create or maintain custom type declarations using `@types` or manual typings.

3. **Over-Engineering:**  
   Overuse of TypeScript’s features, such as interfaces, unions, and custom types, can lead to overly complex and verbose code that might not justify the benefits for smaller projects.

4. **Migration Challenges:**  
   Converting an existing JavaScript codebase to TypeScript can be time-consuming and challenging, especially for large projects with loosely written or undocumented code.

---


## 1-2 install typescript and fast node version manager

1. **Download and Install Node.js**  
   - Download Node.js from its [official website](https://nodejs.org).  

2. **Install FNM (Fast Node Manager)**  
   - Install FNM using PowerShell:  
     ```bash
     winget install Schniz.fnm
     ```  
   - Configure the FNM environment:  
     ```bash
     fnm env --use-on-cd | Out-String | Invoke-Expression
     ```  
   - Download and install Node.js:  
     ```bash
     fnm use --install-if-missing 22
     ```  
   - Verify Node.js and npm versions:  
     ```bash
     node -v # Should print the Node.js version, e.g., v22.11.0
     npm -v  # Should print the npm version, e.g., 10.9.0
     ```  
   - Install another version of Node.js if needed:  
     ```bash
     fnm install 20.18.0
     ```  
   - Check all downloaded Node.js versions:  
     ```bash
     fnm list
     ```  
   - Use a specific version:  
     ```bash
     fnm use <node_version>
     ```  

3. **Install TypeScript Globally**  
   - Run the following command in the terminal:  
     ```bash
     npm install -g typescript
     ```  

4. **Check TypeScript Version**  
   - Verify the installation:  
     ```bash
     tsc -v
     ```  
     (Here, `tsc` stands for TypeScript Compiler.)

5. **Install `ts-node-dev` to Run TypeScript Code in the Terminal**  
   - Install `ts-node-dev` using npm:  
     ```bash
     npm i ts-node-dev
     ```  
   - Run your TypeScript file (e.g., `server.ts`) with the following command:  
     ```bash
     ts-node-dev --respawn --transpile-only server.ts
     ```  
   - Explanation of options:
     - `--respawn`: Restarts the process automatically when files change.
     - `--transpile-only`: Speeds up execution by skipping type checking during runtime.

--- 

## 1-3 Write your first typescript program

### Step-by-Step Guide

---

### **Step 1: Initial Setup**

Before configuring TypeScript, your project contains only a single TypeScript file:

**Initial Folder Structure:**
```
project-root/
├── index.ts
```

**File Content:** `index.ts`
```typescript
/**
 * Entry point of the application.
 * This program demonstrates a simple TypeScript setup.
 */

// Declare a string variable and assign a value
let str: string = "Be a TypeScript technocrat";
console.log(str);
```

---

### **Step 2: Compile the Initial File**

To compile the file into JavaScript, use the TypeScript Compiler (`tsc`):

```bash
tsc index.ts
```

This will create a JavaScript file `index.js` in the same directory:

**Updated Folder Structure:**
```
project-root/
├── index.ts  # Source TypeScript file
├── index.js  # Compiled JavaScript file
```

---

### **Step 3: Create a Folder Structure**

Organize your project by creating a structured folder layout:

**New Folder Structure:**
```
project-root/
├── module1/
│   ├── src/
│   │   └── index.ts
```

Move your `index.ts` file into the `module1/src/` directory.

---

### **Step 4: Initialize a TypeScript Configuration File**

Run the following command in the root of your project to create a `tsconfig.json` file:

```bash
tsc --init
```

This generates a default `tsconfig.json` file.

---

### **Step 5: Modify `tsconfig.json`

Update the `tsconfig.json` file to define the root directory for source files and the output directory for compiled files:

**Updated `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "rootDir": "./module1/src/",  // Directory for source TypeScript files
    "outDir": "./module1/dist"   // Directory for compiled JavaScript files
  }
}
```

---

### **Step 6: Compile the Project**

Compile the entire project using the `tsconfig.json` configuration:

```bash
tsc
```

**Resulting Folder Structure:**
```
project-root/
├── module1/
│   ├── dist/
│   │   └── index.js  # Compiled JavaScript file
│   ├── src/
│   │   └── index.ts  # Source TypeScript file
├── tsconfig.json       # TypeScript configuration file
```

---

### **Step 7: Run the Compiled JavaScript**

To execute the compiled JavaScript file, use Node.js:

```bash
node module1/dist/index.js
```

---

### Summary

1. **Initial File:** Start with `index.ts` in the root directory.
2. **Compile:** Use `tsc index.ts` to generate `index.js` temporarily.
3. **Organize:** Create a folder structure (`module1/src/`) and move `index.ts`.
4. **Initialize Config:** Use `tsc --init` to create `tsconfig.json` and configure directories.
5. **Build Project:** Use `tsc` to compile the project, generating organized output in `module1/dist/`.

This setup ensures a clean and scalable TypeScript project structure.

--- 

## 1-4 Understanding Data Types and Runtime Behavior

### **Introduction**

TypeScript is a superset of JavaScript that introduces static typing to the language, enabling developers to catch errors during development. However, TypeScript types exist only at compile-time and do not carry over to runtime.

This means that we cannot access or utilize TypeScript types at runtime because TypeScript code is not directly executed. Instead, TypeScript code is compiled into JavaScript, and it is the resulting JavaScript code that is executed in the browser or a Node.js environment. At runtime, only JavaScript types are available, while TypeScript provides type checking and validation at compile-time, ensuring that your code adheres to the defined types during development.

### **Key Point:**
- **We cannot get TypeScript types at runtime** because TypeScript is only used during development for type checking and compiling. 
- After compilation, only JavaScript types are available at runtime, and the TypeScript types are removed.

---

## **Primitive and Non-Primitive Data Types in TypeScript**

TypeScript supports two categories of data types: **Primitive** and **Non-Primitive**.

---

### **1. Primitive Data Types**

Primitive types represent simple, immutable values.

| **Data Type**   | **Description**                                                           | **Example**                          |
|------------------|---------------------------------------------------------------------------|--------------------------------------|
| `string`         | Represents textual data.                                                 | `"Hello, TypeScript!"`               |
| `number`         | Represents numeric values, including integers and floating-point numbers.| `42`, `3.14`                         |
| `boolean`        | Represents logical values: `true` or `false`.                            | `true`, `false`                      |
| `null`           | Represents explicitly no value.                                          | `null`                               |
| `undefined`      | Represents a variable that has been declared but not assigned a value.   | `undefined`                          |
| `symbol`         | Represents a unique, immutable value often used as object keys.          | `Symbol('uniqueKey')`                |
| `bigint`         | Represents large integers beyond the safe range of `number` type.        | `9007199254740991n`                  |

#### **Example:**
```typescript
let myString: string = "TypeScript is powerful!";
let myNumber: number = 2024;
let isAvailable: boolean = true;
let nothingHere: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol("id");
let bigNumber: bigint = 123456789123456789n;
```

---

### **2. Non-Primitive (Reference) Data Types**

Non-primitive types are more complex and reference locations in memory instead of directly storing values.

| **Data Type** | **Description**                                                             | **Example**                              |
|---------------|-----------------------------------------------------------------------------|------------------------------------------|
| `object`      | Represents collections of key-value pairs or complex data structures.       | `{ name: "John", age: 30 }`              |
| `array`       | Represents a list or collection of values.                                  | `[1, 2, 3]`, `["apple", "banana"]`       |
| `tuple`       | Represents an array with fixed number and types of elements.               | `[number, string]` → `[42, "TypeScript"]` |
| `enum`        | Represents a set of named constant values.                                  | `enum Colors { Red, Green, Blue }`       |
| `any`         | Represents any type of value; bypasses type-checking.                      | `let anything: any = "hello";`           |
| `void`        | Represents the absence of a value, usually for functions that don’t return.| `function logMessage(): void {}`         |
| `never`       | Represents values that never occur, such as unreachable code.              | `function error(): never {}`             |

#### **Example:**
```typescript
// Object
let person: { name: string; age: number } = { name: "John", age: 30 };

// Array
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Tuple
let coordinate: [number, number] = [10, 20];

// Enum
enum Direction {
  North,
  South,
  East,
  West,
}
let myDirection: Direction = Direction.North;

// Any
let anything: any = "Could be anything";

// Void
function logMessage(): void {
  console.log("This function does not return anything.");
}

// Never
function throwError(): never {
  throw new Error("This is an error!");
}
```

---

### **Compile-Time vs Runtime Behavior in TypeScript**

- **Compile-Time:**  
  TypeScript provides type checking during the development phase (compile-time). It ensures that the variables, functions, and objects are being used with the correct types, helping to catch errors early.

- **Runtime:**  
  TypeScript code is compiled into JavaScript, and only the resulting JavaScript code is executed in the browser or Node.js environment. At this stage, the TypeScript types no longer exist. This means:
  - **TypeScript types are unavailable at runtime.**
  - **JavaScript types are used at runtime.**

#### **Example of Type Checking in TypeScript:**
```typescript
// TypeScript Code
let num: number = 42;
// num = "Hello"; // Error: Type 'string' is not assignable to type 'number'.
```

After compilation:
```javascript
// Compiled JavaScript Code
let num = 42;
// num = "Hello"; // This would only throw an error if run in JS at runtime.
```

---

### **Key Takeaways**

1. TypeScript enhances development with static type checking and improved tooling.
2. TypeScript types exist only at compile-time and are not available at runtime.
3. JavaScript, the output of TypeScript, is what runs in the browser or Node.js, using JavaScript types during execution.
4. Understanding both primitive and non-primitive data types helps in writing robust and type-safe TypeScript code.

---

## 1-5 **Object, Optional, Literal, and Readonly Types in TypeScript**

#### **1. Object Types**

An **Object type** in TypeScript represents a collection of key-value pairs. The structure of an object is defined by its properties and their types.

###### **Example:**
```typescript
// Defining an object type for a person
let person: { firstName: string, lastName: string, isMarried: boolean } = {
    firstName: "John",
    lastName: "Doe",
    isMarried: false
};
```
In this example:
- `firstName`, `lastName`, and `isMarried` are properties of the `person` object.
- The type of `firstName` is `string`, `lastName` is `string`, and `isMarried` is `boolean`.

---

#### **2. Optional Types**

**Optional Types** allow you to define properties in an object that may or may not be provided. You mark a property as optional by appending a `?` to its name.

###### **Example:**
```typescript
// Defining an object type with an optional property
let person: { firstName: string, middleName?: string, lastName: string, isMarried: boolean } = {
    firstName: "John",
    lastName: "Doe",
    isMarried: false
};

// Middle name is optional, so it is not required when initializing the object.
```

In this example:
- `middleName?` is an optional property. This means the `middleName` property may or may not be provided when creating the object.

---

#### **3. Literal Types**

**Literal Types** allow you to define a specific, fixed value for a variable or property. This is more restrictive than using general types.

###### **Example:**
```typescript
// Using Literal Types
let firstName: "John" = "John";  // The value can only be "John"
let isMarried: true = true;      // The value must be true
```

Here:
- `firstName` is a **literal type** with the specific value `"John"`, so `firstName` can only hold this exact value.
- `isMarried` is a **literal type** that only accepts the value `true`.

###### **Literal Types in Objects:**
```typescript
// Using Literal Types within Objects
let person: { firstName: "John", lastName: string, isMarried: boolean } = {
    firstName: "John", // Only "John" is allowed for firstName
    lastName: "Doe",
    isMarried: false
};
```
In this case:
- `firstName` is restricted to the literal value `"John"`.

---

#### **4. Readonly Types**

**Readonly Types** are used to make an object property immutable (i.e., it cannot be modified after it’s initialized). You can apply the `readonly` modifier to individual properties or to the entire object type.

###### **Example (Readonly Property):**
```typescript
// Using the readonly modifier on a property
let person: { readonly firstName: string, lastName: string } = {
    firstName: "John",
    lastName: "Doe"
};

// Trying to modify the readonly property will result in an error:
person.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
```
In this example:
- `firstName` is marked as `readonly`, meaning it can’t be reassigned after the object is created.

###### **Example (Readonly Object):**
You can also make the entire object type readonly, which prevents any properties from being modified.

```typescript
// Using the readonly modifier on the whole object
let person: Readonly<{ firstName: string, lastName: string }> = {
    firstName: "John",
    lastName: "Doe"
};

// Trying to modify any property will result in an error:
person.firstName = "Jane";  // Error: Cannot assign to 'firstName' because it is a read-only property.
```
Here:
- `Readonly<{ firstName: string, lastName: string }>` ensures that all properties in the `person` object are immutable.

---

### **Combining Object, Optional, Literal, and Readonly Types**

You can combine **Object Types**, **Optional Types**, **Literal Types**, and **Readonly Types** to create more flexible, type-safe structures.

#### **Example:**
```typescript
// Combining Object, Optional, Literal, and Readonly Types
let person: {
    readonly firstName: "John",   // Literal and Readonly
    middleName?: string,          // Optional
    lastName: string,             // Regular string
    isMarried: boolean            // Boolean type
} = {
    firstName: "John",            // Literal type, must be "John"
    lastName: "Doe",
    isMarried: false
};

// The firstName cannot be changed because it's readonly
person.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.

person.middleName = "Paul";  // middleName is optional, so it can be assigned later.
```

In this example:
- `firstName` is a **literal type** with the value `"John"` and is **readonly**, so it cannot be changed.
- `middleName?` is an **optional** property, so it may or may not be included in the object.
- `lastName` and `isMarried` are regular properties with their respective types.

---

## **1-6 Functions in TypeScript**

In TypeScript, we can declare functions with specified argument types and return types. Here’s an example of a basic function that adds two numbers:

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

- The function `add` takes two parameters, `a` and `b`, both of type `number`.
- It returns a value of type `number` (the sum of `a` and `b`).

**Type Checking Example:**
```typescript
// add(4, '3') // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// add(5, 3)    // Valid: This works because both arguments are numbers
```
- TypeScript will give an error if the argument types don't match the expected types. In this case, passing a `string` instead of a `number` will cause a compile-time error.

---

### **2. Arrow Functions**

Arrow functions in TypeScript are a more concise way to write functions. We can define the function’s parameter types and return type just like with a regular function.

```typescript
const addArrow = (a: number, b: number): number => {
    return a + b;
}
```

- `addArrow` is an arrow function that takes two parameters, `a` and `b`, both of type `number`.
- It returns a `number`, which is the sum of `a` and `b`.

**Type Checking Example:**
```typescript
// addArrow("3", 5) // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// addArrow(3, 5)    // Valid: This works because both arguments are numbers
```
- Again, TypeScript ensures type safety and gives an error if you pass a `string` instead of a `number`.

---

### **3. Methods in Objects**

In TypeScript, you can define methods inside objects. The type of each method can be inferred from the function signature, but you can also explicitly define types for method arguments and return values.

```typescript
const poorUser = {
    name: "Namzul",
    balance: 0,
    addBalance(newBalance: number): string {
        return `My new balance is ${this.balance + newBalance}`;
    }
};
```

- The method `addBalance` takes a `newBalance` of type `number` and returns a `string` that includes the new balance value.
- Inside the method, `this.balance` refers to the `balance` property of the `poorUser` object.

---

### **4. Array Methods with Type Annotations**

You can use array methods like `map`, `filter`, etc., and specify the types for the elements of the array and the resulting array.

```typescript
const arr: number[] = [2, 5, 7, 33];
const newArray: number[] = arr.map((ele: number): number => ele * ele);
```

- `arr` is an array of `number` types.
- The `map` method is used to iterate over each element of the array and square each element.
- The result of `map` is a new array `newArray` of `number[]` type, as each element is squared, ensuring the result is still a `number`.

---
