'use strict'

// Exercise 40 - Lorem Ipsum

// Implement a function named getLoremIpsum(wordsCount) 
// which return a sentence 
// with random dummy text (google: lorem ipsum...)

// Here are the steps you may use to solve this:

// Create a string of all the characters in the English alphabet.
// Write a function named getWord() which returns 
// a single word made of 3 - 5 random letters. 
// The length of the word will be generated randomly.

// Call this function in a loop to create a sentence.

var lorem = getLoremIpsum(4)
console.log(lorem)

function getLoremIpsum(wordCount) {
	var words = ''

	for (var i = 0; i < wordCount; i++) {
		var word = getWord()
		words += word + ' '
	}
	return words
}

function getWord() {
	var letters = 'abcdefghijklmnopqrstuvwxyz'
	var wordLength = getRandomInt(3, 6)
	var word = ''

	for (var i = 0; i < wordLength; i++) {
		var randomNum = getRandomInt(0, letters.length)
		word += letters.charAt(randomNum)
	}
	return word
}

function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
