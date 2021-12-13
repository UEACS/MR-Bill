const nameInput = document.querySelector('#name');
const namesContainer = document.querySelector('#names');

const newItemButton = document.querySelector("#new");
newItemButton.addEventListener("click", newItem);

function personsUpdate() {
    let text = this.value;
    //console.log("outed <" + text + ">");
    if (text.indexOf(",") != -1) {
        if (text != ",") // Prevents blank names being added
        {
            let position = text.indexOf(",");
            console.log(", found at position " + position);
            text = text.substring(0, position)
            console.log("Text: "+text);
            // Make new name item
            let newName = document.createElement("div");
            newName.className = "confirmed-box";
            newName.innerHTML = `
                <a>Person</a>
                <img id="remove-person" src="media/Cross.png" />
            `;
            newName.querySelector("a").innerHTML = text;
            newName.querySelector("#remove-person").addEventListener("click", removeElement);
            this.parentElement.appendChild(newName);
        }
        this.value = ""; // Removes all text input as the name has been added
    }
}

function removeElement(event) {
    let item = event.currentTarget.parentElement;
    item.remove();
    console.log("Item removed");
}

/**
 * Add a new row to the list of items.
 */
function newItem() {
    let newItemElm = document.createElement("div");
    newItemElm.className = "complete-item";

    newItemElm.innerHTML = `
    <input type="currency" id="price" name="price" value="0" placeholder='0' onClick="this.select();" />
    <input type=text id="name" name="name" placeholder="Item" onClick="this.select();" />
    <div class="input-box">
        <input type=text id="persons" name="persons" placeholder="Person(s)" />
    </div>
    <img id="remove-item" src="media/Cross.png" />
    `;

    newItemElm.querySelector("#persons").addEventListener("keyup", personsUpdate);
    newItemElm.querySelector("#remove-item").addEventListener("click", removeElement);

    document.querySelector("div #items").appendChild(newItemElm);
    rescanCurrencyInputs();
}