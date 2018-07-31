function upperCase(sentence) {
    let words = sentence.split(/\W+/).filter(w => w != "").map(w => w.toUpperCase());
    console.log(words.join(", "));
}

upperCase("Hi,    how   are you?");