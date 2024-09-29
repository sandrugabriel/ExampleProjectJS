let btnHide = document.querySelector("#toggleList");
let list = document.querySelector(".list");
let btnChange = document.querySelector(".description-btn");
let txtDescription = document.querySelector(".description-inpt");
let titleDescription = document.querySelector(".description-p");
let  ul= document.querySelector("ul");
let txtAddInput = document.querySelector(".addItemInput");
let btnAdd = document.querySelector(".addItemButton");



btnHide.addEventListener("click", (e) => {
    list.classList.toggle("hide-container");

    //conditia if (... ? ... : ....)
    list.classList.contains("hide-container") ?
        btnHide.textContent = "Show list" :
        btnHide.textContent = "Hide list";
});

btnChange.addEventListener("click", (e) => {

    if (txtDescription.value.length > 0) {
        titleDescription.textContent = txtDescription.value + ":";
        txtDescription.value = "";
        removeError();
    } else {
        errorDescription();
    }
});

btnAdd.addEventListener("click", (e) => {

    if (txtAddInput.value.length > 0) {
        let item = createItem(txtAddInput.value);
        ul.append(item);
        txtAddInput.value = "";
        removeErrorAdd();
    }else{
        errorAdd();
    }

});

ul.addEventListener("click",(e)=>{


    let elem=e.target;


    if(elem.classList.contains("up")){

        // console.log(elem.parentNode);

        let select = elem.parentElement;
        let n1 = select.previousElementSibling;
        
        if(n1!=null)
        select.parentElement.insertBefore(select,n1);
    }
    else if(elem.classList.contains("down")){

        let select = elem.parentElement;
        let n1 = select.nextElementSibling;

        if(n1!=null)
        select.parentElement.insertBefore(n1,select);
    }else if(elem.classList.contains("remove")){
        let select = elem.parentElement;
        select.style.display = "none";
    }


})






const createItem = (text) => {

    let item = document.createElement("li");

    item.innerHTML = `
    
    
   ${text}<button class="up">Up</button><button class="down">Down</button><button class="remove">Remove</button>
    
    

    `

    return item;
}

const errorDescription = () => {
    // console.log(btnChange.nextElementSibling.tagName);
    if (btnChange.nextElementSibling.tagName != "P") {
        let errorText = document.createElement("p");
        errorText.textContent = "Enter the description!";
        errorText.style.color = "Red";

        list.insertBefore(errorText, ul);
    }
}

const removeError = () => {
    if (btnChange.nextElementSibling.tagName == "P") {
        let errorText = btnChange.nextElementSibling;
        errorText.className = "hide-container";
    }
}

const errorAdd = () => {
    if ( btnAdd.nextElementSibling==null) {
        let errorText = document.createElement("p");
        errorText.textContent = "Enter the name!";
        errorText.style.color = "Red";

        list.append(errorText);
    }
}

const removeErrorAdd = () => {
    if (btnAdd.nextElementSibling!=null && btnAdd.nextElementSibling.tagName == "P") {
        let errorText = btnAdd.nextElementSibling;
        errorText.className = "hide-container";
    }
}
