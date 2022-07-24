const firstFunction=(callback)=>{
        console.log("first function")
        for (var i=0; i<1e9;i++){
 
        }
        callback();
    
}

const secondFunction=(callback)=>{
        console.log("second function")
          for (var i=0; i<2e9;i++){
  
          }
          callback();
      
}

const thirdFunction=(callback)=>{
          console.log("third function")
          for (var i=0; i<3e9;i++){
    
          }
          console.log("Finished")
          callback();
      
}

firstFunction(()=>{
    secondFunction(()=>{
        thirdFunction(()=>{})
      })
  });

