//Task 1
const automationQA = {};
automationQA.programmerName = "Bob";
automationQA.programmingLanguages = "JavaScript";
automationQA.age = 25;
automationQA.languages = ["English", "German"];
automationQA.preferences = "table";

console.log(automationQA);

//Task 2
let room = {
    name: "Living Room",
    size: 200,
    window: true
};

console.log(room.name, room.window);

//Task 3
const movie = {
    title: "Friends",
    releaseYear: 1998,
    genre: "Comedy"
};

movie.genre = "Action";
movie.title = "The Matrix";


movie.actors = {
    mainRole: "Keanu Reeves",
    supportingRole: "Carrie-Anne Moss"
};
movie.director = "The Wachowskis";

delete movie.title;

console.log(movie);


