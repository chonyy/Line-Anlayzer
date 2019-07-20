const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => { //Toggle
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => { //Each Animation
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.75s ease forwards ${index / 3 + 0.3}s` ;
            }
        });

        burger.classList.toggle('toggle'); //Burger Animation
    });
}

navSlide();