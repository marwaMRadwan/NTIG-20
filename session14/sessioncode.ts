// let x : number = 6
// console.log(x)

// let myFun = (txt:string) : string=>{
//     return txt
// }

// console.log(myFun("hello"))
//oop
//Encapsulation
// class User{
//     //access modifier => public private protected
//     private name:string|number
//     age:number
//     salary:number
//     readonly pi=3.14
//     constructor(newName: string|number,  newSalary:number, newAge:number=20){
//         this.name = newName
//         this.age=newAge
//         this.salary=newSalary
//     }
//     //getter and setter
//     set _name(val:string|number) { this.name = val}
//     get _name():string|number{return this.name}
//     showData(){
//         console.log(`${this.name}- ${this.age}- ${this.salary}`)
//     }
// }



// const u1 = new User("marwa", 1000)
// u1.showData()
// u1._name="ahmed"
// // const u2 = new User()

// let age:any ="bvfgc"
// age=true
// age=15



//interface
interface Grade{
    subject:string
    val: number
}

// const g1:Grade = {
//     subject:"x",
//     val:50
// }
// class User{
//     protected name:string
//     protected age:number
//     constructor(name:string, age:number){
//         this.name=name
//         this.age=age
//     }
//     showData(){
//         console.log(`name: ${this.name}`)
//         console.log(`age: ${this.age}`)
//     }
// }
// class Student extends User{
//     static d = 0
//     private grades: Grade[] = []
//     constructor(name:string, age:number){
//         super(name, age)
//     }

//     addGrade(subject:string, val:number){
//         const sub:Grade = {subject, val}
//         this.grades.push(sub)
//     }
//     static x(){
//         console.log("x")
//     }

//     showData(){
//         // console.log(`name: ${this.name}`)
//         // console.log(`age: ${this.age}`)
//         super.showData()
//         this.grades.forEach(g=> console.log(`${g.subject}=> ${g.val}`))        
//     }
// }

// class Teacher extends User{
//     private salary:number
//     constructor(name:string, age:number,salary:number){
//         super(name, age)
//         this.salary=salary
//     }
// }

// const s1 = new Student("mohammed", 25)
// s1.addGrade("math", 50)
// s1.addGrade("arabic", 80)
// s1.showData()

// Student.x()


// interface X{
//     name:string
//     show():void
// }

// class Test implements X{
//     name:string=""
//     show():void{}
// }

//abstract 
// abstract class A{
//     a1(){
//         console.log("a1")
//     }
//     abstract a2():void
// }

// class B extends A{

// }
// const b1 = new B()
// b1.a1()


