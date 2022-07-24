/*
Asynchronous Javascript : https://www.youtube.com/watch?v=OLbM3f68Gk0
Website to simulate async Javascript: http://latentflip.com/loupe
*/

/*  
     ````Four components of Async Javascript :````

       1. Call Stack Section ( the place where each function initially gets called )
         2. Web Apis Section ( the place where async functions live and are executed )
              3. Event Queue Section ( the place where events are queued  waiting to be executed , after the Call stack gets is empty )
       4. Event Loop ( The loop that always checks if the Call stack is empty and if it is empty it checks the Event Queue and if there are events it pushed them one by one to the Call stack, to be executed )

*/

// will run first

console.log("synchronous");

// wil run LAST , after all operations in the call stack are completed
const timeout = setTimeout(() => {
       
        console.log("async function completed")

  },2000)

// wil run second
const syncLoop = () => {
    console.log("asynchronous")
    let i=0
    while(i<7e9){
        i++
    }
    console.log("Synchronous function  completed!")
}

syncLoop();