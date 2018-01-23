
// create object using object literal
let obj1 = {
            firstName : "margi",
            lastName : "brahmbhatt",
            college : "iiitb",
            rollNo : "MT2016039",
            fullName : function()
            {
              return this.firstName + " " + this.lastName;
            }
          };

console.log(obj1.fullName());

//create object using new keyword

let obj2 = new Object();
obj2.firstName = "lokender";
obj2.lastName = "rawat";

console.log(obj2.firstName);
console.log(obj2["firstName"]);
let x = "firstName";
console.log(obj2[x]);
//console.log(obj2.x);              // incorrect

//for in loop
text = "";
for(x in obj2)
{
  text = text + " " + obj2[x];      //obj2.x will give undefind
}

console.log(text);
delete obj2.lastName;           //to delete a property of an object
obj2.college = "iiitb";
console.log(obj2);


//trying to give object as a property of object

let nameObject = {
                    firstName : "raj",        //if you define it after outer
                    lastName : "ganatra",      // it will throw error
                    fun : function(){return ("i am the function of innerobj")}
                 }

let obj3 = {
              college : "iiitb",
              rollNo : " MT2016039",
              name : nameObject,
              fun : function(){return ("i am the function of obj3")}
          }


console.log(obj3.name.fun());
