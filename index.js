function writeCards(namesArray, event){
    const cards = []
    for(let i = 0; i < namesArray.length; i++ ){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`) 
    }
    return cards
}

function countDown(){
   let countDown = 0
   while (countDown < 11)
   console.log(countDown++)
}



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);