function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {                     // switch statements test the value and can have many case statements which define various possible values. Statements are                                   executed from the first matched case value until a break is encountered.
        case "bob":
            answer = "Marley";
            break
        case 42:
            answer = "The Answer";
            break
        case 1:
            answer = "There is no #1";
            break
        case 99:
            answer = "Missed me by this much!";
            break
        case 7:
            answer = "Ate Nine";
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);