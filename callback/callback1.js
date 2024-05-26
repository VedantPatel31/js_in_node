function demo(x){
    console.log("Demo");
    return x*x
}

function test(a){
    var ans = a(100)
    console.log(ans);
    return ans;
}

// test(10)
// test(10.5)
// test("Vedant")
// test(null)
// test(undefined)
// test(true)
// test([1,2,3,4,5])
// test({name : "Vedant" , age : 20})
var ans = test(demo)
console.log(ans);