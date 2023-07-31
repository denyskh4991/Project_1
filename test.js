function findDates(inputString) {
    const dateRegex = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dates = [];
    let match;
    while ((match = dateRegex.exec(inputString)) !== null) {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);

        if (month < 1 || month > 12) {
            continue;
        }

        const maxDayOfMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > maxDayOfMonth) {
            continue;
        }

        dates.push({
            day,
            month,
            monthName: monthNames[month - 1],
            year
        });
    }

    return dates;
}

const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
console.log(findDates(str));