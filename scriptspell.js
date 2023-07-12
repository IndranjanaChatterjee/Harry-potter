const spells = document.querySelectorAll(".s");
let i = 0;
const btn = document.querySelector(".next");
const back = document.querySelector(".back");
btn.addEventListener("click", () => {
  /*for (i = 0; i < spells.length; i++) {
    console.log(spells[i].innerHTML);
  }*/
  ++i;
  console.log(i);

  if (i == spells.length) {
    i = 0;
  }
  spells.forEach((e) => {
    e.style.display = "none";
  });
  spells[i].style.display = "block";
  
});
back.addEventListener("click", () => {
  --i;
  console.log(i);

  if (i == -1) {
    i = spells.length-1;
  }
  spells.forEach((e) => {
    e.style.display = "none";
  });
  spells[i].style.display = "block";
  
});
