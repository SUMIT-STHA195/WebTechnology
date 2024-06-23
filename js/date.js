// Date
let date=new Date();
console.group(date.getDay());
console.log(date.getDay());
console.log(date.getDay());
date=new Date();
document.title=getDocumentTitle(date);
setInterval(()=>{
    date=new Date();
    document.title=getDocumentTitle(date);
},1000)
function getDocumentTitle(currentDate){
    let hour=currentDate.getHours();
    let minute=currentDate.getMinutes();
    let second=currentDate.getSeconds();
    return `${addPadStart(hour)}:${addPadStart(minute)}:${addPadStart(second)}`;
}
function addPadStart(num){
    let strEquvalend=String(num);
    return strEquvalend.padStart(2,'0');
}