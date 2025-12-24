function startDataCollection() {
    alert("Your personal data will be sold out to third and fourth parties");
    let personalData = collectPersonalData();
    let isAgreed = agreeToPredatorDataProccessing();
    if (isAgreed) {
        alert("Welcome to no-privacy world!");
        alert(`Your name is ${personalData.name}, your are of age ${personalData.age}, your favorite book is ${personalData.book} and you live in ${personalData.city}`);
    } else {
        alert("We do not give a fuck, welcome to no-privacy world!");
        alert(`Your name is ${personalData.name}, your are of age ${personalData.age}, your favorite book is ${personalData.book} and you live in ${personalData.city}`);
    }
};

function collectPersonalData() {
    let personalName = prompt("Enter your name here", "John Doe");
    let Age = prompt("Enter your age here", "16");
    let favoriteBook = prompt("Enter your favorite book here", "Treasure Island");
    let cityOfResidence = prompt("Enter your town here", "Default city");
    return {
        name: personalName,
        age: Age,
        book: favoriteBook,
        city: cityOfResidence
    };
};

function agreeToPredatorDataProccessing() {
    let isAgreed = confirm("Do you agree to give your data for us to sold to shadowy fuckers?");
    return isAgreed;
}