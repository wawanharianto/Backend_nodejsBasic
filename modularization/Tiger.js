class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    growl() {
      console.log('grrrrr!');
    }
  }
  
  // TODO 1: Ekspor class Tiger
  module.exports = Tiger;