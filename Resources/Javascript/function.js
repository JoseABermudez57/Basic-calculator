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
    obtainResult() // Remaining operations are performed
    pn = x // The first number is saved to write the next
    op = ope; // The type of operation is saved
    xi = true; // Initialize the display
}

function obtainResult() {
    if (op == "") { // If there is no operation
        display.innerHTML = x;	// Put the number on the display
    }
    else { // With pending operations
        sl = pn + op + x; // Write the operation to a string
        sol = eval(sl) // The operation is performed and saved
        display.innerHTML = sol // Show the solution
        x = sol; // Save the solution
        op = ""; // No pending operations
        xi = true; // You can reset the display
    }
}