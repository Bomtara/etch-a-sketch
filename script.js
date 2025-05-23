const box = document.querySelector(".box");
const btn = document.querySelector(".btn")
let n = 10;
btn.addEventListener('click', function num(event) {
    const input = parseInt(prompt("Enter the number of grids in each row"), 10);
    n = input;
    handleGridCreation(n);
});
 

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

function handleGridCreation(n){
    box.innerHTML = "";
    const fragment = new DocumentFragment();
    const p = 100/n;
    for(let i =0; i< (n*n); i++){
        const box1 = document.createElement("div");
        box1.className = "box1";
        box1.style.cssText = "flex-basis:" + p + "%; ";
        box1.addEventListener('mouseenter', handleHoverEnter);
        fragment.append(box1);
        box.append(fragment);
    }
}

handleGridCreation(n);

