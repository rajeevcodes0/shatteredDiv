let shatteredDiv = document.getElementsByClassName("shattered-div")[0];
let shatterButton = document.getElementsByClassName("shatter-button")[0];

shatterButton.addEventListener("click",shatter);
let blockHeight = 5;
let blockWidth = 5;

function createBlock(elementNumber){
    let row=parseInt(elementNumber/40);
    let column=elementNumber%40;

    let newBlock = document.createElement("div");

    newBlock.className="block";

    newBlock.style.top=`${row*blockHeight}px`;
    newBlock.style.left=`${column*blockWidth}px`;
    shatteredDiv.append(newBlock);
}

for(let i=0;i<1600;i++){
    createBlock(i);
}

function shatter(){
    this.disabled=true;
    setTimeout(()=>{
        let allBlocks = document.getElementsByClassName("block");
        console.log(allBlocks);

        let factor = Math.random()*2000;
        for(let i=0;i<allBlocks.length;i++){
            allBlocks[i].style.top=`${Math.random()*factor}px`
            allBlocks[i].style.left=`${Math.random()*factor}px`
            allBlocks[i].style.opacity=0;
        }
        setTimeout(()=>{
            location.reload();
        },4000)
    },0)
}