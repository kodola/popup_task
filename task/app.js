/*
window.onload = function(){
    setTimeout(function(){
        alert("Hello");
        console.log('wyswietlono!');
    }, 3000);
    setTimeout(function (){
        alert.style.display = "none";
    }, 10000)
};
*/
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout( () => {
        document.getElementsByClassName('modal_container')[0].classList.add('show');


    const modals = document.querySelectorAll('.front');
    for (let i = 0; i < modals.length; i++) {
        modals[i].addEventListener("mouseover", function (event) {
            this.classList.add('index');
        });
        modals[i].addEventListener("mouseleave", function (event) {
            this.classList.remove('index');
        });
    }

    const timeout = setTimeout(() => {
        document.getElementsByClassName('modal_container')[0].classList.remove('show');
    }, 10000);

    document.querySelector('p.counter').innerText = `I will disappear after 10 seconds`;
    const counter = (n) => {
        let i = 10;
        if (timeout && i >= n) {
            const counting = setInterval(() => {
                document.querySelector('p.counter').innerText = `I will disappear after ${--i} seconds`;
                console.log(i);
                if (i === n) {
                clearInterval(counting);
                }
                if (!document.querySelectorAll('.modal_container')[0].className.match('show')) {
                    clearInterval(counting);
                }
            }, 1000);
        }
    };
    counter(0);

    const button = document.querySelector('.btn');
    button.addEventListener("click", function (event) {
        document.getElementsByClassName('modal_container')[0].classList.remove('show');
        clearTimeout(timeout);
    })
    }, 4000);
});