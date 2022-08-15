function obtainButtonValues(val){

    var buttonValue = val.innerText;
    console.log(buttonValue);

    document.getElementById("display").innerText = buttonValue;
}