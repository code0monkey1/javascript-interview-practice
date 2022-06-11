class Employee {
  
     name;
     occupation;

      constructor(name , occupation) {
          this.name = name;
          this.occupation = occupation;
        }

      toString(){
         console.log("Hi my name is "+this.name+" and I am a "+this.occupation)
      }
  }


class Tester extends Employee {

  constructor(name) {
     super(name,'Tester')
  }

}

class Developer extends Employee {
  
    constructor(name) {
      super(name,'Developer');
    }


}

class EmployeeFactory {

     create(name, occupation) {
           
           switch (occupation) {
              case 'Tester':
                  return new Tester(name);
              case 'Developer':
                  return new Developer(name);
           }
          }
  

}

// const factory = new EmployeeFactory()

// const developer = factory.create("Jack","Developer")

// developer.say()

// const tester = factory.create("Sparrow",'Tester')

// tester.say()


// Factory pattern can be used to  to create instances of classes that enforce encapsulation using closures 

// This mini createPerson factory creates a Person object with only the name
// exposed by the getName() method.

function createPerson(name) {

  const privateProperties = {

  }

  const person={

    setName(name) {
       
      if(!name){
          throw new Error("Name is required")
       }
     
      privateProperties.name = name;
       
    },

    getName() {
        return privateProperties.name;
    }
  }
   
  person.setName(name)

  return person;

}

let chiru = new createPerson('Chiru')
console.log(chiru.getName())

// Code Profiler 


class Profiler {

    constructor(label) {
        this.label = label
        this.lastTime=null
    }

    start() {
        this.lastTime = process.hrtime()
    }

    end() {
        const diff = process.hrtime(this.lastTime)
        console.log(`Timer : ${this.label} took ${diff[0] * 1e3 + diff[1] / 1e6} ms`)
    }

}

const blankProfiler = {
    start() {},
    end() {}
}

const createProfiler = (label) => {
    if (process.env.NODE_ENV === 'production') {
        return blankProfiler
    }
    return new Profiler(label)
}




function getAllFactors  (intNumber) {

    const   profiler = createProfiler( `Finding all factors of ${intNumber}`)
    profiler.start()
    const   factors = []
    for   (let   factor = 2; factor <= intNumber; factor++) {
        while ((intNumber % factor) === 0) {
            factors.push(factor)
            intNumber = intNumber / factor
        }
    }
    profiler.end()
    return   factors
}

const myNumber = process.argv[2]
const myFactors = getAllFactors(myNumber)
console.log(`Factors of ${myNumber} are: `, myFactors)
