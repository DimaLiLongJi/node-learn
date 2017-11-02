const util = require('util');

function Base() {
  this.name = 'base';
  this.base = '1991';
  this.sayhello = () => {
    console.log('Hello' + this.name);
  };
}
Base.prototype.showName = () => {
  console.log(this.name);
}

function Sub() {
  this.name = 'sub';
}

// util.inherits(Base, Sub);
let objBase = new Base();
// objBase.showName(); // base


let objSub = new Sub();
// objSub.showName();

console.log(util.inspect(objBase, true));
