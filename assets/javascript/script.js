
// wait for DOM to finish loading before running the game
// Get the button elements and add event listeners (button clicks etc) to them
// let button of buttons is modern version of let i = 0; i < buttons.length; i++)
document.addEventListener("DOMcontentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
     
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }

        })
    }
})
function runGame(){

}




function checkAnswer(){

}
function calculatecorrectAnswer {

}
function IncrementScore(){

}
function IncrementWrongAnswer(){

}
function DisplayAdditionQuestion(){

}
function DisplaySubtractQuestion(){

}
function DisplaymultiplicationQuestion(){

}
function DisplayDivisionQuestion(){

}