function solve(input) {

    let pattern = /^<message( +[a-z]+="[a-zA-Z .\d]+")+>(.|\n)+<\/message>$/g;
    
    if (!pattern.test(input)){
        return "Invalid message format";
    }
    
    let toPattern = /to="([a-zA-Z .\d]+)"/;
    let fromPattern = /from="([a-zA-Z .\d]+)"/;
    
    if (!toPattern.test(input) || !fromPattern.test(input)) {
        return "Missing attributes";
    }
    
    let messagePattern = />((.|\n)+)</g;
    
    let from = input.match(fromPattern)[1];
    let to = toPattern.exec(input)[1];
    let message = messagePattern.exec(input)[1].split(/\n/g);

    let result = "<article>\n";
    result += `  <div>From: <span class="sender">${from}</span></div>\n`;
    result += `  <div>To: <span class="recipient">${to}</span></div>\n`;
    result += "  <div>\n";

    for (let index = 0; index < message.length; index++) {
        result += `    <p>${message[index]}</p>\n`;
    }

    result += "  </div>\n</article>";

    return result;
}

console.log(solve("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254092\">Hey man,\nwhat's up?</message>"));
