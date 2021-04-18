var a = parseInt(prompt("nhập vào số thứ nhất : "));
var b = parseInt(prompt("nhập vào số thứ hai : "));
var opera=prompt("nhập vào phép tính cần tính : ");
switch (opera) {
    case "+":alert("Tổng của hai số là : "+(a+b)); break;
    case "-":alert("Hiệu của hai số là : "+(a-b)); break;
    case "*":alert("Tích của hai số là : "+(a*b)); break;
    case "/":alert("Thương của hai số là : "+(a/b)); break;
    default:
        alert("không có phép toán này ");
        break;
}