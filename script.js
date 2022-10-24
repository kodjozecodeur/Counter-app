
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
        count+= 1;
        countEl.innerText = count;
//     // console.log(count);
}
let saveEl = document.getElementById("save-el");
function save () {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}

function reset() {
    // console.log("back to the normal state");
    countEl.textContent = 0;
    count = 0;
}











// let welcomeEl = document.getElementById('welcome-el');
// let name = 'Sam'
// let greeting = 'Welcome to the basement';
// welcomeEl.innerText = greeting + ' ' + name;
// welcomeEl.innerText += "😻";