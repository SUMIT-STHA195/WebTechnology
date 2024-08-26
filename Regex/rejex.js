// gim=global,case sensitive,multiline
let text = "MOnu is chor";
let changedString=text.replace(/MOnu/gi,"Lampat");
let value =document.getElementById('name');
value.innerText=text;
 if(changedString){
    value.addEventListener('mouseover',function(){
        value.innerText=changedString;
    })
    value.addEventListener('mouseout',function(){
        value.innerText=text;
    })
    value.innerText=text;
 }

