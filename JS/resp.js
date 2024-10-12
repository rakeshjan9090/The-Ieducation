burger = Document.queryselector('.burger')
navbar = Document.queryselector('.navbar')
navList = Document.queryselector('.nav-list')
rightNav = Document.queryselector('.rightNav')


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-nav-resp');
})