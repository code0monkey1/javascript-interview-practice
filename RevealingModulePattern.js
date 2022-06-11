/* this is a way to keep private functionality hidden from the outside world and only expose the functionality that is needed */

/* We can use symbols here because symbols are unique and immutable primitives in es6 to implement pseudo private class methods */

let mongoDb = Symbol('mongoDb');

class Mongo{

  constructor(){
    this[mongoDb] = 'mongodb';
  }
  
  getDb(){
    return this[mongoDb];
  }
  
  setDb(db){
    this[mongoDb] = db;
  }


}