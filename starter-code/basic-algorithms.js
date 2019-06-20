// Names and Input


// 1. Create a variable hacker1 with the driver's name
var hacker1= "Sonia";
// 2. Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1)
// 3. Create a variable hacker2 and ask the user for the navigator's name
var hacker2= window.prompt("What is the navigator's name?")
// 4. Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2)



//Conditionals

//5. Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else {
  if(hacker1.length < hacker2.length){
    console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
  }
}


//Loops

//6 . Print all the characters of the driver's name, separated by a space and in 
//capitals ie. "J O H N"
var hacker1Separado="";
for(var i=0; i<hacker1.length; i++){
  
  hacker1Separado += hacker1[i] + " ";
 
}

console.log(hacker1Separado.slice(0,-1).toUpperCase())

// 7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

hacker2.split("").reverse().join("")

//8. Depending on the lexicographic order of the strings, print:
// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?

if(hacker1.localeCompare(hacker2)<0){
  console.log("The driver's name goes first")
} else {
  if(hacker1.localeCompare(hacker2)>0) {
    console.log("Yo, the navigator goes first definitely")
  }else{
    console.log("What?! You both got the same name?")
  }
}

//9. Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
let palindrome = window.prompt("dime una palabra").toLowerCase()

if(palindrome === palindrome.split("").reverse().join("")){
 console.log("Es un palíndrome")
}else {"no es un palíndrome"}

// 10. Lorem ipsum generator
// Generate 3 parragraphs. Store the text in a String


let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim erat. Praesent feugiat enim id placerat porttitor. Fusce lobortis metus felis, sit amet dignissim justo mattis eget. Donec nec neque a elit ullamcorper fermentum. Duis posuere erat eget justo rutrum fermentum. Etiam consectetur dui aliquet pulvinar consectetur. Donec hendrerit arcu nec elit maximus, sit amet ullamcorper tellus venenatis. Nullam ac lobortis arcu. Aenean feugiat, dolor ut tincidunt semper, est nulla pharetra odio, non semper tellus tortor sit amet est. Nullam vehicula eleifend dolor, nec consectetur elit tempus nec. Duis vel maximus mauris. Proin molestie dolor purus, porttitor dapibus felis venenatis ac. Maecenas iaculis libero quis ipsum molestie, sit amet aliquam lectus porttitor. Integer sed erat justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sollicitudin tellus in ipsum mattis, ac sagittis arcu scelerisque. Sed tristique tortor purus, sit amet pretium nunc hendrerit sed. Sed cursus ante dolor, id tristique velit luctus at. Vestibulum a purus ac urna semper fringilla eu vitae velit. Donec eget vehicula nisi, non tempor orci. Duis iaculis ut justo at faucibus. In sit amet nisi nec neque posuere mollis. Morbi vulputate sem vitae felis pharetra, eget bibendum urna pretium. Sed varius egestas turpis a consectetur. Sed sem dolor, rhoncus in tincidunt et, feugiat at justo. Cras sit amet arcu et lectus mollis iaculis quis sit amet augue. Curabitur ex tortor, ultrices id tempor non, ullamcorper eget nulla. Donec nec dolor id arcu sollicitudin aliquam. Vestibulum et urna eget erat tempus sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eu ex lectus. Maecenas id facilisis sem, quis laoreet lacus. Proin quis dolor mauris. Cras at pulvinar enim. Aliquam vehicula et leo ac pretium. Donec ante massa, facilisis nec quam sit amet, posuere mollis risus. Suspendisse purus nulla, accumsan sit amet pretium tempus, lobortis at felis. Aliquam at elit ligula."
//Make your program count the number of words in the string

console.log(lorem.split(" ").length) 
let myRegex = /et/
//Make your program count the number of times the latin word et appears
console.log(lorem.match(myRegex)) 