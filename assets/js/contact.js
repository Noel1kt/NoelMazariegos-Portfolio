const form = document.querySelector('[data-contact]')
const func = document.querySelector('#funcYt')


form.addEventListener('submit',handleSubmit )

function handleSubmit(event) {
    event.preventDefault()
    const formCont = new FormData(this)
    console.log(formCont.get('name'))
    const content = func.setAttribute('href', `mailto:noelmazariegos.com?subjet=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    console.log(content)
}