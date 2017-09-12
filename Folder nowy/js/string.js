var text = 'ZSK - Zespół Szkół Komunikacji';
console.log(text.length); // 30
var pierwszyZnak = text.charAt(0);
console.log(pierwszyZnak); //Z


var ostatniZnak = text.charAt(text.length -1); // i
console.log(ostatniZnak);

var kod = text.charCodeAt(0); // sprawdzenie kodu asci danej litery
console.log(kod); //Z

var kod = text.charCodeAt(14); //i
console.log(kod); 

var duze = text.toUpperCase();
console.log(duze); 

var male = text.toLowerCase();
console.log(male);

var poprawnyTekst = prompt('Podaj imię','np. Kowalski');

poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase()
+ poprawnyTekst.slice(1).toLowerCase(); //zamienia 1. na wielka wszystkie inne na małe litery
console.log(poprawnyTekst);


// substr(x,y) x - oznacza od którego znaku, y - ile znaków



poprawnyTekst = poprawnyTekst.substr(1,  poprawnyTekst.length -2);
console.log(poprawnyTekst);