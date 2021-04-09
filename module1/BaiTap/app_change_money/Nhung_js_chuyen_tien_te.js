function chuyendoitien() {
    let a=document.getElementById("txt_money").value;
    let b=document.getElementById("from").value;
    let c=document.getElementById("currency").value;
    let d;
    if(b === "VietNam" && c === "America"){
          d=a/23000;
          document.getElementById("kq").innerHTML=d;
     }
    else
        if (b=== "America" && c=== "VietNam"){
         d=a*23000;
         document.getElementById("kq").innerHTML=d;
    }
        else
            alert("chọn lại from vs currency");

}