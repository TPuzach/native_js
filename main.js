// const user = {name: "Bob"}
// const user2 = user
// user2.name = "Alex"
// console.log(user.name)
//
// const arr=[1,2,3,4] // #13
// // arr.push(5)
// // console.log(arr)
// const newArr = arr.concat(5) // #14
// console.log(arr === newArr); // false

//CRUD
const users =[
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
    },
]

const newUser={
    id: 5,
    name: "John",
    isStudent: true,
}
//Create
const copyUsers = [...users,newUser]
// console.log(copyUsers)


//Read
//Update
const updatedUsers = copyUsers.map(u => u.id === 2 ? {...u, isStudent:false}: u)
// console.log(updatedUsers)

//Delete
// id:4
const deletedUsers = updatedUsers.filter(u => u.id !== 4 ) // true
// console.log(deletedUsers)

const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "1234@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-2-3-4-55-6",
    "website": "hildegard.org",
    "company": {
        "name": "Roma",
        "catchPhrase": "Multi-layer",
        "bs": "harness real-time e-markets"

    }
}

const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: "harness" }}
// console.log(superUserCopy)

const superUserCopy2 = {...superUser, address: {...superUser.address, geo: {...superUser.address.geo, lng: "12345"}}}
// console.log(superUserCopy2)

const copyUser = {...superUser, "email": "14"}
console.log(copyUser)