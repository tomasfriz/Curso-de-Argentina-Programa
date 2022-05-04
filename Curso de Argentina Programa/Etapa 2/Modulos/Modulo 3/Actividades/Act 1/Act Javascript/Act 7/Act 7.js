
var n1 = parseInt(prompt("Escribe un número"));
var n2 = parseInt(prompt("Escribe otro número"));
var n3 = parseInt(prompt("Escribe otro número"));

if (n1 > n2 && n1 > n3) {
    document.write(n1);
} else if (n2 > n3) {
    document.write(n2);
} else {
    document.write(n3);
}
