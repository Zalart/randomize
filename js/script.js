/*function dotschange(i) {
    const dots = document.querySelectorAll(".dot");
    logo.classList.add("shake");
    setTimeout(function () {
        if (i < 7) {
            if (i === 0) {
                dots[i].classList.add("white");
                i++;
                dotschange(i);
            } else if (i !== 6) {
                dots[i].classList.add("white");
                dots[i - 1].classList.remove("white");
                i++;
                dotschange(i);
            } else {
                dots[5].classList.remove("white");
                i++;
                logo.classList.remove("shake");
            }
        }
    }, 400)
}*/

function randotschange(n) {
    const dots = document.querySelectorAll(".dot");
    logo.classList.add("shake");
    dots.forEach(element => {
        element.classList.remove("white");
    });
    setTimeout(function () {
        switch (n) {
            case 2:
                for (let i = 1; i < (n + 1); i++) {
                    dots[i].classList.add("white");
                }
                break;
            case 4:
                for (let i = 1; i < (n + 1); i++) {
                    dots[i].classList.add("white");
                }
                break;
            default:
                for (let i = 0; i < n; i++) {
                    dots[i].classList.add("white");
                }
                break;
        }
        logo.classList.remove("shake");
    }, 1000)
}

const button = document.querySelectorAll('.button');
const logo = document.querySelector(".logo");
button.forEach((element) => {
    element.addEventListener("click", () => {
        const n = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        randotschange(n);
    })
});