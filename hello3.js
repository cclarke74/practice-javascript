/*function fun1(x, y, z) {
    console.log(x);
    console.log(arguments[0]);
    //expected output: 1
    console.log(arguments[1]);
    //expected output: 2
    console.log(arguments [2]);
    //expected output: 3

}
fun1(1, 2, 3); 
*/
 
const student = {
    // data property
    firstName: 'Ahana',

    // accessor property (getter)
    get name() {
        return this.firstName;
    },

    set name(newName) {
        this.firstName = newName;
    }
}
    student.firstName = 'Carlos'
   // student.name = 'Carlos'

console.log(student.firstName)
console.log(student.name)