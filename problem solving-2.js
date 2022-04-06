function alternatingSums(a)
{  let sum1=0,sum2=0;
    for (let i = 0; i < a.length;i++) 
    if (i%2==0) sum1 +=a[i]; else sum2 +=a[i];
    console.log(sum1,sum2);
}
let a= parseInt (prompt("input"));
alternatingSums(a);
    