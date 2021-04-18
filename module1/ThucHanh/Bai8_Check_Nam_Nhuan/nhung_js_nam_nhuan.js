 // let year=parseInt(prompt("Nhập vào số năm cần tính "));
// if (year%4==0){
//     if (year%100==0) {
//         if (year % 400 == 0) {
//             alert(" "+year + " Là Năm Nhuận ");
//         } else {
//             alert(" "+year + "k phải năm nhuận");
//         }
//     }else{
//         alert(" "+year+ "là Năm Nhuận");
//     }
// }
// else {
//     alert(" "+year+ "không phải là năm nhuận");
// }
//Clean Code
let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}