let result = "";

let birthday = prompt('Введи, будь ласка, свій рік народження');

if (birthday !== null) {
    if (birthday !== "" && !isNaN(birthday)) {
        result += "Ваш вік - " + birthday + "\n";
    }
}
else {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
}



let plOfBirth = prompt('В якому місті ти живеш?');

if (plOfBirth !== null) {
    if (plOfBirth !== "") {
        switch (plOfBirth) {
            case 'Київ':
                result += 'Ти живеш у столиці України\n';
                break;
            case 'Лондон':
                result += 'Ти живеш у столиці Великобританії\n';
                break;
            case 'Вашингтон':
                result += 'Ти живеш у столиці США\n';
                break;
            default:
                result += 'Ти живеш у місті ' + plOfBirth + '\n';
                break;
        }
    }
} else {
    alert("Шкода, що Ви не захотіли ввести місце свого проживання");
}

let sport = prompt('Який вид спорту тобі подобається більш за все?');

if (sport !== null) {
    if (sport !== "") {
        switch (sport) {
            case 'бокс':
                result += 'Круто! Хочеш стати Майком Тайсоном?\n';
                break;
            case 'плавання':
                result += 'Круто! Хочеш стати Майклом Фелпсом?\n';
                break;
            case 'теніс':
                result += 'Круто! Хочеш стати Роджером Федерером\n';
                break;
            default:
                break;
        }
    }
} else {
    alert("Шкода, що Ви не захотіли ввести улюблений вид спорту");
}

if (result !== "") {
    alert(result);
} else {
    alert("");
}