function solve(input) {

    let matches = [];
    let regex = /www\.[a-zA-Z\d-]+(\.[a-z]+)+/g;

    for (let text of input) {
        let match = text.match(regex);

        if (match) {
            matches = matches.concat(match);
        }
    }

    return matches.join('\n');
}

console.log(solve(
    ['Join WebStars now for free, at www.web-stars.com',
     'You can also support our partners:',
     'Internet - www.internet.com',
     'WebSpiders - www.webspiders101.com',
     'Sentinel - www.sentinel.-ko']
));