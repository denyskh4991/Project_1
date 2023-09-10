function displayData(event) {
    event.preventDefault();
    const form = document.getElementById("registrationForm");
    const dataTable = document.getElementById("dataTable");
    const table = document.querySelector("#dataTable table");

    table.innerHTML = "";

    const formData = new FormData(form);
    formData.forEach((value, name) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = name;
        cell2.textContent = value;
    });

    form.style.display = "none";
    dataTable.style.display = "block";
}