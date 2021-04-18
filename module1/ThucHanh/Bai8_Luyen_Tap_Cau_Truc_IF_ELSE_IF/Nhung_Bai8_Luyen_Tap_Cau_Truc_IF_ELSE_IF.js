var username=prompt("input username for you");
var password="";
if (username==="Admin"){
    password=prompt("input password for you ");
    if (password==="TheMaster"){
        alert("Welcome to my team bro ");
    }
    else
        if (password==="null"){
        alert("canceled");
    }
    else{
            alert("Wrong password");
            }
}
else
    if (username==="null"){
        alert("Canceled");
    }
    else {
        alert("I don't know you");
    }