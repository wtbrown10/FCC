function myReplace(str, before, after) {
    regex = /[A-Z]/

    let newStr = str.split(' ')

    for (let i = 0; i < newStr.length; i++) {
        if(newStr[i] === before && regex.test(newStr[i][0])) {
            after = after.substr(0, 1).toUpperCase() + after.substr(1)

        newStr[i] = after
        } else if(newStr[i] === before && !regex.test(newStr[i][0]) ) {
            after = after.substr(0, 1).toLowerCase() + after.substr(1)

            newStr[i] = after
        }
        
    }
    newStr = newStr.join(' ')
    return newStr;
  }
  
  myReplace("I think we should look up there", "up", "Down");

  myReplace("Let us get back to more Coding", "Coding", "algorithms")

  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")