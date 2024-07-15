// 1 \

/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
 */

/* function forLoop(number) {
  if (number > 10) {
    return;
  }
  console.log(number);
  forLoop(number + 1);
}
forLoop(1);
 */

function callFunction(i) {
  if (i > 10) {
    return;
  }
  console.log(i);
  callFunction(i + 1);
}
callFunction(1);
