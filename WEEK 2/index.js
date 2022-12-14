// Exercise: Level 1

//(1)Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'

//(2)Print the string on the browser console using console.log()

console.log(challenge)

//(3)Print the length of the string on the browser console using console.log()

console.log(challenge.length)

//(4)Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase())

//(5)Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase())

//(6)Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(0, 2))

//(7)Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substr(3))

//(8)Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'))

//(9)Split the string into an array using split() method

console.log(challenge.split())

//(10)Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))

//(11)'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let Exercise0 = 'Facebook Google Microsoft Apple IBM Oracle Amazon'
console.log(Exercise0.split(' '))

//(12)Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Python'))

//(13)What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))

//(14)What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(11))

//(15)Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf('a'))

//(16)Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('a'))

//(17)Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let Exercise1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(Exercise1.indexOf('because'))

//(18)Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(Exercise1.lastIndexOf('because'))

//(19)Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(Exercise1.search('because'))

//(20)Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let challenge1 = '   30 Days Of JavaScript   '
console.log(challenge1.trim())

//(21)Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('30'))

//(22)Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('Script'))

//(23)Use match() method to find all the a???s in 30 Days Of JavaScript

console.log(challenge.match(/a/gi))

//(24)Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let challenge2 = '30 Days of'
console.log(challenge2.concat('JavaScript'))

//(25)Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))



// Exercise: Level 2

//(1)Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//(2)Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//(3)Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num3 = '10'
let num3Int = parseInt(num3)
console.log(typeof num3Int)
console.log(num3Int)

//(4)Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num4 = '9.8'
let num4Int = parseInt(num4)
console.log(num4Int)

//(5)Check if 'on' is found in both python and jargon

let py = 'python'
let jn = 'jargon'

console.log(py.includes('on'))
console.log(jn.includes('on'))

//(6)I hope this course is not full of jargon. Check if jargon is in the sentence.

let Exercise2 = 'I hope this course is not full of jargon'
console.log(Exercise2.includes('jargon'))

//(7)Generate a random number between 0 and 100 inclusively.

const num0 = Math.floor(Math.random()*101)
console.log(num0)

//(8)Generate a random number between 50 and 100 inclusively.

const num1 = Math.floor(Math.random()*50 ) + 50;
console.log(num1)

//(9)Generate a random number between 0 and 255 inclusively.

const num2 = Math.floor(Math.random()*256);
console.log(num2)

//(10)Access the 'JavaScript' string characters using a random number.


//(11)Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//(12)Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let Exercise4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(Exercise4.substr(31, 23))




// Exercises: Level 3

//(1)'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let Exercise5 = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
console.log(Exercise5.match(/love/gi))

//(2)Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(Exercise4.match(/because/gi))

//(3)Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//(4)Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let Exercise6 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 
let regEx = /\dt/
console.log(Exercise6.match(/\dt/g))

