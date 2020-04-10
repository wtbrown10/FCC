function reverseString(str) {
  let myStr = "";
  for (let i = str.length - 1; i > -1; i--);
  {
    myStr = myStr + str[i];
  }

  console.log(myStr);
  return str;
}

reverseString("hello");

//   Reverse the provided string.

//   You may need to turn the string into an array before you can reverse it.

//   Your result must be a string.   .reverse
