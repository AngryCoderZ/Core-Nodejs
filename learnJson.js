// const student = [
//     {
//         id: 1,
//         name: "abc",
//         email: "abc@gmail.com"
//     },
//     {
//         id: 2,
//         name: "abc2",
//         email: "abc2@gmail.com"
//     },
//     {
//         id: 3,
//         name: "abc3",
//         email: "abc3@gmail.com"
//     }
// ]

// console.log(student[2])


const student = {
    std1: {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
        moreData:{
        father_detail:{
            name:"test",
            job:"123",
        },
        hobies:["cricket","table tennis","exercise"]
    }
    },
    std2: {
        id: 2,
        name: "abc2",
        email: "abc2@gmail.com"
    },
    std3: {
        id: 3,
        name: "abc3",
        email: "abc3@gmail.com"
    }
}
console.log(student.std1.moreData.hobies[2])











// const server = JSON.stringify(data)
//  console.log(server)

//  const parse = JSON.parse(server)

//  console.log(parse)



