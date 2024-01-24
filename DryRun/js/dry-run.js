'use strict'

var n = 98765
printDigits(n)

function printDigits(num){
    while (num > 0) {
        var digit = num % 10
        console.log(digit)
        num = parseInt(num / 10)
    }
}