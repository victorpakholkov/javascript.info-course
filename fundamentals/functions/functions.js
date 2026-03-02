function InitiateAgeChecking() {
    let Age = prompt("What is your age?", 18);
    checkAge1(Age);
    checkAge2(Age);
}

function InitiateMinChecking() {
    let Num1 = prompt("Enter number 1:", 0);
    let Num2 = prompt("Enter number 2:", 1);
    let Min = min(+Num1, +Num2);
    alert("Minimal number: " + Min);
}

function InitiatePow() {
    let Num = prompt("Enter some number: ", 3);
    let Pow = prompt("Enter some power: ", 2);
    let Result = pow(+Num, +Pow);
    alert("Result: " + Result);
}

function checkAge1(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}

function checkAge2(age) {
    return (age > 18) || confirm("Did parents allow you?");
}

function min(a, b) {
    return (a < b) ? a : b;
}

function pow(x, n) {
    if (n < 1) {
        return "this page does not support non-natural powers";
    };
    for (x; n > 1; --n) {
        x *= x;
    };
    return x;
}

function agreement() {
    let Question = prompt("Enter some question", "Are roses red?");
    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }

    ask(
        Question,
        () => alert("You agreed."),
        () => alert("You cancelled the execution.")
    )
}