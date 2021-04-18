var browser = prompt("Enter the  browser you want ");
switch (browser) {
    case "edge": alert("You've got the Edge!"); break;
    case "Chrome": alert("Okay we support these browsers too"); break;
    case "Firefox": alert("Okay we support these browsers too"); break;
    case "Safari": alert("Okay we support these browsers too"); break;
    case "Opera": alert("Okay we support these browsers too"); break;
    default:
        alert("We hope that this page looks ok!");
        break;
}
var a=prompt("Enter one of three: số 0-1 -2 - 3");
switch (a) {
    case "0": alert("bạn đã nhập số 0"); break;
    case "1": alert("bạn đã nhập số 1"); break;
    case "2": alert("bạn đã nhập số 2"); break;
    case "3": alert("bạn đã nhập số 3"); break;
    default:
        alert("các số vừa nhập trong có kết quả nào cả ");
        break;
}
var numbering=prompt("Enter any number : ");
if (numbering>0){
    alert("số này lớn hơn 0 nên hiển thị 1 ");
}
else if (numbering<0){
    alert("số này nhỏ hơn 0 nên hiển thị -1");
}
else {
    alert("còn lại thì hiển thị 0");
}
