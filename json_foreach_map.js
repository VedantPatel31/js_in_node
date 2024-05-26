let employee = [
    {
        firstName: "vedant",
        lastName: "patel",
        qualification: [
            {
                degree: "btech",
                collage: "GIT"
            }, {
                degree: "mtech",
                collage: "IIT"
            }
        ],
    }, {
        firstName: "sujal",
        lastName: "nayak",
        qualification: [
            {
                degree: "be",
                collage: "nirma"
            }, {
                degree: "me",
                collage: "daiict"
            }
        ]
    }
]

// for (let i = 0; i < employee.length; i++) {
//     console.log("firstName : ", employee[i].firstName);
//     console.log("lastName : ", employee[i].lastName);
//     for (let j = 0; j < employee[i].qualification.length; j++) {
//         console.log(employee[i].qualification[j]);
//     }
// }

// employee.forEach((emp) => {
//     console.log(emp.firstName);
//     console.log(emp.lastName);
//     emp.qualification.forEach((emp2) => {
//         console.log(emp2.degree);
//         console.log(emp2.collage);
//     })
// })

var emps1 = employee.map((emp) => {
    let emps = emp.qualification.map((emp2) => {
        return ({
            deg: emp2.degree,
            clg: emp2.collage,
        })
    })
    return ({
        fName: emp.firstName,
        lname: emp.lastName,
        qua: emps
    })
})
console.log(emps1);

