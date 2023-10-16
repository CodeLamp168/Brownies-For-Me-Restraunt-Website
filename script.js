const mainNavBtn = document.getElementById('nav-btn')
const mainNavDisplay = document.getElementById('nav-display')


mainNavDisplay.style.transform = 'translateX(500px)'

mainNavBtn.addEventListener('click', (e) => {
    mainNavDisplay.style.transform = 'translateX(0px)';
})