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
        for(let i=0;i<allBlocks.length;i++){
            let randomNumber = Math.floor(Math.random()*6);
            
            if(randomNumber===0){
                allBlocks[i].classList.add("fall-one");
            }else if(randomNumber===1){
                allBlocks[i].classList.add("fall-two");
            }else if(randomNumber===2){
                allBlocks[i].classList.add("fall-three");
            }else if(randomNumber===3){
                allBlocks[i].classList.add("fall-four");
            }else if(randomNumber===4){
                allBlocks[i].classList.add("fall-five");
            }else if(randomNumber===5){
                allBlocks[i].classList.add("fall-six");
            }
        }
        setTimeout(()=>{
            location.reload();
        },3000)
    },0)
}