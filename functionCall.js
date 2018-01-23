function outer()
{
  console.log("outer");
  let res = function inner()
  {
    console.log("inner");
    return 1;
  }

  return res;
}

console.log("function call" , outer());
