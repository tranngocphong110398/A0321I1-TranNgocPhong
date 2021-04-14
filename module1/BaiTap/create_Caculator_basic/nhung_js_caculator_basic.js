function add() {
    let x=parseInt(document.getElementById("txt_text1").value);
    let y=parseInt(document.getElementById("txt_text2").value);
    let c=x+y;
    document.getElementById("result").innerHTML=c;

}
function sub() {
    let x=parseInt(document.getElementById("txt_text1").value);
    let y=parseInt(document.getElementById("txt_text2").value);
    let d=x-y;
    document.getElementById("result").innerHTML=d;

}
function mul() {
    let x=parseInt(document.getElementById("txt_text1").value);
    let y=parseInt(document.getElementById("txt_text2").value);
    let e=x/y;
    document.getElementById("result").innerHTML=e;

}
function div() {
    let x=parseInt(document.getElementById("txt_text1").value);
    let y=parseInt(document.getElementById("txt_text2").value);
    let f=x*y;
    document.getElementById("result").innerHTML=f;

}
function clr() {
    document.getElementById("txt_text1").value="";
    document.getElementById("txt_text2").value="";
}
// function bang() {
//     let x=parseInt(document.getElementById("txt_text1")).value;
//     let y=eval(x);
//     document.getElementById("txt_text2").innerHTML=y;
// }