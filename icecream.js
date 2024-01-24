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

// const arr = [5, 1, 6, 3];

// function triple (x){
//     return x * 3;
// } 
// const output = arr.map(triple);
// console.log(output);




// let isShopOpen = true;
// let order = (time, work)=>{
//     return new Promise((resolve, reject)=>{
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(work())

//             }, time)
            
//         }

//         else{
//             reject(console.log("Our shop is closed"))
//         }
//     })
// };

// order(2000, ()=>{
//     console.log(`${stocks.Fruits[0]} was selected`)
// })
// .then(()=>{
//     return order(0, ()=> console.log("production has started"))
// })
// .then(()=>{
//     return order(2000, ()=> console.log("fruits has been chopped"))
// })
// .then(()=>{
//     return order(1000, ()=> console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} added`))
// })
// .then(()=>{
//     return order(1000, ()=> console.log("start the machine"))
// })
// .then(()=>{
//     return order(2000, ()=> console.log(`icecream placed on ${stocks.Holder[1]}`))
// })
// .then(()=>{
//     return order(3000, ()=> console.log(`Added ${stocks.Toppings[1]} as toppings`))
// })
// .then(()=>{
//     return order(2000, ()=> console.log("serve the icecream"))
// })

// .catch(()=>{
//     console.log("Customer left")
// })



// let order = (fruitName, callProduction)=> {

//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[fruitName]} was selected`)
//         callProduction();
//     }, 2000)
    
    
// };

// let production = ()=> {

//     setTimeout(()=>{
//         console.log("production has started")

//         setTimeout(()=>{
//             console.log("The fruit has been chooped")
//         },2000)

//     }, 0000)
   
// };
// order("0", production);

// let count = 0;
// document.querySelector('#decreaseBtn').onclick = () => {
//     count -= 1;
//     document.querySelector('#countL').innerHTML = count;
// }
// document.querySelector('#resetBtn').onclick = () => {
//     count = 0;
//     document.querySelector('#countL').innerHTML = count;
// }
// document.querySelector('#increaseBtn').onclick = () => {
//     count += 1;
//     document.querySelector('#countL').innerHTML = count;
// }