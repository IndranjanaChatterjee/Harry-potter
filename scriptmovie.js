const sec = document.querySelectorAll(".s");
let i = 0;
const right = document.getElementById("right");
const left = document.getElementById("left");
right.addEventListener("click", () => {
    
    ++i;
    console.log(i);
    if (i == sec.length) {
      i = 0;
    }
  sec.forEach((e) => {
    e.style.display = "none";
  });
  sec[i].style.display = "block";
  
  
});
left.addEventListener("click", () => {
   --i;
    console.log(i);
    if (i == -1) {
      i = sec.length-1;
    }
    
    sec.forEach((e) => {
      e.style.display = "none";
    });
    sec[i].style.display = "block";
    
    
  });
