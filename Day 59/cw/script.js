//1.კონსოლში გამოიტანეთ თქვენი სახელი, გვარი, ასაკი და საყვარელი ფერი. თითოეული ინფორმაცია გამოიტანეთ ცალკე console.log()-ის გამოყენებით.
console.log("Nini")
console.log("Davituri")
console.log(14)
console.log("don't have fav color")

//2.კონსოლში გამოიტანეთ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი და განაყოფი.
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)

//3.კონსოლში გამოიტანეთ წინადადება, რომელშიც გამოიყენებთ String Concatenation-ს. წინადადებაში უნდა იყოს თქვენი სახელი, ასაკი და დაბადების წელი.
console.log("I am Nini, " + "I am 14 years old, " + "I was born in 2012")

//4.კომენტარებით დაწერეთ შემდეგი მაგალითები რა შედეგს დააბრუნებენ:
//  "Java" + "Script" - JavaScript
//  "10" + 5 - 105
//  10 + "5" - 105
//  "hello" * 5 - NaN
//  "Hello " + "World" - Hello World

//5.კომენტარებით ახსენით ნასწავლი მონაცემთა ტიპები და მიუწერეთ მაგალითები.

//Number - ნებისმიერი რიცხვი, მაგ:15, 3.55...
//String - ბრჭყალებში ჩაწერილი ნებისმიერი მონაცემი, მაგ:"hello world", "how are you"...
//Bollean - აბრუნებს true/fasle, მაგ: console.log(10>5)-true
//Null- განზრახ რომ არ ვანიჭებთ მნიშვნელობას
//Undefined - შეიძლება ავტომატურად მიენიჭოს ეგ მნიშვნელობა
//bigint - 2^53-1, -(2^53-1) აბრუნებს რიცხვებს, რომელიც ნაკლები ან მეტია ამ რიცხვზე 
//object - python dict-ის მსგავსია

//6.კომენტარებით ახსენით ნასწავლი მეთოდები: toUpperCase, toLowerCase, startsWith, endsWith, trim, trimEnd, trimStart.
//toYpperCase - დიდი ასოებით წერს
//toLowerCase - პატარა ასოებით წერს
//startWith - ამოწმებს იწყება თუ არა სტრინგი გადაცემული სიმბოლოთი
//endsWith - ამოწმებს სრულდება თუ არა სტრინგი გადაცემული სიმბოლოთი
//trim - ზედმეტ space-ებს შლის მარჯვნივ და მარცხნივ
//trimEnd - ზედმეტ space-ებს შლის მარჯვნივ
//trimStart - ზედმეტ space-ებს შლის მარცხნივ

//7.დაწერეთ პატარა წინადადება და გამოიყენეთ toUpperCase და toLowerCase მასზე ცალ-ცალკე console.log-ში.
console.log("hello how are you".toUpperCase())
console.log("HELLO HOW ARE YOU".toLowerCase())

//8.console.log-ში შეამოწმე იწყება თუ არა შენი სახელი g-თი ან თუ მთავრდება a-თი.
console.log("nini".startsWith("G"))
console.log("nini".endsWith("a"))