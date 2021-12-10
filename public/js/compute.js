const totalBox = document.querySelector('#total');


function addPerson(person,amount)
{
    console.log("Adding person: "+person);
    // Make new person item
    let newPerson = document.createElement("div");
    newPerson.className = "complete-item";
    newPerson.idName = person;
    newPerson.innerHTML = `
    <a class="name">Example name</a>
    <a class="money">£0</a>
    `;
    newPerson.querySelector(".name").innerHTML = person;
    newPerson.querySelector(".money").innerHTML = amount;
    totalBox.appendChild(newPerson);
}

function processItems()
{
    console.log("Starting processing");
    const itemContainer = document.querySelector("#items");
    const items = itemContainer.children;
    var people = {};
    
    for (let item of items)
    {
        const price = item.querySelector("#price");
        console.log("Next item of value £"+price.value);
        const peopleContainer = item.querySelector("#persons").parentElement;
        var relPeople = [];
        for (let person of peopleContainer.children)
        {
            if (person.nodeName != "INPUT")
            {
                relPeople.push(person.querySelector("a").textContent);
            }
        }
        console.log("People for the item: "+relPeople);
        for (let person of relPeople)
        {
            if (!(person in people))
            {
                people[person] = 0; // Makes new person with £0
            }
            people[person] = people[person] + parseFloat(price.value)/relPeople.length;
        }
    }
    for (let [person,amount] of Object.entries(people))
    {
        console.log(person + " added with £" + amount);
        addPerson(person,amount);
    }

}