function tinhsongay() {
    let day = parseInt(document.getElementById("txt_month").value);
    switch (day) {
        case 1: document.getElementById("result").innerHTML=document.write("31"); break;
        case 2: document.getElementById("result").innerHTML=document.write("28 ngày hoặc 29 ngày"); break;
        case 3: document.getElementById("result").innerHTML=document.write("31");break;
        case 4: document.getElementById("result").innerHTML=document.write("30");break;
        case 5: document.getElementById("result").innerHTML=document.write("31");break;
        case 6: document.getElementById("result").innerHTML=document.write("30");break;
        case 7: document.getElementById("result").innerHTML=document.write("31");break;
        case 8: document.getElementById("result").innerHTML=document.write("31");break;
        case 9: document.getElementById("result").innerHTML=document.write("30");break;
        case 10: document.getElementById("result").innerHTML=document.write("31");break;
        case 11: document.getElementById("result").innerHTML=document.write("30");break;
        case 12: document.getElementById("result").innerHTML=document.write("31");break;
        default:
            document.getElementById("result").innerHTML=document.write("Nhập  sai hãy nhập lại ");
    }
}