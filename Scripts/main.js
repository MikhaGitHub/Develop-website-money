const Hamburger = document.querySelector('.hamburger');       
const Directories = document.querySelector('.directories-menu');
const header = document.querySelector('header');
const nav = document.querySelector('nav')
const main = document.querySelector('#main-content')
const footer = document.querySelector('#content-footer')

Hamburger.addEventListener('click', () =>{
    Directories.classList.toggle('active');
    header.style.display = Directories.classList.contains('active') ? 'block' : 'block';
    nav.style.display = Directories.classList.contains('active') ? 'block' : 'none';
    main.style.display = Directories.classList.contains('active') ? 'none' : 'block';
    footer.style.display = Directories.classList.contains('active') ? 'none' : 'block';
});