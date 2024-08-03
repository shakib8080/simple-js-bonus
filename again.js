// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

function forLoop(i) {
  if (i < 10) {
    return;
  }
  console.log(i);

  forLoop(i + 1);
}
forLoop(1);
