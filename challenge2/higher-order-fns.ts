// foreach, filter, and map using reduce

const ts_forEach = <T>(items: T[], forEachFn: (v: T) => void): void => {
    items.reduce((acc, curr) => {
        forEachFn(curr)
        return undefined;
    }, undefined);
};

const ts_filter = <T>(items: T[], filterFn: (v: T) => boolean): T[] => {
    return items.reduce((acc, curr) => {
        if (filterFn(curr)) {
            return [...acc, curr];
        } else {
            return acc;
        }
    }, [] as T[]);
}

const greaterThanOne = (num: number): boolean => {
    if (num > 1) {
        return true;
    } else {
        return false;
    }
}

const ts_map = <T>(items: T[], mapFn: (v: T) => T): T[] => {
    return items.reduce((acc, curr) => {
        return [ ...acc, mapFn(curr) ];
    }, [] as T[]);
}

const timesTen = (num: number): number => {
    return num * 10;
}

ts_forEach([1, 2, 3], console.log);
console.log(ts_filter([1, 2, 3], greaterThanOne));
console.log(ts_map([1, 2, 3], timesTen));