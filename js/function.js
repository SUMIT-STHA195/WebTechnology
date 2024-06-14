//14th june (function)
// Mainly Predefinc=ed and user-defined  fumction
// User Defined : Anonymus function and named functions
function getStudents(size){
    let container=[];
    for(i=0;i<size;i++){
        container.push(i);
    }
    // return Array.from({length:size})
    return container;
}
let student=getStudents(20);
console.log(student);
// Anonymous finction,has no name but is associated to a variable
// const _getStudents=function(size){
//     return Array.from({length:size})
// }
const _getStudents=(size)=>{
    return Array.from({length:size})
}
let _student=_getStudents(30);
console.log(_student);

// call back

const parseStudent=(name)=>{
    console.log(name);
}
function getStudentDetailById(id,cb){
    // fetch call from server to retrive student detail byID;
    cb("Ram Rai")
}
let studentDetail=getStudentDetailById(1,parseStudent)