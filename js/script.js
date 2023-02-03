const buttonElem = document.querySelector(".prise__title");
const inputFilterElem = document.querySelector(".prise__input")
const checkMarkElem = document.querySelector(".svg__actived")

function buttonFun ()   {
    inputFilterElem.classList.toggle('active')
    checkMarkElem.classList.toggle("active")
}


buttonElem.addEventListener("click", buttonFun )
