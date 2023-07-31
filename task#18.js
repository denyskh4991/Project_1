function findDates() {
    let rgRes = strMain.matchAll(/(?<year>\d{4})?-(?<month>\d{2})-(?<day>\d{2})/g);
    let item = 0;
    for (let item of rgRes){
        console.log(item);
    }
    return item;
}

const strMain = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
findDates(strMain);