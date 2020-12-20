const basket = ['apples', 'oranges', 'grapes'];
for (item of basket) {
    console.log(item);
}

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

for (item in detailedBasket) {
    console.log(item);
}

Object.entries(detailedBasket);