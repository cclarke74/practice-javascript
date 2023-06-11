let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName ()
{
    return this.firstName + ' ' + this.lastName;
},
};

let person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName ()
{
    return this.firstName + ' ' + this.lastName;
},
};

/* Factory Function
* Is a function that creates object.
more effective than creating multiple users
*/

function createPerson(first, last){
    return{
        firstName: first,
        lastName: last,
        getFullName() {
            return this.firstName + ' ' + this.lastName;
        }
    };
}

person1 = createPerson("John", "Doe");
person2 = createPerson("Jane", "Doe");

console.log(person1);
console.log(person2);