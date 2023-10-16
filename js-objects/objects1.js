// Task 4
const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

for (const book of englishBooks) {
    if (book.title === "The Great Gatsby") {
        
        continue;
    }

    if (book.year > 1940) {
        
        console.log(`Title: ${book.title}, Year: ${book.year}`);
    }

    if (book.author === "George Orwell") {
        
        book.author = "New Author";
    }
}

console.log(englishBooks);
// Task 5
const nestedObject = {
    outerProperty1: "Alex",
    outerProperty2: "Anna",
    innerObject: {
        innerProperty1: "age",
        innerProperty2: "language"
    }
};

for (let outerKey in nestedObject) {
    if (nestedObject.hasOwnProperty(outerKey)) {
        console.log(`Outer Key: ${outerKey}, Outer Value: ${nestedObject[outerKey]}`);

        // Check if the property is an object using instanceof
        if (nestedObject[outerKey] instanceof Object) {
            // Loop through the inner object
            for (let innerKey in nestedObject[outerKey]) {
                console.log(`Inner Key: ${innerKey}, Inner Value: ${nestedObject[outerKey][innerKey]}`);
            }
        }
    }
}

// Task 6
const user = {
    name: "Bob",
    age: 12,
    email: "123@gmail.com",
    address: {
        city: "Vinnitsia",
        postalCode: "22200"
    }
};

function getUserInfo({ name, age }) {
    return `User: ${name}, Age: ${age}`;
}

function getFullAddress({ email, address: { city, postalCode } }) {
    return `Email: ${email}, Address: ${city}, ${postalCode}`;
}

const userInfo = getUserInfo(user);
const fullAddress = getFullAddress(user);

console.log(userInfo);
console.log(fullAddress);


