// const myPromise = new Promise((resolve, reject) => {
//     let marks = 75;
//     if (marks >= 60) {
//         resolve("You have passed the exam!");
//     } else {
//         reject("You have failed the exam.");
//     }   
// })
// myPromise.then((message) => 
//         console.log("Success: " + message)).catch((message) => 
//         console.log("Error: " + message))  

// const f1 = async () => {
//     try {
//         const message = await myPromise;   
//         console.log(message);  
//     } catch (message) {
//         console.log(message);
//     }   }   
// f1()

// const getData = async () => {   
//     try {
//     const response = await fetch('https://fakestoreapi.com/products');
            
//     const res = await response.json();
//     console.log(res);
//     }  catch (error) {
//             console.log('unable to fetch data');
        
//     }
// }
// getData();
// let a;
// console.log(a);
// a = 35;
// {
//      a = 45;
//     console.log(a); 
//     a+=3;
//     console.log(a);
// }
// console.log(a);

