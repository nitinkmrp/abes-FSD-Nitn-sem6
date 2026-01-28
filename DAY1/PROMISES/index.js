const myPromise = new Promise((resolve, reject) => {
    let marks = 75;
    if (marks >= 60) {
        resolve("You have passed the exam!");
    } else {
        reject("You have failed the exam.");
    }   
})
myPromise.then((message) => 
        console.log("Success: " + message)).catch((message) => 
        console.log("Error: " + message))  