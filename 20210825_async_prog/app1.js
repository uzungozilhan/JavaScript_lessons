

/*
setTimeout & setInterval recap
write a function which counts up to given seconds and stop counting
it should log to the console
n seconds passed
n+1 seconds passed etc
counter finished
*/
// setInterval
function countSeconds(limit) {
  let current = 0;
  const intId = setInterval(() => {
    if (current == limit) {
      clearInterval(intId);
      console.log('counter finished.');
      return;
    }
    current++;
    console.log(`${current} seconds passed.`);
  }, 1000);
}
// countSeconds(4);

// setTimeout
let current = 0;
function countSeconds2(limit) {
  // recursive
  if (current > limit) {
    console.log('counter finished.');
  } else {
    if (current != 0) {
      console.log(`${current} seconds passed.`);
    }
    current++;
    setTimeout(countSeconds2, 1000, limit);
  }
}
// countSeconds2(3);


//**********PROMISE************ */

new Promise(function (resolve, reject) {
    const isSuccesful = true;
    if (isSuccesful) {
       resolve('task is completed..')
    }
    reject('failed')
})
    .then((sonuc) => {
        console.log(sonuc);
        return 'devam ediyor';
    })