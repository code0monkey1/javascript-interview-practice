class Employee {
  
     constructor(name , occupation) {
          this.name = name;
          this.occupation = occupation;
        }

      say(){
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

const factory = new EmployeeFactory()

const developer = factory.create("Jack","Developer")

developer.say()

const tester = factory.create("Sparrow",'Tester')

tester.say()
