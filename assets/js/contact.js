const form = document.querySelector('[data-contact]')
const func = document.querySelector('#funcYt')


form.addEventListener('submit',handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const formCont = new FormData(this)
    console.log(formCont.get('name'))
    func.setAttribute('href', `mailto:noelmazariegospc.com?subjet=nombre ${formCont.get('name')} correo ${formCont.get('email')}&body=${formCont.get('message')}`)
    func.click()
}