function setCookie(cookieName,cookieValue,expiryTime){
    document.cookie=`${cookieName}=${cookieValue}`
}
setCookie('name','ram');
setCookie('age','20');
setCookie('address','kathmandu');
function getCookieByKey(cookieName){
    let stored=document.cookie;
    let storedArr=stored.split(';');
    storedArr.forEach(item=>{
        let entries=item.split('=');
        let key=entries[0].trimStart();// used to remove space in key
        let value=entries[1].trimStart();
        if(cookieName===key){
            val=value;
        }
        // console.log(key);
    })
    return val;
    // console.log(storedArr);
}
console.log(getCookieByKey('name'));
getCookieByKey('ram');
console.log(document.cookie);
console.log(getCookieByKey('address'));