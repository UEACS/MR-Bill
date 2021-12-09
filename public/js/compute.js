const totalBox = document.querySelector('#total');


function addPerson(person,amount)
{
    // Make new person item
    let newPerson = document.createElement("div");
    newPerson.className = "complete-item";
    newPerson.idName = person;
    newPerson.innerHTML = `
    <a class="name">Example name</a>
    <a class="money">£0</a>
    `;
    totalBox.querySelector(".name").innerHTML = person;
    totalBox.querySelector(".money").innerHTML = amount;


}

function processItems()
{
    
    for (let person of people)
    {
        addPerson(person);
    }
}