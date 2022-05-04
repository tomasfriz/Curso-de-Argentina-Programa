
var n1 = parseInt(prompt("Escribe un número"));
var i = 2;

while (n1 % i !== 0 && i < n1 / 2) {
    i++;
}
if (n1 % i !== 0) {
    document.write("El número es primo");
} else {
    document.write("El número no es primo");
}
