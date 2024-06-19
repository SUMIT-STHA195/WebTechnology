
window.onload = () => {
    let form = document.getElementById('studentForm');
    let inputs = document.querySelectorAll('#studentForm input');
    console.log(inputs);

    inputs.forEach((input) => {
        input.addEventListener('input', (ev)=>{
            if(ev.target.type==='number'){

            }
            if(ev.target.id==='fName' || ev.target.id==='lName'){
                ev.target.value=ev.target.value.trim();
            }
            if(ev.target.id==='age'){
                if(ev.target.value<18 || ev.target.value>40){
                    ev.target.style.color="red";
                    ev.target.style.borderColor="red";
                    ev.target.style.outline="none";
                    ev.target.style.border="1px solid red";
                }
                if(ev.target.value>18 && ev.target.value<40){
                    ev.target.style.color="green";
                    ev.target.style.borderColor="green";
                    ev.target.style.outline="none";
                    ev.target.style.border="1px solid green";
                }
            }
        })
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let fName = document.getElementById('fName').value
        let lName = document.getElementById('lName').value
        let age = document.getElementById('age').value
        let phone = document.getElementById('phoneNo').value
        let address = document.getElementById('address').value
        let gender = document.getElementById('gender').value
        let student = {
            fName,
            lName,
            age,
            phoneNo: phone,
            address,
            gender
        }
        console.log(student);
    })
}