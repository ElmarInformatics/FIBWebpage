document.querySelector('.burger').addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

alert("Willkommen auf der FIB Website")