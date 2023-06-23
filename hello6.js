const person = {

    email:"hello@gmail.com",
    phone: "123456789",

    fullName : function() {
        return this.email + " " + this.phone;
    }
}

console.log(person.fullName())