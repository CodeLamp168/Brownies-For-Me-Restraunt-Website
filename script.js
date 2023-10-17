const mainNavBtn = document.getElementById('nav-btn')
const mainNavExitBtn = document.getElementById('exit-nav-btn')
const mainNavDisplay = document.getElementById('nav-display')


mainNavDisplay.style.transform = 'translateX(500px)'
mainNavBtn.addEventListener('click', (e) => {
    mainNavDisplay.style.transform = 'translateX(0px)';
})

mainNavExitBtn.addEventListener('click', (e) => {
    mainNavDisplay.style.transform = 'translateX(500px)';
})