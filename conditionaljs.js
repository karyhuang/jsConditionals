var age = prompt("How old are you?");

if (age < 0) {
	alert("Come back once you're out of the womb.");
}
if (age === 21) {
	alert("Happy 21st! Come get some drinks!");
}
if (age % 2 !== 0) {
	alert("Your age is an odd number");
}
// important !!!
// see if a number is a perfect square
if (age % Math.sqrt(age) === 0) {
	alert("Your age is a perfect square!");
}