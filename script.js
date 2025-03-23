let CounterElement = document.getElementById("Countervalue");

function onIncrement() {
    let previousCountervalue = CounterElement.textContent;
    let UpdatedCountervalue = parseInt(previousCountervalue) + 1;
    CounterElement.textContent = UpdatedCountervalue;

    if (UpdatedCountervalue > 0) {
        CounterElement.style.color = "green";
    } else if (UpdatedCountervalue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
}


function onDecrement() {
    let previousCountervalue = CounterElement.textContent;
    let UpdatedCountervalue = parseInt(previousCountervalue) - 1;
    CounterElement.textContent = UpdatedCountervalue;

    if (UpdatedCountervalue > 0) {
        CounterElement.style.color = "green";
    } else if (UpdatedCountervalue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
}


function onReset() {
    CounterElement.textContent = 0;
    CounterElement.style.color = "black";
}
