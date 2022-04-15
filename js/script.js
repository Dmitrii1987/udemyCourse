let numberOfFilms = prompt("How many movies have you already watched?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastSeenMovie1 = prompt("What did you watch last time?", "");
let evalOfLastMovie1 = prompt("How can you evaluate it?", "");
let lastSeenMovie2 = prompt("What did you watch last time?", "");
let evalOfLastMovie2 = prompt("How can you evaluate it?", "");

personalMovieDB.movies[lastSeenMovie1] = evalOfLastMovie1;
personalMovieDB.movies[lastSeenMovie2] = evalOfLastMovie2;

console.log(personalMovieDB);