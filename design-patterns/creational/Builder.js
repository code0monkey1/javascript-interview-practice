//Youtube Link : https://www.youtube.com/watch?v=McF9ak0kKjA 

class Person{

    constructor(name, surname, gender="none",age=0){
      this.name=name
      this.surname=surname
      this.gender=gender
      this.age=age
    }

    toString(){
      return console.log(`Hello , my name is ${this.name} ${this.surname} . I am a ${this.gender} and I'm ${this.age} years old `)
    }

}

class PersonBuilder{
   
  constructor(name, surname)
  {
      this.name=name
      this.surname=surname
     
    }

   setGender(gender){
         
         this.gender=gender
         return this
    }

    setAge(age){

      this.age = age
      return this

    }

    build(){
         return new Person(this.name,this.age,this.gender,this.age)
    }
}

let person = new PersonBuilder("Chiranjeev","Thomas").setAge(20).setGender("Female").build()


person.toString()



