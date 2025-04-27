const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu =document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
}) 