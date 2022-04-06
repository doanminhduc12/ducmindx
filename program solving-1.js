
function allLongestStrings(inputArray)
{  let max=0;
    for (const i of inputArray )
      if ((i.length)>max) max=i.length;
      for (const i of inputArray )
      if ((i.length)==max) console.log(i,",");

}
 let a=prompt("input");
allLongestStrings(a);