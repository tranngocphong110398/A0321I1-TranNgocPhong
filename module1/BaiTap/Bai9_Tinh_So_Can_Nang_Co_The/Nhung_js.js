function tinhtoan() {
    let chieurong = parseFloat(document.getElementById("weightpeople").value);
    let chieucao = parseFloat(document.getElementById("heightpeople").value);
    let BMI = chieurong / (chieucao * 2);
    if (BMI < 18.5) {
        document.write("Underweight");
    } else if (BMI < 25.0) {
        document.write("Normal");
    } else if (BMI < 30.0) {
        document.write("Overweight");
    } else {
        document.write("Obese");
    }
}