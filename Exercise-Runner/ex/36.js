'use strict'
// Exercise 36 - Longest and Shortest Names
// Implement a function which receives a string of comma separated names, for example: 'Igal,Moshe,Haim',and prints the longest and shortest names.

// Tip: use the function indexOf. note that the function accepts two parameters.

printLongestAndShortestNames('Igal,Moshe,Haim,Adi,Jo')

function printLongestAndShortestNames(namesStr){
    var longestName = ''
    var shortestName = ''
    var currName = ''
    
    for (var i = 0; i < namesStr.length; i++){

        if (namesStr.charAt(i) !== ','){
            currName += namesStr.charAt(i)
        } else {
            if (currName.length < shortestName.length) {
                shortestName = currName
            }
            if (currName.length > longestName.length) longestName = currName
            
            currName = ''
        }
    }
    console.log('longest: ', longestName)
    console.log('shortest: ', shortestName)
}