// const names = ['Artur', 'Bob', 'Vlad', 'Donald', 'F']
//
// console.log(names.sort())
//
// const numbers = [222, 4445, 55556, 666, 1, 2, 3, 4, 11]
//
// console.log(numbers.sort((a, b) => b - a))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

// console.log(students.sort((a, b) => a.scores - b.scores))
// console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

// bubble sort

// const nums = [13, 45, 67, 12, 99, 87]
//
// for (let j = 0; j < nums.length - 1; j++) {
//     let isSorted = true
//     for (let i = 0; i < nums.length - 1 - j; i++) {
//         if (nums[i] > nums[i + 1]) {
//             isSorted = false;
//             [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
//         }
//     }
//     if (isSorted) break
// }

// console.log(nums)

