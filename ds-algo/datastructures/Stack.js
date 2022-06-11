/* push pop peek length */

class Stack{

  constructor(){
    this.length=0;
    this.items = {
      
    };
  }

  push(item){
    this.length++;
    this.items[this.length] = item;
    return this.items[this.length]
  }

  pop(){

    if(this.isEmpty())
      return "The stack is empty"
    
    let element= this.items[this.length]
    delete this.items[this.length]
    this.length--
    return element
  }

  peek(){

    if(this.isEmpty())
      return "The stack is empty"
    
    return this.items[this.length]
  }

  isEmpty(){
    return this.length === 0
  }

  length(){
    return this.length
  }

}


let stack=new Stack();

const isPalindrome=(word)=>{

  for (let i=0; i<word.length; i++){
    stack.push(word[i])
  }

  for (let i=0; i<word.length; i++){
    if (word[i]!=stack.pop()){
      return false
    }
  }
  return true
}

let word  ="malayalam"

let word2="youandI"

console.log(isPalindrome(word))

console.log(isPalindrome(word2))



// let myStack= new Stack();

// console.log(myStack.push(5))

// console.log(myStack.push(6))

// console.log(myStack.length)

// console.log(myStack.pop())

// console.log(myStack.pop())

// console.log(myStack.pop())

// console.log(myStack.isEmpty())