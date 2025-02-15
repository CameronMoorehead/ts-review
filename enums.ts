const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum LoadingStte {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}

const englishLoadingStates = {
    [LoadingStte.beforeLoad]: "Before Load",
};

const isLoading = (state: LoadingStte) => state === LoadingStte.loading;

console.log(isLoading(LoadingStte.beforeLoad));

// Literal Types

function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}

console.log(rollDice(3));

function sendEvent(name: "addToCart", data: { productId: number; }): void;
function sendEvent(name: "checkout", data: { cartCount: number; }): void;
function sendEvent(name: string, data: { cartCount: number; }): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 123 });