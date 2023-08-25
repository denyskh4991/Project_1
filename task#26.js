var form = document.getElementById("tableForm");
var table = document.getElementById("table");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    table.innerHTML = "";

    var num = 1;
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 10; j++) {
            var cell = document.createElement("td");
            cell.textContent = num;
            row.appendChild(cell);
            num++;
        }

        table.appendChild(row);
    }
});

form.dispatchEvent(new Event('submit'));