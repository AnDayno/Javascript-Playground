/*
    Fisher-Yates algorithm - is an algorithm for shuffling a finite sequence.
                             The algorithm takes a list of all the elements of a sequence,
                             and continually determines the next element in the shuffled sequence
                             by drawing a element from the list until no elements remain.
*/

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.lenght - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
    }
}