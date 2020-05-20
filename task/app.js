document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout( () => {

        const popups = document.querySelectorAll('.modal_container, .front');
        for (let i = 0; i < popups.length; i++) {
            popups[i].classList.add('show');
        }

    document.querySelector('p.counter').innerText = `I will disappear after 10 seconds`;
    const counter = (n) => {
        let i = 10;
        if (i >= n) {
            const counting = setInterval(() => {
                document.querySelector('p.counter').innerText = `I will disappear after ${--i} seconds`;
                console.log(i);
                if (i === n) {
                clearInterval(counting);
                    document.getElementsByClassName('modal')[0].classList.remove('show');
                    if (!document.querySelector('.modal_click').className.match('show')) {
                        document.querySelector('.modal_container').classList.remove('show');
                    }
                }
            }, 1000);
        }
    };
    counter(0);

    const button = document.querySelector('.btn');
    button.addEventListener("click", function (event) {
        document.getElementsByClassName('modal_click')[0].classList.remove('show');
        if (!document.querySelector('.modal').className.match('show')) {
            document.querySelector('.modal_container').classList.remove('show');
        }
    });

        const modals = document.querySelectorAll('.front');
        for (let i = 0; i < modals.length; i++) {
            modals[i].addEventListener("mouseover", function (event) {
                this.classList.add('index');
            });
            modals[i].addEventListener("mouseleave", function (event) {
                this.classList.remove('index');
            });
        }

    }, 4000);
});