

const timer=()=>{
    let end="04 February 2025 00:00:00"
let endDate=new Date(end);
let startDate=new Date();

console.log(endDate-startDate);

let diff=(endDate-startDate)/1000;

let days=diff/3600/24;
// console.log(Math.floor(days));
let hours=(diff/3600)%24;
// console.log(Math.floor(hours));
let minutes=(diff/60)%60;
// console.log(Math.floor(minutes));
let seconds=(diff)%60;
// console.log(Math.floor(seconds));

var inputs=document.querySelectorAll("input");
inputs[0].value=Math.floor(days);
inputs[1].value=Math.floor(hours);
inputs[2].value=Math.floor(minutes);
inputs[3].value=Math.floor(seconds);
}

setInterval(()=>{
    timer();
},1000)



