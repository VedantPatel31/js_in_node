hello = function () {
    console.log("hello");
    const inputname = prompt("Enter Your Name : ");
    console.log("name = ", inputname);
}
hello = () => {
    console.log("Hello World!");
    const inputname = prompt("Enter Your Name : ");
    console.log("name = ", inputname);
}
hello();
const jsonObj = {
    name: "Vedant",
    sname: "patel",
    age: 18
};

json = JSON.stringify(jsonObj);
console.log(json);

newJson = JSON.parse(json);
console.log(newJson);