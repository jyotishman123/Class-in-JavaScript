console.log("class");

// class keyword

class CreateUser{
    constructor(name, age){
        console.log("constructor called")
          this.name = name;
          this.age  = age
    }
    about(koko){
        return `${this.name }, ${koko}`
    }

}

const user1 = new CreateUser('harshit',22)


console.log(user1.about("nokou"))


// practice class

class Animal{
    constructor(name , age){
        this.name = name;
        this.age = age
        
    }
    eat(){
        return `${this.name} is eating`
    }

    isSuperCute(){
        return `${this.age <=1}`
    }
    isCute(){
        return true
    }
    

}


const animal1 = new Animal("Ton" , 1)

console.log(animal1.isSuperCute())


 // dog

 // Extend keyword

 // object is also called as instances

 // Parent class is called super class


 class Dog extends Animal{
     constructor(name,age,speed){
        super(name,age)
        this.speed = speed
     }
   run(){
    return `${this.name} is running at ${this.speed} kmph`
   }
 }

 const tommy = new Dog("tommy",1,45);

 console.log(tommy.eat())
 console.log(tommy.isCute())
 console.log(tommy.isSuperCute())
 console.log(tommy.speed)
  console.log(tommy)
  console.log(tommy.run())



// getter and setter

class Person{
   constructor(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName; 
    this.age = age

   }
   get fullName(){
    return `${this.firstName} ${this.lastName}`
   }

   setName(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName
   }
   set fullName(fullName){
   const [firstName , lastName] =  fullName.split(" ")
   }
}
 


const person1 = new Person("harshit","sharma",19)


// the get keyword will give the output as property not as the function

// console.log(person1.fullName())
console.log(person1.fullName)
 console.log(person1.firstName)
 console.log(person1.lastName)

 person1.setName("mohit","yash")
 
 // after using setget()

 console.log(person1.firstName)
 console.log(person1.lastName)
 person1.fullName = "mohit koloko"
console.log(person1.fullName)
console.log(person1)



 
 class Comp{
    constructor(name){
        this.name = name
    }
    bout(name){
        console.log(this.name)
        this.jojo =  name
    }
    anss(){
        console.log(this.jojo)
    }
 }


 const ans = new Comp("hellow")


 ans.bout("Sds")
 ans.anss()

 console.log(ans)


 