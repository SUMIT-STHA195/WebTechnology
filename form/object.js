let form = document.getElementById('studentForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let phone = document.getElementById('phone').value
    let color = document.getElementById('color').value
    let date = document.getElementById('DOB').value

    console.log(fName, lName, age, gender, phone, color, date)
    let student = {
        // fName:fName,
        // lName:lName,
        // age:age,
        // phone:phone,
        // gender:gender
        fName,
        lName,
        age,
        phone,
        gender
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

let user={
    personalDetail:{
        userName:"ram123",
        fullName:"RAM RAI",
        address:{
            city:"Kathmandu",
            pin:"140422",
            country:"Nepal"
        }
    },
    email:"ram@gmail.com",
    getFavColor:(day)=>{
        return day?"RED":"BLACK"
    },
    isMarried:false,
    gender:"MALE",
    age:34,
}
console.log(user.personalDetail.address.pin);
user.personalDetail.fullName="Ram Kumar Rai";
console.log(user.personalDetail.fullName);
// delete an item by key

delete user.isMarried;
console.log(user.isMarried);
// print array of keys
console.log(user.getFavColor(true));
let keys=Object.keys(user);
console.log(keys);
// prints array of values
let values=Object.values(user);
console.log(values);
// print array of both keys and values
let keyValues=Object.entries(user);
console.log(keyValues[0],keyValues[1]);