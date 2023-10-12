let myString = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation."
console.log(myString.length);

let replacedString = myString.replace(/Wikipedia/g, "Book");
console.log(replacedString);

let containsWorld = myString.includes("world");
console.log(containsWorld);

let endsWithFoundation = myString.endsWith("Foundation.");
console.log(endsWithFoundation);