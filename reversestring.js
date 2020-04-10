// function reverseString(str) {

//   for (let i = str. - 1; i > -1; i--);
//   {
//     myStr = myStr + str;
//   }

//   console.log(myStr);
//   return str;
// }

// reverseString("hello");

//   Reverse the provided string.

//   You may need to turn the string into an array before you can reverse it.

//   Your result must be a string.   .reverse

function switchShitUp(word) {
  let newWord = "";
  for (let i = word.length - 1; i > -1; i--) {
    newWord += word[i];
  }
  console.log(newWord);
}
switchShitUp("hello");
