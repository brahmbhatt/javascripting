module.exports.fun = function upperCaser(input)
{
  return input.toString().toUpperCase();
}

module.exports.fun1 = function countLength(input)
{
  return input.length;
}
module.exports.fun2= function reverseString(input)
{
  return input.split("").reverse().join("");
}
