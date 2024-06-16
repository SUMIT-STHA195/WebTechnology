let form=document.getElementById('studentForm');
form.addEventListener('submit',(e)=>{
e.preventDefault();
let fName=document.getElementById('fName').value
let lName=document.getElementById('lName').value
let age=document.getElementById('age').value
let gender=document.getElementById('gender').value
let phone=document.getElementById('phone').value
let color=document.getElementById('color').value
let date=document.getElementById('DOB').value

console.log(fName,lName,age,gender,phone,color,date)
let student={
    fName:fName,
    lName:lName,
    age:age,
    phone:phone,
    gender:gender
}
console.log(student)
})
// function handleFormSubmission(e){
//     let fName=document.getElementById('fName').value
//     let lName=document.getElementById('lName').value
//     let age=document.getElementById('age').value
//     let gender=document.getElementById('gender').value
//     let phone=document.getElementById('phone').value
//     let color=document.getElementById('color').value
//     let date=document.getElementById('DOB').value

//     console.log(fName,lName,age,gender,phone,color,date)
//     let student={
//         fName:fName,
//         lName:lName,
//         age:age,
//         phone:phone,
//         gender:gender
//     }
//     console.log(student)
// }