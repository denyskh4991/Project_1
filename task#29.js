function displayData() {
    const form = document.getElementById("registrationForm");
    const dataTable = document.getElementById("dataTable");
    const table = document.querySelector("#dataTable table");

    table.innerHTML = ""; // Очистити таблицю

    // Виведення всіх полів разом з обраною статтею та обраними мовами
    for (let i = 0; i < form.elements.length - 1; i++) {
        const fieldName = form.elements[i].name;
        const fieldValue = form.elements[i].value;

        if (fieldName !== "gender" && fieldName !== "languages[]" && fieldName && fieldValue) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = fieldName;
            cell2.textContent = fieldValue;
        }
    }

    const genderElements = form.querySelectorAll('input[name="gender"]');
    for (const element of genderElements) {
        if (element.checked) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = "Стать";
            cell2.textContent = element.value;
            break;
        }
    }

    const languagesElements = form.querySelectorAll('input[name="languages[]"]:checked');
    if (languagesElements.length > 0) {
        const languages = Array.from(languagesElements).map(element => element.value);
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = "Мови, якими володієте";
        cell2.textContent = languages.join(", ");
    }

    form.style.display = "none"; // Приховати форму
    dataTable.style.display = "block"; // Показати таблицю
}