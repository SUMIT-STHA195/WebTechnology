class Student{
    constructor(fName,lName,age,address){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.address=address;
    }
    setAddress(addr){
        this.address=addr;
    }
    getAddress(){
        return this.address;
    }
}
let student1=new Student('Ram',"Rao",33,"KTM");
let student2=new Student('Rammy',"lolo",32,"AUS");
student2.setAddress("America");
console.log(student1,student2); 
console.log(student1.getAddress());


