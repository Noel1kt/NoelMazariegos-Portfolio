const form = document.querySelector('[data-contact]')
console.log(form)


form.addEventListener('submit',handleSubmit )

function handleSubmit(event) {
    event.preventDefault()
    const formCont = new FormData(this)
    console.log(formCont.get('name'))
}