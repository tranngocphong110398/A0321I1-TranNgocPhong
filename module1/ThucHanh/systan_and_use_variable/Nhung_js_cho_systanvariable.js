let i=10;
let f=20.5;
let b=true;
let s="Hà Nội";
let widthhcn=parseInt(prompt("Nhập vào chiều rộng hình chữ nhật"));
let heighthcn=parseInt(prompt("nhập vào chiều dài hình chữ nhật"));
function tinhtoan(){
    let a = parseInt(prompt("nhập vào số a"));
    let b = parseInt(prompt("nhập vào số b"));
    if (a % b == 0) {
        alert("số a chia hết cho b");
    } else {
        alert("số a không chia hết cho b");
    }
}
let dientichhcn=widthhcn*heighthcn;
alert(dientichhcn);
document.write("i ="+i);
document.write("<br>");
document.write("f ="+f);
document.write("<br>");
document.write("b ="+b);
document.write("<br>");
document.write("s ="+s);
document.write("<br>");
