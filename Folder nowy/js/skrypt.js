  var suma = 10 - '20' + 30;
         //console.log(suma);
        //window.alert('test')
        //alert('test')
        
        var a = 9, b = 'Janusz', c = true;
        var d;
        var suma = a + b;
        var roznica = a - b;
        var mnozenie = a * b;
        var dzielenie = a / b;
        var modulo = a % b;
        
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
        
        var dzialanie = (7%2)/3;
        console.log(dzialanie);
        
        
        var dziesietna = 10;
        console.log(dziesietna); //10
        var oktalna = 010; // 0 - oznaczenie oktalnej
        console.log(oktalna); //8 
        
        var hex = 0x20; // 0x - oznaczenie hexa
        console.log(hex); //32
        
        console.trace();
        
        //camelCase - zmienna składająca się z kilku słów
        var duzaLitera; // każde kolejne słowo z wielkiej litery
        var _duzaLitera;
        var $duzaLitera;
        
        var zmienna = 2.5;
        console.log(zmienna);
        
        var j1 = '1';
        console.log(typeof(j1));
        //lub console.log(typeof(j1));
        j1 = parseInt(j1); // parsowanie zmienia string na  na liczbę dziesiętną 
        var wynik = j1 + j2;
        console.log(wynik);
var j2 = '1.9999';
j2 = parseFloat(j2); // zmiana na zmienno przecinkową
var wiek = 'Aga';
wiek = parseInt(wiek);
console.log(wiek); //NaN

var x = 'ZSK';
//document.getElementById('naglowek').innerHTML = x; możan zrobić tak ale nie jest to do końca poprawna metoda
var elNaglowek = document.getElementById('naglowek'); // el - od element
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';


var imie = prompt('Podaj swoje imię');
console.log(typeof(imie));



var a = prompt('Podaj a');
var b = prompt('Podaj b');
var pole = a*b;
console.log(pole);
a = parseInt(a);
b = parseInt(b);
var srednia = (a + b)/2;
console.log(srednia);
var elSrwiek = document.getElementById('srwiek');
elSrwiek.textContent = srednia;