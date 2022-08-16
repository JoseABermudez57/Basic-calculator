x = "0"; // Number in displayContent
xi = true; // If a number is in the displayContent
decPoint = false; // decimal point state

function obtainButtonValues(xx) {
    console.log(xx);

    if (x == "0" || xi == true) {	// initialize a number
        document.getElementById("display").innerText = xx; //Show in displayContent
        x = xx; // Save number
        if (xx == ".") { // If write a decPoint at the number start
            document.getElementById("display").innerText = "0."; // Write 0.
            x = xx; // Save number
            decPoint = true;
        }
    } else { // Continue writing numbers
        if (xx == "." && decPoint == false) { // If write a decPoint for the first time
            document.getElementById("display").innerText += xx;
            x += xx;
            decPoint = true; // Change the state for the decPoint
        }
        // If we write a second decPoint do nothing
        else if (xx == "." && decPoint == true) { }

        // Other cases (numbers 0 to 9)
        else {
            document.getElementById("display").innerText += xx;
            x += xx
        }
    }
    xi = false // The number was initialized and we can write more numbers
}