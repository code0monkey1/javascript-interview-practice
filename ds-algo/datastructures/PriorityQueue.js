class PriorityQueue{
  
  constructor(){
    this.collection = [];
  }

  isEmpty(){
    return this.collection.length===0;
  }

  enqueue(element){ //[priority,element]

      if(this.isEmpty()){
      
        this.collection.push(element);

      }
      else{

        let added=false;

        for (let i=0; i<this.collection.length; i++) {

              if(this.collection[i][0]>element[0]){
                this.collection.splice(i,0,element)
                added=true;
                break;
              }
        }

        if (! added){
          this.collection.push(element);
        }

      }

  }

  dequeue(){ 
      
    return this.collection.shift();

  }

  toString(){
    return this.collection.toString()
  }

  length(){
    return this.collection.length
  }

}


let q = new PriorityQueue();

q.enqueue([0,"Hello world!"])
q.enqueue([5,"Bye world"])

console.log(q.toString());


q.enqueue([3,"Middle World"])

console.log(q.toString())