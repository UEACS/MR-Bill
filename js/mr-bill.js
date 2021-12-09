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
        newName.querySelector("img").addEventListener("click",RemovePerson);
        nameBox.after(newName);
        t.value = ""; // Removes all text input as the name has been added
    }
}

function RemovePerson(event)
{
    let item = event.currentTarget.parentElement;
    console.log(item.querySelector("a").innerHTML);
    item.remove();
    console.log("Item removed");
}

function NewItem()
{
    //document.querySelector("#num0") // TODO: Replace with a template
    let newItem = document.querySelector("#num0").cloneNode(true);
    newItem.querySelector("img").addEventListener("click",RemovePerson);
    document.querySelector("#num0").after(newItem);
}

const nextButton = document.querySelector('#next-button');
const card = document.querySelector('.card');
const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');
const nameBox = document.querySelector(".confirmed-box")
nameBox.querySelector("img").addEventListener("click",RemovePerson)
const newItemButton = document.querySelector("#new");
newItemButton.addEventListener("click",NewItem)

var instruction
var names = [];
card.querySelector("p").innerHTML = "MR-Bill-Web Version!";



nextButton.addEventListener("click", nextCard);