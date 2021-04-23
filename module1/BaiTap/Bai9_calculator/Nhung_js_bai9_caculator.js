function dis(values) {
    document.getElementById("txt_inputnumber").value += values;
}
function tinhtoan() {
    let x=document.getElementById("txt_inputnumber").value;
    let y = eval(x);
    document.getElementById("txt_inputnumber").value=y;
}
function clr() {
    document.getElementById("txt_inputnumber").value="";
}