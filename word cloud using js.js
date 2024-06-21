let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let addBtn = document.getElementById("addBtn");
let errorMsg = document.getElementById("errorMsg")

function onAdd(word) {
    let randomSize = Math.ceil(Math.random() * 40) + "px"
    let wordEle = document.createElement("span");
    wordEle.textContent = word;
    wordEle.style.fontSize = randomSize;
    wordEle.style.margin = "10px"
    wordsContainer.appendChild(wordEle);
}
for (let i of wordCloud) {
    onAdd(i);
}

addBtn.onclick = function() {
    let userInput = document.getElementById("userInput");
    let userInputValue = userInput.value;
    if (userInputValue === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        onAdd(userInputValue);
    }
}