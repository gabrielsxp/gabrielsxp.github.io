const navbar = document.querySelector('.navbar');
const navOptionOne = document.querySelector('.nav-opt-one');
const navOptionTwo = document.querySelector('.nav-opt-two');
const navOptionThree = document.querySelector('.nav-opt-three');
const howAmI = document.querySelector("#quem-sou-eu");
const projects = document.querySelector("#projetos");
const codepen = document.querySelector("#codepen");
const up = document.querySelector(".upButton");

function animateNavbar() {
    const windowTop = window.pageYOffset;
    const navOptionOneOffset = windowTop + howAmI.getBoundingClientRect().top;
    const navOptionTwoOffset = windowTop + projects.getBoundingClientRect().top;
    const navOptionThreeOffset = windowTop + codepen.getBoundingClientRect().top;
    const clientSize = window.innerHeight;

    console.log(up.classList);
    if (windowTop >= (clientSize + 100)) {
        up.classList.remove('fadeDown');
        if (navbar.classList.contains('static')) {
            navbar.classList.replace('static', 'fixed');
        } else {
            navbar.classList.add('fixed');
        }

        if ((windowTop >= navOptionOneOffset) && (windowTop < navOptionTwoOffset)) {
            navOptionTwo.classList.remove('selected');
            navOptionThree.classList.remove('selected');
            navOptionOne.classList.add('selected');
        } else if ((windowTop >= navOptionTwoOffset) && (windowTop < navOptionThreeOffset)) {
            navOptionOne.classList.remove('selected');
            navOptionThree.classList.remove('selected');
            navOptionTwo.classList.add('selected');
        } else if (windowTop >= navOptionThreeOffset) {
            navOptionOne.classList.remove('selected');
            navOptionTwo.classList.remove('selected');
            navOptionThree.classList.add('selected');
        }
    } else {
        up.classList.add('fadeDown');
        navbar.classList.replace('fixed', 'static')
    }
}

window.addEventListener("scroll", () => {
    animateNavbar();
});