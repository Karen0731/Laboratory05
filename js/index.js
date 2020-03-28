function addItem()
{
    let addButton = document.querySelector("button");
    let itemName = document.querySelector(".itemName");

    addButton.addEventListener( 'click', (event) =>
    {
        event.preventDefault();
        if(itemName.value=="")
        {
            alert("Need some item");
        }
        else
        {
            let container = document.querySelector(".itemContainer");
            container.innerHTML +=
                `
            <li class="item">
                <div class="text">
                    ${itemName.value}
                </div>
                <div class="bDirection">
                    <button class="check">
                        Check
                    </button>
                    <button class="delete">
                        Delete
                    </button>
                </div>
            </li>
            `;
        }
    });
}

function checkItem()
{

    let container = document.querySelector(".itemContainer");
    container.addEventListener( 'click', (event) =>
    {
        if( event.target.matches( '.check' ) )
        {
            let text = event.target.parentNode.parentNode.firstElementChild;
            if(text.classList.contains("checked"))
            {
                text.classList.remove("checked");
            }
            else
            {
                text.classList.add("checked");
            }
            console.log(event.target.parentNode.parentNode.firstElementChild);
        }
    });
}

function deleteItem()
{
    let container = document.querySelector(".itemContainer");
    container.addEventListener('click',(event)=>
    {
        if( event.target.matches( '.delete' ) )
        {
            console.log(event.target.parentNode.parentNode);
            event.target.parentNode.parentNode.remove();
        }
    });
}

function init()
{
    addItem();
    checkItem();
    deleteItem();
}

init();