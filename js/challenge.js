const initialize = () => {
    startCounter();
    
    document.querySelector("#plus").addEventListener("click", plus);

    document.querySelector("#minus").addEventListener("click", minus);

    document.querySelector("#pause").addEventListener("click", pauseTimer);
    
    document.querySelector("#heart").addEventListener("click", likeButton);

    document.querySelector("#comment-form").addEventListener("submit", submitComment);

    document.getElementById('restart').addEventListener("click", restartButton);
}

function startCounter() {
    interval= setInterval(increase, 1000);
}

function increase () {
    let counter = document.querySelector("#counter");
    let count = parseInt(counter.innerText);
    if (count < 20){
        counter.innerText = count + 1
    }
}

function minus () {
    let counter = document.querySelector("#counter");
    let count = parseInt(counter.innerText);
    if (count < 20){
        counter.innerText = count - 1
    }
}
function plus () {
        let counter = document.querySelector("#counter");
        let count = parseInt(counter.innerText);
        if (count < 20){
            counter.innerText = count +1
        }
    }

function pauseTimer() {
    let buttonName = document.querySelector("#pause");
    if (buttonName.innerText === "pause") {
        clearInterval(interval);
        buttonName.innerText = "play"
    } else {
        setInterval(startCounter(), 1000);
        buttonName.innerText = "pause";

    }
}

function likeButton () {

    const counter = document.querySelector("#counter");
    const count = parseInt(counter.innerText); //count
    
    const likesContainer = document.querySelector("ul.likes"); // ul for li 
    let likesLi = document.getElementById(`likes-for-${count}`);
        
    if (likesLi) {
       likesLi.dataset.likes = parseInt(likesLi.dataset.likes) + 1;
       likesLi.innerText = `You Liked ${count} ${likesLi.dataset.likes} times.`;
    }else {
        const newLikeLi = document.createElement('li');
        newLikeLi.dataset.count = counter;
        newLikeLi.setAttribute('id', `likes-for${count}`);
        newLikeLi.dataset.likes = 1;
        newLikeLi.innerText = `You Liked ${count} ${newLikeLi.dataset.likes} times.`;
        likesContainer.appendChild(newLikeLi);
         
    }
}


function submitComment (e) {
    e.preventDefault();
    let commentInput = document.querySelector("#comment-input").value;
    console.log(commentInput);
    const pTagComments = document.createElement("p");
    pTagComments.innerHTML = commentInput;
    document.querySelector("#comment-form").appendChild(pTagComments);
    document.querySelector("#comment-input").value = "";
}

document.addEventListener("DOMContentLoaded", initialize);
