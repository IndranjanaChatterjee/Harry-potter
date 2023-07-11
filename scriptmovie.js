const sec = document.querySelectorAll(".s");
let i = 1;
const right = document.getElementById("right");
const left = document.getElementById("left");
right.addEventListener("click", () => {
    console.log(i);
  
  sec.forEach((e) => {
    e.style.display = "none";
  });
  sec[i].style.display = "block";
  ++i;
  if (i == sec.length) {
    i = 0;
  }
});
left.addEventListener("click", () => {
    console.log(i);
    
    sec.forEach((e) => {
      e.style.display = "none";
    });
    sec[i].style.display = "block";
    --i;
    if (i == -1) {
        i = sec.length-1;
      }
  });
