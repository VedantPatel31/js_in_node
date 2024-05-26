function demo(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success")
        },2000)
    })
    console.log("promise : ",promise);
    promise.then((data)=>{
        console.log("data : ",data); 
    })
    promise.catch((err)=>{
        console.log("error : ",err);
    })
}
// demo()
function fetchDemo(){
    var x=100;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x)
        },2000)
    })
}
fetchDemo().then((data)=>{
    console.log("data : ",data);
})
fetchDemo()