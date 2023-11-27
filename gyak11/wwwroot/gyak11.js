console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');


window.onload = function letöltés() {
    var viccek;
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        HTMLBodyElement.writeline(d)
        viccek = d;
    }
}