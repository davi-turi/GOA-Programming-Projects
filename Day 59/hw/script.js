//1.კონსოლში გამოიტანეთ სამი სხვადასხვა რიცხვის ჯამი, ნამრავლი და საშუალო არითმეტიკული.
console.log(11 + 22 + 33)
console.log(11 * 22 * 33)
console.log((11 + 22 + 33) / 3)

//2.კომენტარებით დაწერეთ, რა შედეგს დააბრუნებს თითოეული მაგალითი:
// "Front" + "end" - Frontend
// "25" + 10 - 2510
// 100 - "30" - 70
// "Hello" * 2 - NaN
// "5" + 5 + 5 - 555
// 5 + 5 + "5" - 105

//3.კომენტარებით ახსენით ნასწავლი მონაცემთა ტიპები. თითოეულ ტიპზე მოიყვანეთ ორი განსხვავებული მაგალითი.
//Number - ნებისმიერი რიცხვი, მაგ:15, 3.55...
//String - ბრჭყალებში ჩაწერილი ნებისმიერი მონაცემი, მაგ:"hello world", "how are you"...
//Bollean - აბრუნებს true/fasle, მაგ: console.log(10>5)-true, console.log("nini".startsWith("Ha"))-False
//Null- განზრახ რომ არ ვანიჭებთ მნიშვნელობას,  მაგალითად ცვლადების მნიშვნელობას ვხდით Null-ს
//Undefined - შეიძლება ავტომატურად მიენიჭოს ეგ მნიშვნელობა, მაგალითად როდესაც ცვლადის მნიშვნელობა არ არის განსაზღვრული და მას console.log()-ით ვიძახებთ
//bigint - 2^53-1, -(2^53-1) აბრუნებს რიცხვებს, რომელიც ნაკლები ან მეტია ამ რიცხვზე 
//object - python dict-ის მსგავსია


//4.კომენტარებით ახსენით შემდეგი მეთოდები და გამოიყენეთ თითოეული ორჯერ:
// - toUpperCase() -  დიდ ასოებად აქცევს
console.log("usa".toUpperCase())
console.log("wow".toUpperCase())

// - toLowerCase() - პატარა ასოებად აქცევს
console.log("BRUTAL".toLowerCase())
console.log("HARRY POTTER".toLowerCase())

// - startsWith() - იგებს სტრინგი თუ იწყება გადაცემული სიმბოლოთი
console.log("Humanity".startsWith("Hu"))
console.log("lalala".startsWith("boom"))

// - endsWith() - იგებს სტრინგი თუ მთავრდება გადაცემული სიმბოლოთი
console.log("JavaScript".endsWith("pt"))
console.log("Html".endsWith("t"))

// - trimEnd() - მარჯვნივ ზედმეტ სფეისებს აშორებს
console.log("  ouuuu             ".trimEnd())
console.log(        "booom"   .trimEnd())

// - trimStart() - მარცხნივ ზედმეტ სფეისებს აშორებს
console.log("    jojojoj".trimStart())
console.log("          kokakola   ".trimStart())


//5.დაწერეთ წინადადება, რომელსაც დასაწყისშიც და ბოლოშიც ექნება ზედმეტი გამოტოვებები. კონსოლში გამოიტანეთ:
// - თავდაპირველი წინადადება;
// - trim()-ის გამოყენებით მიღებული შედეგი;
// - trimStart()-ის გამოყენებით მიღებული შედეგი;
// - trimEnd()-ის გამოყენებით მიღებული შედეგი.
console.log("        Why Do We Fall Bruce? So We Can Learn To Pick Ourselves Up           ")
console.log("        Why Do We Fall Bruce? So We Can Learn To Pick Ourselves Up           ".trim())
console.log("        Why Do We Fall Bruce? So We Can Learn To Pick Ourselves Up           ".trimEnd())
console.log("        Why Do We Fall Bruce? So We Can Learn To Pick Ourselves Up           ".trimStart())



//6.კომენტარებით ახსენით, რა განსხვავებაა შემდეგ მაგალითებს შორის და რა შედეგს დააბრუნებს თითოეული:
// - "javascript".startsWith("java") - true
// - "javascript".startsWith("Java") - false
// - "javascript".endsWith("script") - true
// - "javascript".endsWith("Script") - false
//განსხვავებაა case-ებს შორის