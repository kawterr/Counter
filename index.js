let countEl = document.getElementById("count-el")
let count = 0

function color(){
    if (count < 0){
        countEl.style.color= "red"}
    else if (count > 0){
    countEl.style.color= "green"}
    else countEl.style.color = "black"

}


function increment() {
    count += 1
    countEl.textContent = count
    color();

    
} 

function decrement(){

    count -= 1
    countEl.textContent =  count
    color();

}

function reset(){
    count = 0 
    countEl.textContent = count 
    color();
}