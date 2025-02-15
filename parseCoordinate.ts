interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };

    if (typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinate)
        }
    } else if (typeof arg1 === 'string') {
        const splitArg = arg1.split(',');
        const x = splitArg[0].split(':')[1].trim();
        const y = splitArg[1].split(':')[1].trim();
        coord = {
            x: parseInt(x),
            y: parseInt(y)
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    return coord;
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({ x: 52, y: 35}))
console.log(parseCoordinate("x: 12,y: 22"))
