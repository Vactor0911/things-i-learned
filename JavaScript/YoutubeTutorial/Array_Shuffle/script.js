const aryCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const aryNewCard = aryCard.map(card => card);

// 간단한 방식
aryCard.sort(() => Math.random() - 0.5);

// Fisher-Yates Shuffle 알고리즘
const shuffle = (array) => {
    for (let i = array.length-1; i>0; i--) {
        const random = Math.floor(Math.random() * (i+1));
        [array[i], array[random]] = [array[random], array[i]];
    }
};
shuffle(aryNewCard);

console.log(aryCard);
console.log(aryNewCard);