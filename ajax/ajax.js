let req=new XMLHttpRequest();
req.open("GET","https://www.something.com/sth");
req.onreadystatechange=(val)=>{
    console.log(val);
}