/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt("How many movies have you already watched?", ""); // тут добавил плюс, потому что ожидается ответ в числах


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