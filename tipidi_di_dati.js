// DATI PRIMITIVI

// String
const nome = 'Alessio sta programmando';
console .log(typeof nome);

// Number
const eta = 21;
console .log(eta);

// Boolena
const eMaggiorenne = true; //false
console .log(eMaggiorenne);

// Null
const valore = null;
console .log(typeof valore);

//Undefined
const anonimo = undefined;
console .log(anonimo); // valore indefinito 

//Symbol
const simbolo = Symbol();
console .log(simbolo);


// -------------------------------

// DATI PER RIFERIMENTO -Reference type

// Arrays
const nomi = ['alessio','billy','jonny'];
console .log( nomi);

// Oggetti
const persona = {
    name:'alessio',
    eta: 25,
}
console .log(persona);


persona.name = 'jonny'
console .log(persona);