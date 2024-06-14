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

let student25={
    roll:25,
    name:'Manoj Pandey',
    address:'Japan',
    age:25,
    subjects:['Maths','Science','Social'],
    isMarried:true,
    favColor:(isDay)=>{
        return isDay?'Red':'Black';
    }
}
console.log('age:',student25.age);
console.log('favColor:',student25.favColor(new Date().getHours()<10));
console.log('--------------loop(for in) in object ------------');
for(let student in student25){
    console.log(student,student25[student]);
}
let fruits=['apple','kiwi','orange']  
for(let fruitIndex in fruits)
    {
        console.log(fruitIndex,fruits[fruitIndex]);
    }  
    console.log('---------for of loop-------------');
for(let fruit of fruits)
    {
        console.log(fruit);
    }