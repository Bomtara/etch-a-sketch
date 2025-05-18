const box = document.querySelector(".box");
const fragment = new DocumentFragment();
const btn = document.querySelector(".btn")
btn.addEventListener('click', num)
let n = 10;
function num(event) {
    n = parseInt(prompt("Enter the number of grids in each row"), 10);
} 

const p = 100/n;


function handleHoverEnter(event){
    const hoveredDiv = event.target;
    const randc = Math.floor(Math.random()*16777215);
    let randcolor = randc.toString(16);
    let hoverCount = parseInt(hoveredDiv.dataset.hoverCount || '0', 10);
    if(hoverCount<10){
        hoveredDiv.style.backgroundColor = "#"+randcolor ;
        let opac = (hoverCount+1)*10;
        hoveredDiv.style.opacity = opac.toString() + "%";
        hoverCount++;
        hoveredDiv.dataset.hoverCount = hoverCount.toString();
    }
}

for(let i =0; i< (n*n); i++){
    const box1 = document.createElement("div");
    box1.className = "box1";
    box1.style.cssText = "flex-basis:" + p + "%; ";
    box1.addEventListener('mouseenter', handleHoverEnter);
    fragment.append(box1);
}

box.append(fragment);