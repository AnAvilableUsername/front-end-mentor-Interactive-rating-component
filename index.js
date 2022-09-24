const submit = document.querySelector(".container1__submit")
const container = document.querySelector(".container1")
const containerTwo = document.querySelector(".container2")

submit.disabled = true

submit.onclick = () => {
    container.style.display = "none"
    containerTwo.style.display = "flex"
}



const selectedBtn = document.querySelectorAll(".container1__rating--btn")
const userRating = document.querySelector(".container2__userrate")



selectedBtn.forEach(i => {
    i.onclick = () => {
        userRating.innerHTML = `You selected ${i.value} out of 5`
        submit.disabled = false
    }
})






