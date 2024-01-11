let counter = document.getElementById("counter");

function Increase() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    
}

function Decrease() {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    
}

function Reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    
}