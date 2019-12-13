class Person {
    constructor(fname,lname, age){
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    getFullName(){
        return this.fname + ' ' + this.lname
    }
}
const person = new Person('Nazriya', 'Fahadh', 26)
console.log("First name is ",person.fname)
console.log("Last name is ",person.lname)
console.log("Age is ",person.age)
console.log("This is ",this)

const fullName = person.getFullName()
console.log("Full name ",fullName)

class Teacher extends Person {
    constructor(fname,lname,age,subject){
        super(fname,lname,age)
        this.subject = subject;
    }
    getSubject(){
        return this.subject;
    }
    static teachingstyle(){
        return 'Boring teaching'
    }
}

const teacher = new Teacher('Rajeshwari', 'Fahad',26,['science','english'])
const fullNameTeacher = teacher.getFullName();
console.log("Full name is ", fullNameTeacher)
const subjects = teacher.getSubject();
console.log("Subjects is ", subjects)

const style = Teacher.teachingstyle()  // static methods call with class name
console.log("Teaching style ", style)