<div align="center">

# TypeScript Notes

</div>

## Table of Contents

- [What is TypeScript?](#what-is-typescript)
   - [Shortcomings of JavaScript](#shortcomings-of-javascript)
   - [Benefits of Using TypeScript](#benefits-of-using-typescript)
   - [JavaScript and TypeScript Types](#javascript-and-typescript-types)
      - [TypeScript-Specific Types](#typescript-specific-types)
   - [Drawbacks of Using TypeScript](#drawbacks-of-using-typescript)
   - [Installation](#installation)

---

# What is TypeScript?

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


## Installation

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
