let shatteredDiv = document.getElementsByClassName("shattered-div")[0];
let shatterButton = document.getElementsByClassName("shatter-button")[0];

shatterButton.addEventListener("click",shatter);
let blockHeight = 10;
let blockWidth = 10;

let elementsInARow = 200/blockWidth;
let totalElements = (200*200)/(blockHeight*blockWidth);

function createBlock(elementNumber){
    let row=parseInt(elementNumber/elementsInARow);
    let column=elementNumber%elementsInARow;

    let newBlock = document.createElement("div");

    newBlock.className="block";

    newBlock.style.top=`${row*blockHeight}px`;
    newBlock.style.left=`${column*blockWidth}px`;
    shatteredDiv.append(newBlock);
}

for(let i=0;i<totalElements;i++){
    createBlock(i);
}

function shatter(){
    this.disabled=true;
    setTimeout(()=>{
        let allBlocks = document.getElementsByClassName("block");
        console.log(allBlocks);

        let factor = (Math.random()*2000)+1500;
        for(let i=0;i<allBlocks.length;i++){
            allBlocks[i].style.top=`${Math.random()<0.5?"-":"+"}${Math.random()*factor}px`
            allBlocks[i].style.left=`${Math.random()<0.5?"-":"+"}${Math.random()*factor}px`
            allBlocks[i].style.opacity=0;
        }
        setTimeout(()=>{
            location.reload();
        },4000)
    },0)
}