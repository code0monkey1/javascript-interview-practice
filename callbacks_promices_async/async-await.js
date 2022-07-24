/*
   Video Tutorial For the Same : https://www.youtube.com/watch?v=c-0P67cxTbI&t=1613s
*/

const firstFunction=()=>{
  return new Promise((resolve, reject)=>{
    console.log("first function")
      resolve("First function Ran")
  })
}

const secondFunction=()=>{
  return new Promise((resolve, reject)=>{
    console.log("second function")
      reject("Second function Failed")
  })
}

const thirdFunction=()=>{
  return new Promise((resolve, reject)=>{
    console.log("third function")
      resolve("Third function Ran")
  })
}

const runAllFunction = async ()=>{
  try{
    const first = await firstFunction()
    const second = await secondFunction()
    const third = await thirdFunction()
    console.log("Promise Success  message:",first,second,third)
  }catch(error){
    console.error("Promise Error error:",error)
    throw new Error("Promise Error")
  }
}

runAllFunction().then(()=>{
  console.log("Finished")
}
).catch(error=>{
  console.error("Promise Error error:",error)
}
)
