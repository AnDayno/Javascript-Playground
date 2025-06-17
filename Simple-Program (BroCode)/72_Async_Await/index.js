/*
    Async/Await = Async = makes a function return a promise
                  Await = makes an async function wait for a promise

                  Allows you write asynchronous code in a synchronous manner
                  Async doesn't have resolve or reject parameters
                  Everything after Await is placed in an event queue
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const dogWalked = true;

        if(dogWalked){
            resolve("You walk the dog 🐕");
        }
        else{
            reject("YOU LOST THE DOG!");
        }
    }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You clean the kitchen 🧹");
        }
        else{
            reject("YOU BURNED DOWN THE KITCHEN");
        }
    }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

        const trashTakenOut = true;

        if(trashTakenOut){
                    resolve("You take out the trash ♻️");
        }
        else{
            reject("THE DOG ATE THE TRASH");
        }
    }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the Chores!");
    }
    catch(error){
        console.error(erro);
    }
}

doChores();