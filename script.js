const mobileNavBox = document.querySelector('.mobile-nav-box')

const mobileActiveBtn = document.getElementById('mobile-toggle')
const mobileExitBtn = document.getElementById('mobile-exit-btn')

mobileActiveBtn.addEventListener('click', (e) => {
mobileNavBox.classList.add('mobile-active')
})

mobileExitBtn.addEventListener('click', (e) => {
   mobileNavBox.classList.remove('mobile-active')
})