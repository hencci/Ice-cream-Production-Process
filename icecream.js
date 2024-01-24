let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquids : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"],
};
let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen(){
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(0)
        console.log("Production has started")
        await time(2000)
        console.log("Fruit has been chooped")
        await time(1000)
        console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} added`)
        await time(1000)
        console.log("Start the machine")
        await time(2000)
        console.log(`icecream placed on ${stocks.Holder[0]}`)
        await time(3000)
        console.log(`${stocks.Toppings[0]} added as toppings`)
        await time(2000)
        console.log("Serve the icecream")
    } catch (error) {
        console.log("Customer left", error)
    }
    finally {
        console.log("Day ended, Shop closed")
    }
}
kitchen();
