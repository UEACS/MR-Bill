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
        newName.querySelector("img").addEventListener("click",removeItem);
        nameBox.after(newName);
        t.value = ""; // Removes all text input as the name has been added
    }
}

function removeItem(event)
{
    let item = event.currentTarget.parentElement;
    console.log(item.querySelector("a").innerHTML);
    item.remove();
    console.log("Item removed");
}

const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');
const nameBox = document.querySelector(".confirmed-box")
nameBox.querySelector("img").addEventListener("click",removeItem)

var instruction
var names = [];
card.querySelector("p").innerHTML = "MR-Bill-Web Version!";



nextButton.addEventListener("click", nextCard);