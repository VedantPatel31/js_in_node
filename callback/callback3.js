user = {
    name: "Vedant",
    round: 1,
    pr: 80
}

function roundDetails(user) {
    console.log(user);
}

function sci(user) {
    console.log("science : " + user);
    if (user.round >= 1) {
        roundDetails(user)
    }
}
function com(user) {
    console.log("science : " + user);
    if (user.round >= 1) {
        roundDetails(user)
    }
}
function arts(user) {
    console.log("science : " + user);
    if (user.round >= 1) {
        roundDetails(user)
    }
}
function addmission(user, cb) {
    cb(user)
}

if (user.pr >= 75) {
    addmission(user, sci);
}
else if (user.pr >= 65) {
    addmission(user, com);
}
else if (user.pr >= 55) {
    addmission(user, arts)
}
