function calculateResult() {
    let marks = document.getElementById("number").value
    let totalmarks = (marks * 100) / 750
    console.log(marks)
    if (totalmarks >= 80 && totalmarks <= 100) {
        alert("A+ grade")
    }
    else if (totalmarks >= 70 && totalmarks <= 100) {
        alert("A grade")
    }
    else if (totalmarks >= 60 && totalmarks <= 100) {
        alert("B grade")
    }
    else if (totalmarks >= 50 && totalmarks <= 100) {
        alert("C grade")
    }
    else if (totalmarks < 50) {
        alert("You are fail")
    }
    else {
        alert("please enter a valid input")
    }
}