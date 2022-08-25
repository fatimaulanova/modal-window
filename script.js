const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up")
const popup = document.getElementById("popup")
const logIn = document.getElementById("btn_log")
const btnOk = document.getElementById("btn_ok")

openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
})

closePopUp.addEventListener("click", () =>{
    popUp.classList.remove("active");
})

logIn.addEventListener("click", ()=>{
 popUp.remove()
    popup.style.display= "block"
    openPopUp.style.display = "none"
})

btnOk.addEventListener("click", () =>{
    popup.style.display = "none"
    openPopUp.style.display = "block"
})