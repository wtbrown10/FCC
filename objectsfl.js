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
