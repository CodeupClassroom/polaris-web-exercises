const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 9
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let atLeastThreeLangs = users.filter(function (user) {
    return user.languages.length >= 3;
})

console.log(atLeastThreeLangs);

let emailAddresses = users.map(function (user) {
    return user.email;
});

console.log(emailAddresses);

let totalYearsExp = users.reduce(function (accumulator, user) {
    return accumulator + user.yearsOfExperience;
}, 0);

console.log(totalYearsExp);

let averageExp = totalYearsExp / users.length;

console.log(averageExp);

let longestEmail = users.reduce(function (currentLongest, user) {
    if (user.email.length > currentLongest.email.length) {
        return user;
    } else {
        return currentLongest;
    }
}, users[0]);

console.log(longestEmail.email);


let nameString = users.reduce(function (accumulator, user) {
    if (accumulator === ''){
        return "Your instructors are: " + user.name
    } else {
        return accumulator + ', ' + user.name;
    }

}, '')

console.log(nameString + ".");

let nameStringMap = users.map(function (user) {
    return user.name;
})

console.log("Your instructors are: " + nameStringMap + ".");


let concatLangs = users.reduce(function (accumulator, user) {
    return accumulator.concat(user.languages);
}, []);

console.log(concatLangs);

// USING INDEX OF
// let uniqueLangs = concatLangs.reduce(function (accumulator, currentValue) {
//     if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
//
//
// }, [])


// USING INCLUDES
let uniqueLangs = concatLangs.reduce(function (accumulator, currentValue) {
    if (accumulator.includes(currentValue)) {
        return accumulator;
    } else {
        accumulator.push(currentValue);
        return accumulator;
    }

}, [])

console.log(uniqueLangs);











