
const firstFunction=()=>{

  return new Promise((resolve, reject)=>{
      console.log("First function")
      reject("First function failed!!")
  })
}

const secondFunction=()=>{

  return new Promise((resolve, reject)=>{
    console.log("second function")
      resolve("Second function Ran")
  })
}

const thirdFunction=()=>{

  return new Promise((resolve, reject)=>{
    console.log("third function")
      resolve("Third function Ran")
  })
}

 firstFunction()
  .then(secondFunction)
  .then(thirdFunction)
  .then((message)=>{
    console.log("Promise Success  message:",message)
   
  }).catch(error=>{
    console.log("Promise Error error:",error)
    
  })
    
