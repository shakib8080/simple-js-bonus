// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// function forLoop(i) {
//   if (i < 10) {
//     return;
//   }
//   console.log(i);

//   forLoop(i + 1);
// }

// var mobaileprice = 100;
// var mymoney = 500;
// if (mobaileprice < mymoney) {
//   console.log("need a mobaile ");
// } else {
//   console.log("no");
// }

// var biskitprice = 40;
// var breadprie = 20;
// var danishprice = 10;
// var mybudge = 400;
// var packet = true;

// if (biskitprice < mybudge) {
//   console.log("ami biskit khabo");
// } else if (breadprie < mybudge) {
//   console.log("ami bread khabo");
// } else if (danishprice == mybudge) {
//   console.log("ami danish khabo");
// } else {
//   console.log("ami khabona");
// }

// var number = 0;
// while (number < 10) {
//   number++;
//   console.log(number);
// }

// for (var num = 0; num <= 20; num++) {
//   console.log(num);
//   console.log("my number");
// }

// function singgara(taka) {
//   // console.log("singgara kine an ", taka);
//   var singgaraprice = 10;
//   var singgaraquantity = money / singgaraprice;
//   return singgaraquantity;
// }

// var money = 100;

// var singgaras = singgara(money);
// console.log("siggara de", singgaras);
// var myMoney = 200;
// function siggara(taka) {
//   var PerSiggara = 10;
//   var singgaraquantity = myMoney / PerSiggara;
//   return singgaraquantity;
// }
// console.log(siggara(myMoney));

// var Computer = {
//   Name: 'dell' ,
//   storage: '‘63gb'’,
//   Price: 200,
//   }

// var student = {
//   name: "shakib",
//   id: 848,
//   tittle: "rana",
// };
// // student.name = "rakib";
// student["name"] = "kasem";
// console.log(student);

// var color = "white";

// switch (color) {
//   case "blue":
//     console.log("color is blue");
//     break;
//   case "yellow":
//     console.log("color is yellow ");
//     break;
//   case "white":
//     console.log("color is white");
//     break;
//   default:
//     console.log("color is black");
// }

// var name = "shakib";
// switch (name) {
//   case "shakib":
//     console.log("name is shakib");
//     break;
//   case "rakib":
//     console.log("name is rakib");
//     break;
//   default:
//     console.log("no name  ");
// }

// var number = [50, 40, 44, 63, 35, 75, 35, 64, 46];
// for (var i = 0; i < number.length; i++) {
//   var allnumber = number[i];
//   if (allnumber < 63) {
//     Break;
//   }
//   console.log(allnumber);
// }

// var number = [50, 40, 44, 63, 35, 75, 35, 64, 46];
// for (var i = 0; i < number.length; i++) {
//   var allnumber = number[i];
//   // if (allnumber < 75) {
//   //   break;
//   // } else {
//   // //   continue;
//   // }
//   console.log(allnumber);
// }
// var number = 3841;
// function isodd(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isodd(number));

// function isleapyear(year) {
//   if (year % 4 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let MyYear = 2024;
// console.log(isleapyear(MyYear));
// let factorial = 1;
// for (let i = 1; i <= 7; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

function GetFectorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let factorialIs = 6;
console.log(GetFectorial(factorialIs));
