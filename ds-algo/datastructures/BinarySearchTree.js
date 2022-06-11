class Node{

  constructor(data){
    this.left=null;
    this.right=null;
    this.data=data;
  }

}

class BinarySearchTree{
   
  constructor(){
      this.head=null
  }

  isEmpty(){
   return this.head===null
  }

  addValue_iterative(value){

        let newNode = new Node(value)

        let currentNode=this.head
        let previousNode=null

         while(currentNode){
              previousNode=currentNode

              if(value>=currentNode.data)
              currentNode = currentNode.right
              else
              currentNode = currentNode.left       
         }
        
         if(value>=previousNode.data){
           previousNode.right=newNode
         }
         else{
           previousNode.left=newNode
         }

  }

  addValue_recursive(value,currentNode,previousNode){
   
      if(currentNode===null){

          let newNode = new Node(value)

          if(value>=previousNode.data){
          previousNode.right=newNode
          }
          else{
            previousNode.left=newNode
          }

      return;
      }
    
    (value>=currentNode.data)?
    this.addValue_recursive(value,currentNode.right,currentNode): 
    this.addValue_recursive(value,currentNode.left,currentNode)

  }

  add(value){
      let node = new Node(value)
       
       if(this.isEmpty()){
           this.head=node
           return
       }
   
         this.addValue_iterative(value)
       
  }

  find(value){  

        let currentNode=this.head

         while(currentNode){

              if(currentNode.data===value)
                return true
              else if(value>=currentNode.data)
                currentNode = currentNode.right  
              else
                currentNode = currentNode.left
         }
        
       return false
  }

  remove(value){

     if(this.isEmpty())
       return ;

     this.removeValue_recursive(value,currentNode)
  }

  findMax(){

       let max=undefined;
       
       let currentNode=this.head

       while(currentNode){
         max=currentNode.data
         currentNode = currentNode.right
       }

       return max
  }

  findMin(){

     let min=undefined;

     let currentNode=this.head

     while(currentNode){
       min=currentNode.data 
       currentNode=currentNode.left
     }

     return min
  }

  removeValue_recursive(value,node){


  }

  getMaxHeight(node=this.head){
        
     if(node===null)
       return -1
     
     return Math.max(this.getMaxHeight(node.left)+1,this.getMaxHeight(node.right)+1)

  }

  getMinHeight(node=this.head){
    if(node===null)
      return -1

      return Math.min(this.getMinHeight(node.left)+1,this.getMinHeight(node.right)+1)
  }



  removeNode(node){

    if(node.left){
         

    }
    else{

    }

  }

  isBalanced(){
    return this.getMaxHeight()-this.getMaxHeight()<=1
  }

  inOrder(node=this.head){ // this gives numbers in order of ascending values
      
      if(node===null)
        return;
      
      this.inOrder(node.left)
      console.log(node.data)
      this.inOrder(node.right)
  }

  preOrder(node=this.head){ 
    // also known as root first order (as it prints the roots of a branch first 
     if(node===null)
      return;
      
      console.log(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
  }

  postOrder(node=this.head){ 
    // also known as leaf first order ( as it prints the leaves of a branch
     if(node===null)
        return;

      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.data)
  }
   
  levelOrder(node=this.head){ 
   
    if(node===null)
      return;

    let height =this.getMaxHeight()+1
    
    for (let i = 0; i <height;i++){
       this.printLevel(node,i)
    }

  }

  printLevel(node,level){
     
    if(node===null)
      return;
    else if(level===0)
      console.log(node.data)
    else {
      this.printLevel(node.left,level-1)
      this.printLevel(node.right,level-1)
    }

  }

}


let bst = new BinarySearchTree();

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)
bst.add(10)


// console.log(bst.find(4))

// console.log(bst.find(3))

// console.log(bst.find(-1))

// console.log(bst.find(2))

// console.log(bst.findMax()===10)

// console.log(bst.findMin()===-1)

// console.log(bst.getMaxHeight()===3)

// console.log(bst.getMinHeight())

// console.log("Is the tree balanced?",bst.isBalanced())

// bst.inOrder()

// console.log("----Preorder----")

// bst.preOrder()


// console.log("----Postorder----")

// bst.postOrder()

// console.log("---Print Level Order---")
bst.levelOrder()