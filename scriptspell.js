const spells = document.querySelectorAll(".s");
let i = 1;
const btn = document.querySelector(".next");
btn.addEventListener("click", () => {
  /*for (i = 0; i < spells.length; i++) {
    console.log(spells[i].innerHTML);
  }*/
  if(i==spells.length)
  {
    i=0;
  }
  spells.forEach((e)=>
  {
    e.style.display="none";

  })
  spells[i].style.display="block";
  ++i;
});
