
var n1 = parseInt(prompt("Escribe un número"));
var n2 = parseInt(prompt("Escribe otro número"));
var menor;
var i;

if (n1 < n2) {
    menor = n1;
} else {
    menor = n2;
}
for (i = 2; i < menor / 2; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
        document.write(i, ", ");
    }
}
