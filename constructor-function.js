let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName ()
{
    return this.firstName + ' ' + this.lastName;
},
};

function Person(first, last){
    this.firstName: first,
    this.lastName: last,
}

person1 = new Person("John", "Doe")
console.log(person1)