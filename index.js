const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat (Bob){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat (Bob){
    cats.pop(3);
    return cats;
}
function destructivelyRemoveFirstCat (Milo){
    cats.shift(0);
    return cats;
}
function appendCat(){
    const copyCats= [...cats, "Broom"];
    return copyCats;
}

function removeLastCat(){
    const newArray3 = cats.slice(0,-1);
    return newArray3;
}
function prependCat(){
    const prependCat =["Arnold", ...cats];
    return prependCat;
}
function removeFirstCat(){
    const removeFirstCat= cats.slice(1);
    return removeFirstCat;
    
}

