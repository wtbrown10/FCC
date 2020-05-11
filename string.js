function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  let string = JSON.stringify(reverse);
  console.log(string);
  console.log(string);
}

reverseString("hello");
