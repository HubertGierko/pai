
////////////////////////////////////////////////////////////////////////////

//tworzenie tablicy za pomocą literału tablicy


/*var kolory = ['biały','czerwony','zielony'];
var elWynik = document.getElementById('wynik');

elWynik.innerHTML = kolory[0]; */// biały

////////////////////////////////////////////////////////////

//tworzenie tablicy za pomocą konstruktora tablicy Array 

/*var samochody = new Array('BMW','Audi','Ferrari','Porsche');

console.log(samochody[samochody.length -1]);

console.log('iloś elementów' + samochody.length);

var auto = prompt("podaj auto");

samochody[0] = auto;

console.log(samochody);*/

//////////////////////////////////////////////////////////
//utwórz tablice o nazwie szkola, przypisz do niej imie i nazwisko i wiek, o które spytasz ucznia w prompcie, wyświetl tablicę w bloku o nazwie dane 

/*var szkola = [];

var wiek = prompt('podaj wiek');
var imie = prompt('podaj imie');
var nazwisko = prompt('podaj nazwisko');

szkola[0] = wiek;
szkola[1] = imie;
szkola[2] = nazwisko;

var elDane = document.getElementById('dane');
elDane.innerHTML = szkola;*/

//////////////////////////////////////////////////////////

//tablice wielowymiarowe 

/*var tab = new Array(

    new Array ('Jan','Nowak','Poznan'),
    new Array ('Anna','Kowal','Gniezno'),
    new Array ('Marcin','Kowalski','Warszawa')
                    );
console.log(tab);
console.log(tab[1][2]);



var imiona = ['Paweł','Anna','Zenon','Jacek'];
console.log(imiona);
var posortowane = imiona.sort(); //posortowane alfabetycznie/od najmniejszego do największego
console.log(posortowane);

var odwroc = posortowane.reverse();
odwroc.pop(); // wycina ostatni element
odwroc.push('Gerwazy'); // dodaje na końcu 
odwroc.unshift('Joanna'); // dodaje na początku
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); // -1 znaczy to, że nie istnieje
console.log(odwroc.indexOf('Gerwazy')); // wskazuje inteks tej wartości w tablicy*/

/////////////////////////////////////////////////////////////////////

//sortowanie liczb

/*var cyfry = [1,2,20,190,-1,1000000];

console.log(cyfry);
cyfry.sort();
console.log(cyfry); // sortuje względem 1. liczby 
cyfry.sort(function(a,b){
    
    return(a-b);
});

console.log(cyfry);*/

////////////////////////////////////////////////////////////
/*
 var elWynik =  document.getElementById('wynik');

var elPodajKolor = document.getElementById('podajkolor');
var elKolor = document.getElementById('kolor');

var kolor = [];
function zapisz(){
   //console.log(elKolor.value);
    kolor[0] = elKolor.value;
    console.log(kolor);
}
*/


//zad dom utwórz formularz z loginem (text) i hasłem (pole typu password) i kolorem (text) (wpisywany hexadecymalnie) zrobić konkatenacje
//przypisz dane do tablicy jednowymiarowej, wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy.

//var kolor = '#'ff222

var elKolor = document.getElementById("kolor");
var elLogin = document.getElementById("login");
var elHaslo = document.getElementById("haslo");

var dane = [];

function show(){

    console.log(elKolor.value);
    console.log(elLogin.value);
    console.log(elHaslo.value);
    
    dane[0] = elLogin.value.fontcolor("#" + elKolor.value);
    dane[1] = elHaslo.value.fontcolor("#" + elKolor.value);
    dane[2] = elKolor.value.fontcolor("#" + elKolor.value);
    
    console.log(dane);
    document.write(dane);
    
} 

