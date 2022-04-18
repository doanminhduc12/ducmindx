const res = document.getElementById("result");
const res_2 = document.getElementById("result_2");
function nt(n){
    let a=1;
    let i;
    for (i=2;i<n;i++) if (n%i==0) {a=0;break;}
    if (a==0) return false; else return true;
}
function printNumbers() {
  const value_a = document.getElementById("a").value;
  const value_b = document.getElementById("b").value;
  if (value_a && value_b) {
    let text = "";
    for (var i = Number(value_a); i <= Number(value_b); i++) 
        if (nt(i)==true)
        {
      text += ` ${i}`;
    }
    res.innerHTML = text;
  }
}

