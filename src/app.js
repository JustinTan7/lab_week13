const divButton = document.querySelectorAll(".original-container div")
const copyContainer = document.querySelector('.copy-container')
divButton.forEach(element => element.addEventListener('click', (evt) => {
    const one = evt.target.parentElement.outerHTML
    copyContainer.insertAdjacentHTML('beforeend', one)
}))
