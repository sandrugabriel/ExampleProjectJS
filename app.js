
var btnHide = document.querySelector("#toggleList");
console.log(btnHide.textContent);
btnHide.addEventListener("click", (e) => {

    let lista = document.querySelector(".list");

    if(btnHide.textContent == "Show list"){
        lista.style.display = "";
        btnHide.textContent = "Hide list";
    }else{
         lista.style.display = "none";
        btnHide.textContent = "Show list";
    }
});

var btnRemove = document.querySelectorAll(".remove");
btnRemove.forEach(button=>{
    button.addEventListener("click", (e) => {

    let select = e.target.parentElement;
        select.style.display = "none";
    
})});

var btnsDown = document.querySelectorAll(".down");
btnsDown.forEach(button=>{
    button.addEventListener("click", (e) => {

    let select = e.target.parentElement;
    let n1 = select.nextElementSibling;
    // console.log(select.textContent+" "+n1.textContent+ " "+n2.textContent);

    select.parentElement.insertBefore(n1,select);

})});

var btnsUp = document.querySelectorAll(".up");
btnsUp.forEach(button=>{
    button.addEventListener("click", (e) => {

    let select = e.target.parentElement;
    let n1 = select.previousElementSibling;
    console.log(select.textContent+" "+n1.textContent);

    select.parentElement.insertBefore(select,n1);

})});


var btnAdd = document.querySelector(".addItemButton");
btnAdd.addEventListener("click", (e) => {

    let select = e.target.parentElement;
    let n1 = select.previousElementSibling;

const element = document.createElement("li");

    let ul = document.querySelector("ul");
    const txt = document.querySelector(".addItemInput");
    // console.log(txt);
   
    if (txt.value.length >= 1) {
        const li = document.createElement("li");
        li.textContent = txt.value;

        const upBtn = document.createElement('button');
        upBtn.textContent = 'Up';
        upBtn.classList.add('up');

        const downBtn = document.createElement('button');
        downBtn.textContent = 'Down';
        downBtn.classList.add('down');

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');

        li.appendChild(upBtn);
        li.appendChild(downBtn);
        li.appendChild(removeBtn);

        ul.appendChild(li);

        txt.value = "";
        btnRemove = document.querySelectorAll(".remove");
        btnsUp = document.querySelectorAll(".up");
        
    }
   


});