


console.log("Hello")

console.log("Farhan")


// setTimeout(fn, delay in ms)
setTimeout(() => {
    console.log("How are you?")
}, 5000);     // ms = 0 করে দিলেও কিছু সময় পর run হবে কারণ setTimeout হচ্ছে asynchronous. So, সব synchronous code run হওয়ার পর asynchronous code run হবে।


console.log("What's your age?")




// setTimeout(fn, delay in ms)

// let count = 0;
// setInterval(()=> {
//     count++;
//     console.log(count);
// }, 1000);




setInterval(() => {
    let date = new Date();
    let time = date.toTimeString();
    console.log(time);
}, 1000);



// clearInterval()

let count = 0;
const counter = setInterval(()=> {
    count++;
    console.log(count);
    if (count === 5){
        clearInterval(counter);
    }
}, 1000);

