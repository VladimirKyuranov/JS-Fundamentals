function solve(input) {
    let result = [];

    for (let username of input) {
        let [user, email] = username.split('@');
        email = email.split('.').map(e => e[0]).join('');
        user += `.${email}`;
        result.push(user);
    }

    return result.join(", ");
}

console.log(solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));