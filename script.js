const wand = document.getElementById("wand");
const click=document.getElementById("click");
let music;
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  wand.style.top=y-110+"px";
  wand.style.left=x-110+"px";
});
click.addEventListener("click",()=>
{
    music=new Audio("harry.mp3");
    music.play();

})
