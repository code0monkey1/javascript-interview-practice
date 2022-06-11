 /* The REVEALING module pattern !!
  this is by default used in the Revealing Module Pattern in Node Js where only the things that are exported are available to the outside world
*/

const summerSalad= (
  ()=>{
    const fruit="mango";

    const slicedFruit=()=>fruit.split('').join('|');

    const makeSalad= ()=>{
      console.log(`Your ${slicedFruit()} salad is ready!`);
    }

    return {
      makeSalad
    }
}
)()

summerSalad.makeSalad();