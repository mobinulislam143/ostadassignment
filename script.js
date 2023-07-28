// --------------1) Topic: Online Store Discount Calculator (If-Else Statement)
function discountOffer() {
    var totalAmount = parseInt(prompt("Enter your Purchase amount: "))
    if (totalAmount < 50) {
        console.log("No discount will be given to you.")
    }
    else if (totalAmount <= 100) {
        const discountAmount = totalAmount * (5 / 100)
        console.log(`5 & ${totalAmount} + ${discountAmount}`)
    }
    else if (totalAmount <= 200) {
        const discountAmount = totalAmount * (10 / 100)
        console.log(`5 & ${totalAmount} + ${discountAmount}`)
    }
    else if (totalAmount >= 200) {
        const discountAmount = totalAmount * (15 / 100)
        console.log(`5 & ${totalAmount} + ${discountAmount}`)
    }

}
discountOffer()

// -------------- 2) Topic: Filter Even Numbers
function filterEvenNumber(number) {
    var evenNumber = []
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            evenNumber.push(number[i])
        }
    }
    return evenNumber
}
var number = [12, 34, 45, 23, 660, 555, 6, 78, 54, 90];
var evenNumber = filterEvenNumber(number)
console.log("Filtered Even number: " + evenNumber)

// --------------3) Topic: Multiplication Table Generator
function multiplicationNum() {
    var inputNum = parseInt(prompt("Enter a Inteager number: "))
    for (let i = 1; i <= 10; i++) {
        let multiplicNum = `${i} X ${inputNum} = ${i * inputNum}`
        console.log(multiplicNum)
    }
}
multiplicationNum()

// -------------- 4) Topic: Grade Calculator (JavaScript Switch Case)

function calculateGrade() {
    var subMark = parseInt(prompt("Enter your subject mark: "))
    let grade;
    switch (Math.floor(subMark / 10)) {
        case 9:
            grade = 'You got A'
            break;
        case 8:
            grade = "You got B"
            break;
        case 7:
            grade = "You got C"
            break;
        case 6:
            grade = 'You got D'
            break
        default:
            grade = "F"
    }
    return grade;
}
const result = calculateGrade()
console.log(result)