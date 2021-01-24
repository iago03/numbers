var resultBtn = document.querySelector(".result-btn");
var numBtn = document.querySelectorAll(".btn");
var startBtn = document.querySelector(".start");
var deleteBtn = document.querySelector(".delete");

var numResult = new Array();

for(var i = 0; i < numBtn.length; i++){
    numBtn[i].addEventListener("click",function()
    {
        numResult.push(this.textContent);
    })
}

startBtn.addEventListener("click",function(){
    resultBtn.textContent = "";
    for(var i = 0; i < numResult.length; i++){
         for(var j = 0; j < numBtn.length; j++){
            draw(i, j);
         }
    }
})

function draw(indes1, index2){
    setTimeout(function(){
        if(numResult[indes1] == numBtn[index2].textContent){
            resultBtn.textContent += numResult[indes1];
            numBtn[index2].classList.add("green");
            setTimeout(function(){numBtn[index2].classList.remove("green");},500);
        }
    },700 * indes1);
}


deleteBtn.addEventListener("click",function(){
    resultBtn.textContent = "...";
    numResult = [];
});


