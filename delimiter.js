let input = prompt("Enter a name or sentence :").split("");

let output = input.reduce((a,b) => `${a}${b}.`, "").toUpperCase();
alert(output);

let enterAgain = confirm("Want to Enter Again?");
enterAgain ? location.reload() : alert("Thanks, see you again.");
