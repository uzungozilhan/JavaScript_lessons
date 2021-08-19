// const slowTask = () => {
//     let i = 0;
//     do {
//         i++;
//     } while (i < 900_000_000);
//     return "task is completed.";
// }
// console.time();
// console.log("hello");
// console.timeLog();
// slowTask();
// console.log("ara");
// console.timeLog();
// slowTask();
// console.log("son");
// console.timeEnd();

/** promise */

const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise started");
    let condition = true;
    if (condition) {
      resolve("işlem tamam");
    }
    reject(Error("gerçekleşmedi"));
  });
  console.log("merhaba");
  myPromise
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  console.log("gule gule");
































//setTimeout

// console.log("hello1");
// // alert("microphone") // bunu açtığımızda aşağıya geçmediği için tamam'a basılmadıkça aşağıya devam etmeueyyecektir. bu sebeple bu kodun setTimeout içine yazılması gerekir.

// // setTimeout(() => {
// //     alert("microphone")
// //     console.log("SetTimeout")
// // }, 0);
// console.log("hello2");
// slowTask()
// console.log("hello3");

// function slowTask() {
//     let i = 0;
//     do {
//         i++;
//     } while (i < 3_000_000_000);
// }

// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 500_000_000);
//     return "task is completed.";
//   };
  
//   console.log("¯\\_(ツ)_/¯");
//   console.time("bir");
//   // setTimeout
//   console.log("hello1");
//   console.timeLog("bir");
//   slowTask();
//   setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
//   }, 1000);
//   console.log("hello2");
//   console.timeLog("bir");
//   console.log("hello3");
//   console.timeLog("bir");

//************************************************************ */

// let counter = 0;


// function showtime(){
    
// const timeLabel = document.querySelector("p");
// // console.log(timeLabel);
// const time = new Date();
// timeLabel.innerHTML = document = time.toLocaleTimeString();
//     counter++
//     if (counter == 10) {
//         clearInterval(id);
//         timeLabel.innerHTML = "Merhaba"
// }
// }

// const id = setInterval((showtime), 1000);