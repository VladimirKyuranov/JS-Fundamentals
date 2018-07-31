function calendar([day, month, year]) {
    let thisMonthDays = new Date(year, month, 0).getDate();
    let lastMonthDays = new Date(year, month - 1, 0).getDate();
    let thisFirstDay = new Date(year, month - 1, 1).getDay();
    let prevFirstDay = lastMonthDays + 1 - thisFirstDay;
    let currentDay = 1;
    let nextFirstDay = 1;

    let table = "<table>\n";
    table += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    table += "  <tr>";
    for (let i = 0; i < 7; i++) {
        if (i < thisFirstDay) {
            table += `<td class="prev-month">${prevFirstDay++}</td>`;
        } else {
            let dayString = (currentDay === day) ? `<td class="today">${currentDay++}</td>` : `<td>${currentDay++}</td>`;
            table += dayString;
        }
    }
    table += "</tr>\n"

    let weeks = Math.floor((thisMonthDays - currentDay) / 7);

    for (let i = 0; i < weeks; i++) {
        table += "  <tr>";
        for (let i = 0; i < 7; i++) {
            let dayString = (currentDay == day) ? `<td class="today">${currentDay++}</td>` : `<td>${currentDay++}</td>`;
            table += dayString;
        }
        table += "</tr>\n"
    }

    table += "  <tr>";
    for (let i = 0; i < 7; i++) {
        if (currentDay <= thisMonthDays) {
            let dayString = (currentDay == day) ? `<td class="today">${currentDay++}</td>` : `<td>${currentDay++}</td>`;
            table += dayString;
        }else{
            table += `<td class="next-month">${nextFirstDay++}</td>`;
        }
    }
    table += "</tr>\n";
    table += "</table>";

    return table;
}

console.log(calendar([24, 12, 2012]));