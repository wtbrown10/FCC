// Setup
function phoneticLookup(val) {
    "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    var result = lookup[val];
    // Only change code above this line
    return result;
}

console.log(phoneticLookup("charlie"));

function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp]
    } else {
        return "Not Found"
    }
    // Only change code above this line
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"))