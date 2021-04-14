// hiển thị giá trị
function dis(val) {
    document.getElementById("txt_inputnumber").value += val;
}
//đánh giá chữ và trả về kq
// Hàm eval () đánh giá hoặc thực thi một đối số.
function solve() {
    let x=document.getElementById("txt_inputnumber").value;
    let y=eval(x);
    document.getElementById("txt_inputnumber").value=y;
}
//clear textbox
function clr() {
    document.getElementById("txt_inputnumber").value="";
}
