import * as houses from "./houses.json";

interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID {
    name: string;
    planets: string | string[];
    id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
    houses: string,
    filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
    houses: House[],
    filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: unknown, filter?: unknown): HouseWithID[] {
    const houseData = typeof houses === "string" ? JSON.parse(houses) : houses;
    const housesWithIds = houseData.map((house: House, index: number) => {
        return {
            id: index,
            ...house,
        }
    });
    if (filter) {
        return housesWithIds.filter(filter);
    } else {
        return housesWithIds;
    }
}

console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));