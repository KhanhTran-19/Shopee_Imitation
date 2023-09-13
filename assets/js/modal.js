const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal')
const modalBody = $('.modal__body')
const signIn = $('.header__navbar-signin')
const signUp = $('.header__navbar-signup')
const signInForm = $('.signin-form')
const signUpForm = $('.signup-form')
const closeBtns = $$('.auth-form__controls-back')

signIn.onclick = function(){
    modal.classList.add('open')
    modalBody.classList.add('signin--active')
}

signUp.onclick = function(){
    modal.classList.add('open')
    modalBody.classList.add('signup--active')
}

function closeForm() {
    modal.classList.remove('open')
    modalBody.classList.remove('signup--active')
    modalBody.classList.remove('signin--active')
}

modalBody.addEventListener('click', function(event){
    event.stopPropagation()
})

modal.addEventListener('click', closeForm)
for(const closeBtn of closeBtns){
    closeBtn.addEventListener('click', closeForm)
}