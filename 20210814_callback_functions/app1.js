// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each
//

// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// let arrDeposits = [];
// let arrWithdraws = [];
// let withdrawnMoney = 0;
// let depositedMoney = 0;

// movements.forEach((sayi) => {
//   if (sayi < 0) {
//     arrWithdraws.push(sayi * -1)
//     console.log(`You withdrew $${sayi * -1}`)
//     withdrawnMoney += sayi;
//   } else {
//     arrDeposits.push(sayi)
//     console.log(`You deposited $${sayi}`)
//     depositedMoney += sayi
//   }
// })

// console.log(`Totaly withdrown money is $${withdrawnMoney*-1}`);
// console.log(`Totaly deposited money is $${depositedMoney}`);

/****************************************************************** */

// map initials
// const str = 'Clarusway Online Career IT Training School';
// let str2 = str.split(" ");
// console.log(str2)
// const str3 = str2.map((word) => {
    //     console.log(word)
    // })
    
    
/****************************************************************** */

// map

// tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

//****************MY OWN SOLUTION***************************** */

// const str = 'The Quick Brown Fox';
// let swappedCase = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         swappedCase += str[i].toUpperCase()
//     } else if (str[i] === str[i].toUpperCase()) {
//         swappedCase += str[i].toLowerCase()
//     }
// }
// console.log(swappedCase)










// const str1 = 'The Quick Brown Fox';
// let newLetters = "";
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === str1[i].toLowerCase()) {
//         newLetters += str1[i].toUpperCase();
//     } else {
//         newLetters += str1[i].toLowerCase();
//     }
// }
// console.log(newLetters);

//******************************************************************* */
// var newstr = str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
// console.log(newstr)
// console.log(str)

//******************************************************************* */

// let arrWord = (str.split(""))
// let strnew = "";
// arrWord.forEach(element => element == element.toUpperCase() ? strnew += element.toLowerCase() : strnew+=element.toUpperCase())
// console.log(strnew)


//******************************************************************* */

// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// const arrayOutput=[]
// for (let index = 0; index < str.length; index++) {
    //     const element = str[index];
    //     if (element===element.toUpperCase()) {
        //         arrayOutput.push(element.toLowerCase())
        //     }
        //     if (element===element.toLowerCase()) {
            //         arrayOutput.push(element.toUpperCase())
            //     }
            // }
            // console.log(arrayOutput.join(""))

 //******************************************************************* */
 
//  const str = 'The Quick Brown Fox';

// function harf (str, cb) {
//     let str1 = str.split("");
//     let newArray = str1.map((i) => {
//         if (i === i.toLowerCase()) { return i.toUpperCase()}
//         else {return i.toLowerCase()}
//         }
//     )
//     cb(newArray.join(""));
// }

// harf(str, console.log); 
 
 //******************************************************************* */
 
//  const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(
//     str
//         .split('')
//         .map((letter) =>
//             UPPER.indexOf(letter) !== -1
//                 ? letter.toLowerCase()
//                 : letter.toUpperCase()
//         )
//         .join('')
// );
 
 //******************************************************************* */
 
 
 
 
 
 //filter words longer than 6 letters
//  const words = [
//        'spray',
//        'limit',
//        'elite',
//        'exuberant',
//        'destruction',
//        'present',
//        'Clarusway',
//        'Future',
// ];
     
// const longWords1 = words.filter((word) => {
//     return word.length > 6
// });
// const longWords2 = words.filter(word => word.length <= 6);
// console.log(longWords1)
// console.log(longWords2)
     
//******************************************************************* */

// const cart = [
//     {
//       item: "🍫",
//       price: 5,
//       vat: 8,
//     },
//     {
//       item: "🍌",
//       price: 5,
//       vat: 8,
//     },
//     {
//       item: "🥐",
//       price: 7,
//       vat: 18,
//     },
//     {
//       item: "🍰",
//       price: 15,
//       vat: 18,
//     },
//     {
//       item: "🎂",
//       price: 25,
//       vat: 1,
//     },
//     {
//       item: "🥧",
//       price: 20,
//       vat: 1,
//     },
//   ];
//   // 1
//   let sum1 = 0;
//   for (let i = 0; i < cart.length; i++) {
//     const element = cart[i];
//     sum1 += element.price;
//   }
//   console.log(`Solution with for loop: ${sum1}`);
//   //   // 2
//   let sum2 = 0;
//   for (const iterator2 of cart) {
//       sum2 += iterator2.price
//     }
// console.log(`Solution with for...of loop: ${sum2}`);

// //   // 3
// let sum3 = 0;
// cart.forEach(item => sum3 += item.price);
// console.log(`Solution with forEach loop: ${sum3}`);

// // 4
//   const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
//   console.log(`Solution with map and reduce: ${result}`);
  
//   // 5
//   const re = cart.reduce((sum, curItem) => {
//     return sum + curItem.price;
//   }, 0);
//   console.log("re :>> ", re);
  
//   const vat = cart.reduce((sum, curItem) => {
//     return sum + (curItem.price * curItem.vat) / 100;
//   }, {});
// console.log("vat :>> ", vat);
  
/*
--------------
for in example
--------------
*/
// const parent = {
//     firstName: "Mike",
//     lastName: "Doe",
//     profession: "Barber",
//   };
  
//   function Baby() {
//     this.firstName = "unnamed";
//     this.weight = 3.4;
//   }
  
//   Baby.prototype = parent;
  
//   var sally = new Baby();
//   sally.firstName = "Sally";
  
//   for (const prop in sally) {
//     const element = sally[prop];
//     console.log(prop, ":>>", element);
//     if (Object.hasOwnProperty.call(sally, prop)) {
//     }
// }
  
/*forEach  neden kullanıyoruz sorusuna cevap şu şekilde,
doğrudan sonucu üretmeyeceğiz ama array üzerinde kesintisiz işlem yapmak istiyorsak forEach kullanıyoruz. forEach i break ile durduramayız.
for of yapısı ile array i dolaşmak için kullanıyoruz. for döngüsünün daha basit yazımı gibi düşünebiliriz. Objectlerde kullanamayız
for in yapısı ise objectlerin attribute/propertylerine tek tek erişmek için kullanıyoruz. hasOwnProperty kontrolü yapmaz isek prptotip hiyerarşisinde tüm özelliklerini getirir.*/
