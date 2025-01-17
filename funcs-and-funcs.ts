export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate);
} 

const myNewMutation: MutationFunction = v => v * 100;

console.log(arrayMutate([1, 20, 3], v => v * 10));
console.log(myNewMutation(5));

export function createAdder(num: number): MutationFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
console.log(addOne(15));