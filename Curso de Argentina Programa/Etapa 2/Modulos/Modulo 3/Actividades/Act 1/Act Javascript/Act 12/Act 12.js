
var n1 = parseInt(prompt("Escribe un número"));

var i;
for (i = 2; i < n1 / 2; i++) {
    if (n1 % i === 0) {
        document.write(i, ", ");
    }
}
