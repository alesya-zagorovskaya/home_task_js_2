//task 1
//Исходный код
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 10;
num = num + 1;
num = num - 1;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 5;
console.log(num);

//Новый код
num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 10;
num ++;
num --;
num += 7;
num -= 18;
num *= 10;
num /= 5;
console.log(num);
document.writeln("<h2>task 1</h2>");
document.writeln("<p>" + num + "</p>");

//task 2
//Вариант 1
var hour = 11;
var minute = 18;
var second = 59;
console.log(hour + ":" + minute + ":" + second);

//Вариант 2
var currentDate = new Date();
console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());

document.writeln("<h2>task 2</h2>");
document.writeln("<p>" + hour + ":" + minute + ":" + second + "</p>");
document.writeln("<p>" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + "</p>");

//task 3
var strTask3 = "abcde";
document.writeln("<h2>task 3</h2>");
if (strTask3.charAt(0) === 'a') {
    console.log("да");
    document.writeln("<p>да</p>");
} else {
    console.log( "нет" );
    document.writeln("<p>нет</p>");
}


//task 4
var strTask4 = "810";
console.log(strTask4.charAt(0));
console.log(strTask4.charAt(1));
console.log(strTask4.charAt(2));
console.log(+strTask4.charAt(0) + +strTask4.charAt(1) + +strTask4.charAt(2));
document.writeln("<h2>task 4</h2>");
document.writeln("<p>" + (+strTask4.charAt(0) + +strTask4.charAt(1) + +strTask4.charAt(2)) + "</p>");

//task 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var numTask5 = getRandomNumber(5, 15);
document.writeln("<h2>task 5</h2>");
if (numTask5 === 10) {
    console.log("Верно");
    document.writeln("<p>Верно</p>");
} else {
    console.log("Неверно " + numTask5);
    document.writeln("<p>Неверно " + numTask5 + "</p>");
}

//task 6
function checkTask6 (value, numTask6) {
    if (value === numTask6) {
        console.log("Верно");
        document.writeln("<p>Верно</p>");
    } else {
        console.log("Неверно")
        document.writeln("<p>Неверно</p>");
    }
}
document.writeln("<h2>task 6</h2>");
var numTask6 = "test";
checkTask6("test", numTask6);
checkTask6("тест", numTask6);
checkTask6("3", numTask6);

//task 7
function checkTask7 (a, b) {
    if (a <= 1 && b >= 3) {
        console.log(a + b);
        document.writeln("<p>" + (a + b) + "</p>");
    } else {
        console.log(a - b);
        document.writeln("<p>" + (a - b) + "</p>");
    }
}
document.writeln("<h2>task 7</h2>");
checkTask7(1, 3);
checkTask7(0, 6);
checkTask7(3, 5);

//task 8
var name = prompt("Ваше имя");
var login = prompt("Введите логин");
var pass = prompt("Ваш пароль");
document.writeln("<h2>task 8</h2>");
if (login === "admin" && pass === "nimda") {
    console.log("Добро пожаловать, " + name + " Вы успешно вошли на сайт.");
    document.writeln("<p>Добро пожаловать, " + name + " Вы успешно вошли на сайт.</p>");
} else {
    console.log(name + ", вы неверно ввели логин или пароль!");
    document.writeln("<p>" + name + ", вы неверно ввели логин или пароль!</p>");
}

//task 9
var month = getRandomNumber(1, 12);
var season;
switch (month) {
    case 1:
    case 2:
    case 12:
        season = 1;
        break;
    case 3:
    case 4:
    case 5:
        season = 2;
        break;
    case 6:
    case 7:
    case 8:
        season = 3;
        break;
    case 9:
    case 10:
    case 11:
        season = 4;
        break;
}
var seasonName = ["Зима", "Весна", "Лето", "Осень"];
switch (season) {
    case 1:
        seasonName = "Зима";
        break;
    case 2:
        seasonName = "Весна";
        break;
    case 3:
        seasonName = "Лето";
        break;
    case 4:
        seasonName = "Осень";
        break;
}
document.writeln("<h2>task 9</h2>");
console.log(month + ' -> ' + season + ' -> ' + seasonName);
document.write(month + ' -> ' + season + ' -> ' + seasonName);


