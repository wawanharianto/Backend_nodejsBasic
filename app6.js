const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 

const onCoffeeOrderListener = ({name, price}) => {
    makeCoffee({name});
    makeBill({price});
}
// Memicu event 'coffee-order' terjadi.



// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);
myEventEmitter.on('coffee-order', onCoffeeOrderListener);
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */