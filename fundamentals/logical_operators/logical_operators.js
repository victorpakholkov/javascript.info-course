function prompt_for_login() {
    let login = prompt("Enter your login here");
    if (login === '' || login === null) {
        alert("Canceled");
    } else if (login === "Admin") {
        let password = prompt("Enter your password here");
        if (password === '' || password === null) {
            alert("Cancelled");
        } else if (password === "TheMaster") {
            alert("Welcome!");
        } else {
            alert("Wrong password");
        }
    }
    else {
        alert("I don't know you");
    }
};