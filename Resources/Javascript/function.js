x = "0"; // Number in displayContent
xi = true; // If a number is in the displayContent
decPoint = false; // decimal point state
op = "" // Obtain the operation
pn = 0 // Previous number

window.onload = function () { //Acciones tras cargar la p&aacute;gina
    display = document.getElementById("display"); //elemento pantalla de salida
}

function obtainButtonValues(e) {
    
    xx = e.innerHTML;

    console.log(xx);

    if (x == "0" || xi == true) {	// initialize a number
        display.innerHTML = xx; //Show in displayContent
        x = xx; // Save number
        if (xx == ".") { // If write a decPoint at the number start
            display.innerHTML = "0."; // Write 0.
            x = xx; // Save number
            decPoint = true;
        }
    } else { // Continue writing numbers
        if (xx == "." && decPoint == false) { // If write a decPoint for the first time
            display.innerHTML += xx;
            x += xx;
            decPoint = true; // Change the state for the decPoint
        }
        // If we write a second decPoint do nothing
        else if (xx == "." && decPoint == true) { }

        // Other cases (numbers 0 to 9)
        else {
            display.innerHTML += xx;
            x += xx
            console.log(x);
        }
    }
    xi = false // The number was initialized and we can write more numbers
}

function operate(ope) {
    obtainResult() //si hay operaciones pendientes se realizan primero
    pn = x //ponemos el 1º n&uacute;mero en "numero en espera" para poder escribir el segundo.
    op = ope; //guardamos tipo de operaci&oacute;n.
    xi = true; //inicializar pantalla.
}

function obtainResult() {
    if (op == "") { //no hay ninguna operaci&oacute;n pendiente.
        console.log(x);
        display.innerHTML = x;	//
    }
    else { //con operaci&oacute;n pendiente resolvemos
        sl = pn + op + x; // escribimos la operaci&oacute;n en una cadena
        sol = eval(sl) //convertimos la cadena a c&oacute;digo y resolvemos
        display.innerHTML = sol //mostramos la soludi&oacute;n
        x = sol; //guardamos la soluci&oacute;n
        op = ""; //ya no hayn operaciones pendientes
        xi = true; //se puede reiniciar la pantalla.
    }
}