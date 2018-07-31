function imgTag(imageArgs) {
    let location = imageArgs[0];
    let altText = imageArgs[1];

    let tag = `<img src="${location}" alt="${altText}">`;
    console.log(tag);
}