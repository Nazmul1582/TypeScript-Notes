# TypeScript-Notes

TypeScript is an Object-Oriented Programming language built on top of JavaScript, offering additional features. TypeScript code can be transpiled into JavaScript, making it compatible with a wide range of environments.

### Shortcomings of JavaScript

- It is a dynamically typed language.
- Handling types in large-scale applications can be challenging.
- Type-related errors are only caught at **runtime**, not during **compile-time**.
- JavaScript does not support Object-Oriented Programming natively.
- Maintaining a large codebase becomes very difficult.
- Debugging is harder due to the lack of strict type checking.

### Benefits of Using TypeScript

- **Supports Older Browsers:** TypeScript allows you to use modern syntax while transpiling the code into older JavaScript versions (e.g., ES3) for compatibility with legacy browsers.
- **Type Safety:** Helps catch errors during compile-time, reducing runtime bugs.
- **Increases Productivity:** Developers benefit from features like IntelliSense, autocompletion, and type checking.
- **Fewer Bugs and Less Testing:** Strict typing reduces the likelihood of errors, saving time on debugging and testing.


### JavaScript and TypeScript Types

| **JavaScript Types**       | **TypeScript Equivalent**   |
|-----------------------------|-----------------------------|
| `string`                   | `string`                   |
| `number`                   | `number`                   |
| `boolean`                  | `boolean`                  |
| `object`                   | `object`                   |
| `undefined`                | `undefined`                |
| `null`                     | `null`                     |
| `function`                 | `(args) => returnType`      |
| `array`                    | `Array<type>` or `type[]`  |
| `symbol`                   | `symbol`                   |
| `bigint`                   | `bigint`                   |

| **TypeScript-Specific Types** | **Description**                                 |
|--------------------------------|-----------------------------------------------|
| `any`                          | A type that can be **any value** (disables type checking). |
| `unknown`                      | A safer alternative to `any`, requiring type checks before usage. |
| `never`                        | Represents values that **never occur** (e.g., functions that always throw errors). |
| `void`                         | Represents the absence of a return value, usually for functions. |
| `tuple`                        | A fixed-size array with specific types, e.g., `[string, number]`. |
| `enum`                         | Allows defining a set of named constant values. |
| `union`                        | Combines multiple types, e.g., `string | number`. |
| `intersection`                 | Combines multiple types into one, e.g., `TypeA & TypeB`. |
| `literal`                      | A specific value type, e.g., `"hello"` or `42`. |
| `interface`                    | Defines a contract for object shapes. |
| `type` (alias)                 | Creates custom type aliases for reuse. |


### Drawbacks of Using TypeScript

1. **Type Complexities:**  
   As projects grow, managing and maintaining complex types, generics, and type inference can become overwhelming, especially for developers unfamiliar with advanced type systems.

2. **Limited Library Support:**  
   While TypeScript supports most JavaScript libraries, some libraries may lack complete or accurate type definitions. Developers might need to create or maintain custom type declarations using `@types` or manual typings.

3. **Over-Engineering:**  
   Overuse of TypeScript’s features, such as interfaces, unions, and custom types, can lead to overly complex and verbose code that might not justify the benefits for smaller projects.

4. **Migration Challenges:**  
   Converting an existing JavaScript codebase to TypeScript can be time-consuming and challenging, especially in large projects with a lack of proper type definitions or loosely written code.
