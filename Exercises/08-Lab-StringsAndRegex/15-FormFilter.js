function solve(name, email, phone, form) {

        form.forEach(line => {
            line = line.replace(/<![a-zA-Z]+!>/g, name)
                .replace(/<@[a-zA-Z]+@>/g, email)
                .replace(/<\+[a-zA-Z]+\+>/g, phone);
            console.log(line);
        })
}

solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);