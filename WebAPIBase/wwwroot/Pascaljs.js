window.onload = () => {
    console.log("betöltődött");
    initPascal(10);
}
var initPascal = function (n) {

    var pascaldiv = document.getElementById("pascal")

    for (var sor = 0; sor < n; sor++) {

        var ujSorDiv = document.createElement("div");
        ujSorDiv.classList.add("sor");
        pascaldiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop < sor; oszlop++) {
            var ujElemDiv = document.createElement("div");
            ujElemDiv.classList.add("elem");
            let out = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor-oszlop));
            ujElemDiv.innerText = out;
            ujSorDiv.appendChild(ujElemDiv);
            
        }
    }


}
var faktorialis = function (n) {
    er = 1;
    for (var i = 1; i <= n; i++) {
        er *= i;
    }
    return er;
}