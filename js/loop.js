for(let i=10;i>0;i--){
    console.log('for',i);
}
console.log("-------------------");
let a=5;
while(a>0){
    console.log('while',a);
    a--;
}
console.log("-------------------");
let b =5
do{
    console.log('do-while',b);
    b--;
}while(b>0);
console.log("-------------------");
let students=["Ram","Shyam","Hari","Sita"]
students.forEach((student,index)=>{
    console.log(index,student);
})