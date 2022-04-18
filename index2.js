const res = document.getElementById("result");
const res_2 = document.getElementById("result_2");
function printStars() {
    const star_input = document.getElementById("star_input").value;
    if (star_input) {
      let view = "";
      for (var i = 1; i <= Number(star_input); i++) {
        let stars = "";
        for (j = 1; j <= i; j++) {
          stars += "*";
        }
        view += `<div>${stars}</div>`;
      }
      res_2.innerHTML = view;
    }
  }
  
  