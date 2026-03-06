function even_numbers(Start, Finish) {
    while (Start <= Finish) {
        if (Start % 2 !== 0) {
            Start++;
            continue;
        };
        alert(Start);
        Start++;
    }
}

function even_numbers_for(Start, Finish) {
    for (; Start <= Finish; Start++) {
        if (Start % 2 !== 0) continue
        alert(Start);
    }
}

function for_to_while() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++
    }
}

function prompt_for_greater_than_100() {
    let UserInput;
    do {
        UserInput = prompt("Enter a number greater than 100:", 0);
    } while (+UserInput < 100 && UserInput)
}

function show_prime_numbers() {
    let N;
    N = +prompt("Input a number for prime calculations", "0");
    if (N && N < 1) {
        alert(`Prime numbers calculations are not feaseble for ${+N}`);
        return;
    } else if (!N) {
        alert("Please enter a number");
        return;
    };
    let PrimeNumbersString = "";
    for (let i = 2; i <= N; i++) {
        let IsPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                IsPrime = false;
            } else {
                continue;
            };
        };
        if (IsPrime) {
            PrimeNumbersString += +i + ", ";
        };
    };
    let FinalAlert = PrimeNumbersString === "" ? "No prime numbers in this range" : PrimeNumbersString.slice(0, PrimeNumbersString.length - 2);
    alert(FinalAlert);
}
