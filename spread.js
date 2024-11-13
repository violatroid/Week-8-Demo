
fruit = ["apple", "banana", "cherry"]
console.log("ARRAY:", fruit) //show array

console.log("fruit", ...fruit)
console.log("JOIN", fruit.join(" "))

function menu(a, b, a) {
    console.log(a);
    console.log(b);
    console.log(c);
}

menu(...fruit) //spread " array -> individual"