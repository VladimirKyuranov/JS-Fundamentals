function quiz(data) {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<quiz>\n";

    for (let i = 0; i < data.length; i += 2) {
        xml += "  <question>\n";
        xml += `    ${data[i]}\n`;
        xml += "  </question>\n";
        xml += "  <answer>\n";
        xml += `    ${data[i + 1]}\n`;
        xml += "  </answer>\n";
    }

    xml += "</quiz>";

    return xml;
}