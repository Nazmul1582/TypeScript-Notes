{
function add(a: number, b: number): number {
    return a + b
}

// add(4, '3') // Argument of type 'string' is not assignable to parameter of tyep 'number'
// add( 5, 3)

const addArrow = (a: number, b: number) : number => {
    return a + b;
}
// addArrow("3", 5) // Argument of type 'string' is not assignable to parameter of type 'number'
addArrow(3, 5)

const poorUser = {
    name: "Namzul",
    balance: 0,
    addBalance(newBalance: number): string{
        return `My new balance is ${this.balance + newBalance}`
    } 
}

const arr: number[] = [2, 5, 7, 33];
const newArray: number[] = arr.map((ele: number): number => ele * ele) 
}