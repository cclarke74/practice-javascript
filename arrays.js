let prompt = require('prompt-sync') ();

let menu = {
    burger: 100,
    noodles: 200,
    pizza: 300,
    fries: 50,
    cola: 80
}

let cart = []

console.log("Initial Cart["+cart.length+"] Details: "+cart);

// let choice =prompt("Enter Your Choice:")
// console.log("Your Choice: "+choice);

while(true){
    let dishName =prompt("Enter Dish Name:")

    if(dishName == "quit"){
        break
    }
    let dish = {
        name: dishName,
        price: menu[dishName]
    }
    cart.push(dish);

   
}
console.log("Final Cart["+cart.length+"] Details: "+cart);
for(let dish of cart){
    console.log(dish);
}