function repeat(operation, num) {
  if (num <= 0)
    return

  operation();

  setTimeout(function()
  {
    repeat(operation, --num);
  },1)
}
module.exports = repeat;
// function operation()
// {
//   console.log("welcome");
// }
//
// repeat(operation,5)
