function PersonsUpdate(t)
{
    let text = t.value;
    console.log("outed <"+text+">");
    if (text.indexOf(",") != -1)
    {
        let position = text.indexOf(",");
        console.log(", found at position "+position);
        text = text.substring(0,position)
        console.log(text);
        // Make new name item
        let newName = nameBox.cloneNode(true);
        newName.querySelector("a").innerHTML = text;
        nameBox.after(newName);
        t.value = ""; // Removes all text input as the name has been added
    }
}

const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');
const nameBox = document.querySelector(".confirmed-box")

var instruction
var names = [];
card.querySelector("p").innerHTML = "MR-Bill-Web Version!";



nextButton.addEventListener("click", nextCard);