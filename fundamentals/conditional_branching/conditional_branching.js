function official_name_function() {
    let users_answer = prompt("What's the official name of JavaScript?");
    if (users_answer && users_answer.toLowerCase() === "ecmascript") {
        alert("Right!");
    } else {
        alert("You don't know? \"ECMAScript!\"");
    }
};

function show_the_sign() {
    let propmpted_number = prompt("Enter some integer", 0);
    if (propmpted_number > 0) {
        alert(1);
    } else if (propmpted_number === 0) {
        alert(0);
    } else if (propmpted_number < 0) {
        alert(-1);
    } else {
        alert("Not a number");
    }
};

function rewritten_into_question_mark() {
    let a = Number(prompt("Enter int", 0));
    let b = Number(prompt("Enter int 2", 0));
    let result = (a + b < 4) ? 'Below' : 'Over';
    alert(result);
};

function rewritten_ifelse() {
    let login = prompt("Enter login", "");
    let message = (login == 'Employee') ? "Hello" :
        (login == 'Director') ? "Greetings" :
        (login == '') ? "No login" :
        '';
    alert(message);
};

