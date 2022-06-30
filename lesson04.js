const todolistID_1 = 'qwer'
const todolistID_2 = 'asdf'

const todolist = [
    {
        todolistID_1: 1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        todolistID_2: 2,
        title: 'What to by',
        filter: 'all',
    },
]

const tasks = {
    [todolistID_1]: [
        {id: 1, title: 'js', isDone: false},
        {id: 2, title: 'js', isDone: false},
        {id: 3, title: 'js', isDone: false},
        {id: 4, title: 'js', isDone: false},
    ],
    [todolistID_2]: [
        {id: 11, title: 'Milk', isDone: false},
        {id: 12, title: 'Cheese', isDone: false},
        {id: 13, title: 'Ice-cream', isDone: false},
    ]
}

console.log(tasks[todolistID_1][0].title)

// reduce
const nums = [10, 20, 30] // sum - ?
console.log(nums.reduce((acc, el) => {
    acc += el
    return acc
}, 0))

let students = [
    {
        id:1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id:2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id:3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id:4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.map(st => ({...st, scores: st.scores + 10})))

console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))

const st = {
    1: {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    }
}

console.log(students.reduce((acc,el)=>{
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

