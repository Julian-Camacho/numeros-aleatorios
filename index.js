const list = document.getElementById("list");
const button = document.querySelector(".generate");

console.log(button);

function num() {
    const numeros = [];
  for (let i = 0; i < 10; i++) {
    const numero = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    const grupos = numero.match(/.{1,3}/g);
    const numeroConPuntos = grupos.join('.');
    numeros.push(numeroConPuntos);
  }
  return numeros; 
}

function print() {
    const numeros = num();
    list.innerHTML = '<ul>' + numeros.map(numero => '<li>' + numero + '</li>').join('') + '</ul>';
}
