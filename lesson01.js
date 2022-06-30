// const arr = [1,2,3,4,5,6]
// const copyUser = user;

// user.name = "Anne";
// console.log(copyUser);

// const realCopyUser = {...user};

// realCopyUser.name = user.name;
// realCopyUser.age = user.age;
// realCopyUser.isMarried = user.isMarried;

// const realCopyArr = [...arr]
//
// console.log(realCopyUser);
// console.log(realCopyUser === user);
// console.log(copyUser === user);
// console.log(realCopyArr)
//
// realCopyArr.name = "Bob";

// console.log(user)
//
// const copyUser = {...user}
//
// console.log(copyUser);
//
// copyUser.friends.push("Lili");
//
// console.log(user === copyUser)  // false
// console.log(user.friends === copyUser.friends) // true
//
// const deepCopy = {...user, friends: [...user.friends]};
//
// console.log(user === deepCopy)  // false
// console.log(user.friends === deepCopy.friends) // true

const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}
const deepCopyUser = {
    ...user,
    friends: [...user.friends],
    address: {...user.address}
}

console.log(user === deepCopyUser);
console.log(user);
console.log(deepCopyUser);

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"}
]

const shallowCopyStudents = [...students];

// const deepCopyStudents = [];
// for(let i = 0; i < students.length; i++) {
//     deepCopyStudents[i] = {...students[i]}
// }

const deepCopyStudents = students.map(student => ({...student}));

console.log(deepCopyStudents)

console.log(students === shallowCopyStudents);
console.log(students[0] === deepCopyStudents[0]);
console.log(students[1] === deepCopyStudents[1]);
console.log(students[2] === deepCopyStudents[2]);

