//class -> blueprint
//leg,speak,name

// class Animal{   
//     constructor(name , legCount, speaks){   // 1.assign  attributes
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
//     speak(){      // 2.functions -> these are normal functions associated with objects
//         console.log(  this.name + this.speaks );
//     }
// }
// let dog = new Animal("Tommy ", 4 , "bhow bhow");  // creating an object
// let cat  = new Animal("Jennie " , 4 , "meow meow");
// dog.speak();    //calling out the function
// cat.speak();


/* -> Static function 
        ->These are functions which are not associated with objects, they are associated with class  itself
*/



class Animal{   
    constructor(name , legCount, speaks){   // 1.assign  attributes
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType(){
        console.log("Animal")
    }
    speak(){      // 2.functions -> these are normal functions associated with objects
        console.log(  this.name + this.speaks );
    }
}
console.log(Animal.speak())  //-> result in an error (because function can be called directly on the objects but not class)
let dog = new Animal("Tommy ", 4 , "bhow bhow");  // creating an object
let cat  = new Animal("Jennie " , 4 , "meow meow");
dog.speak();    //calling out the function
cat.speak();


// if want to call something directly on the class you use static method
