// function fetchData (){

//     fetch("https://reqres.in/api/users?page=2",{
//         method: "GET",
//     }).then((res)=>{

//         //console.log(res) JSON
//         res.json().then((data)=>{
//             console.log(data)
//         })

//     }).catch((err)=>{
//         console.log(err)
//     })


// }
async function fetchData (){


    const res = await fetch("https://reqres.in/api/users?page=2",{
        method: "GET",
    })

    const data = await res.json()
    console.log(data)


}


fetchData()