//  set your counter to 1

function dotschange(i) {
    const dots = document.querySelectorAll(".dot");
    //  create a loop function
    logo.classList.add("shake");
    setTimeout(function () {
        //  call a 3s setTimeout when the loop is called
        //  your code here
        //  increment the counter
        if (i < 7) {
            if (i === 0) {
                dots[i].classList.add("black");
                i++;
                dotschange(i);
            } else if (i !== 6) {
                dots[i].classList.add("black");
                let prev = i - 1;
                dots[prev].classList.remove("black");
                i++;            //  if the counter < 10, call the loop function
                dotschange(i);
            } else {
                dots[5].classList.remove("black");
                i++;
                logo.classList.remove("shake");
                //  if the counter < 10, call the loop function
            }
            //  ..  again which will trigger another 
        }

        //  ..  setTimeout()
    }, 400)
}

//  start the loop
/*
function dotschange() {
    
    for (let i = 0; i < dots.length; i++) {


        setTimeout(function () {
            
            alert("test");
        }, i * 1000);

        dices[i].classList.remove("black");

    }
} */
const button = document.querySelectorAll('.button');
const logo = document.querySelector(".logo");
button.forEach((element) => {
    element.addEventListener("click", () => {
        dotschange(0);
    })
});