function getAllPresidents() {
    let result = [];
    let presidentsRaws = document.querySelectorAll('.wikitable tbody tr');
    presidentsRaws.forEach(element => {
        // if (element.querySelectorAll('td') !== undefined)
        let presidentsTds = element.querySelectorAll('th ~ td');
        //alert(presidentsTd[1].innerHTML);
        if (presidentsTds.length > 2) {
            let presidency = "";
            let presidentPhoto = "";
            let presidentName = "";
            for (let i = 0; i < 3; i++) {
                if (i === 0) {
                    let presidencyData = presidentsTds[i].querySelectorAll('span');
                    // if (presidencyData === null) continue;

                    presidencyData.forEach(element => {
                        presidency === "" ? presidency = element.innerText + ' - ' : presidency += element.innerText;

                    });
                    //  result.push({ 'presidency': presidency });
                } else if (i === 1) {

                    //   if (presidentsTds[i].querySelector('img').src === null) continue;
                    presidentPhoto = presidentsTds[i].querySelector('img').src;
                    //  alert(presidentPhoto);
                    // result.push({ 'photo': presidentPhoto });
                } else if (i === 2) {
                    presidentName = presidentsTds[i].querySelector('a').innerHTML;
                    //  if (presidentName === null) continue;

                }

            }
            // In case we need an array of objects 
            result.push({ 'presidency': presidency, 'photo': presidentPhoto, 'name': presidentName });
        }
    });
    return result;
}
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
        document.querySelector("h2").innerHTML = `Math.random() result is: ${n}`;
        logo.classList.remove("shake");
    }, 1000)
}
const presidents = document.querySelector(".presidents");
const dices = document.querySelector(".dices");
const button = document.querySelectorAll('.button');
const logo = document.querySelector(".logo");
button[0].addEventListener("click", () => {
    presidents.classList.add("toggle");
    dices.classList.remove("toggle");
    const n = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    randotschange(n);
});
button[1].addEventListener("click", () => {


    presidents.classList.remove("toggle");
    dices.classList.add("toggle");

});