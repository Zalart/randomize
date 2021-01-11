const presidentsData = [
    {
        "presidency": "April 30, 1789 - March 4, 1797",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/160px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
        "name": "George Washington"
    },
    {
        "presidency": "March 4, 1797 - March 4, 1801",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg/160px-John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg",
        "name": "John Adams"
    },
    {
        "presidency": "March 4, 1801 - March 4, 1809",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg/160px-Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg",
        "name": "Thomas Jefferson"
    },
    {
        "presidency": "March 4, 1809 - March 4, 1817",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/160px-James_Madison.jpg",
        "name": "James Madison"
    },
    {
        "presidency": "March 4, 1817 - March 4, 1825",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/160px-James_Monroe_White_House_portrait_1819.jpg",
        "name": "James Monroe"
    },
    {
        "presidency": "March 4, 1825 - March 4, 1829",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/JQA_Photo.tif/lossy-page1-160px-JQA_Photo.tif.jpg",
        "name": "John Quincy Adams"
    },
    {
        "presidency": "March 4, 1829 - March 4, 1837",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Andrew_jackson_head.jpg/165px-Andrew_jackson_head.jpg",
        "name": "Andrew Jackson"
    },
    {
        "presidency": "March 4, 1837 - March 4, 1841",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Martin_Van_Buren_edit.jpg/160px-Martin_Van_Buren_edit.jpg",
        "name": "Martin Van Buren"
    },
    {
        "presidency": "March 4, 1841 - April 4, 1841",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/William_Henry_Harrison_daguerreotype_edit.jpg/160px-William_Henry_Harrison_daguerreotype_edit.jpg",
        "name": "William Henry Harrison"
    },
    {
        "presidency": "April 4, 1841[i]\n–\nMarch 4, 1845 - March 4, 1845",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/John_Tyler%2C_Jr.jpg/160px-John_Tyler%2C_Jr.jpg",
        "name": "John Tyler"
    },
    {
        "presidency": "March 4, 1845 - March 4, 1849",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JKP.jpg/160px-JKP.jpg",
        "name": "James K. Polk"
    },
    {
        "presidency": "March 4, 1849 - July 9, 1850",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zachary_Taylor_restored_and_cropped.jpg/160px-Zachary_Taylor_restored_and_cropped.jpg",
        "name": "Zachary Taylor"
    },
    {
        "presidency": "July 9, 1850 - March 4, 1853",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Millard_Fillmore_by_Brady_Studio_1855-65-crop.jpg/160px-Millard_Fillmore_by_Brady_Studio_1855-65-crop.jpg",
        "name": "Millard Fillmore"
    },
    {
        "presidency": "March 4, 1853 - March 4, 1857",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop_%28cropped%29.jpg/160px-Mathew_Brady_-_Franklin_Pierce_-_alternate_crop_%28cropped%29.jpg",
        "name": "Franklin Pierce"
    },
    {
        "presidency": "March 4, 1857 - March 4, 1861",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/James_Buchanan.jpg/160px-James_Buchanan.jpg",
        "name": "James Buchanan"
    },
    {
        "presidency": "March 4, 1861 - April 15, 1865",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/160px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
        "name": "Abraham Lincoln"
    },
    {
        "presidency": "April 15, 1865 - March 4, 1869",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg/160px-Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg",
        "name": "Andrew Johnson"
    },
    {
        "presidency": "March 4, 1869 - March 4, 1877",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ulysses_S_Grant_by_Brady_c1870-restored.jpg/160px-Ulysses_S_Grant_by_Brady_c1870-restored.jpg",
        "name": "Ulysses S. Grant"
    },
    {
        "presidency": "March 4, 1877 - March 4, 1881",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg/160px-President_Rutherford_Hayes_1870_-_1880_Restored.jpg",
        "name": "Rutherford B. Hayes"
    },
    {
        "presidency": "March 4, 1881 - September 19, 1881",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg/160px-James_Abram_Garfield%2C_photo_portrait_seated.jpg",
        "name": "James A. Garfield"
    },
    {
        "presidency": "September 19, 1881 - March 4, 1885",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chester_Alan_Arthur.jpg/160px-Chester_Alan_Arthur.jpg",
        "name": "Chester A. Arthur"
    },
    {
        "presidency": "March 4, 1885 - March 4, 1889",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/160px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg",
        "name": "Grover Cleveland"
    },
    {
        "presidency": "March 4, 1889 - March 4, 1893",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg/160px-Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg",
        "name": "Benjamin Harrison"
    },
    {
        "presidency": "March 4, 1893 - March 4, 1897",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/160px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg",
        "name": "Grover Cleveland"
    },
    {
        "presidency": "March 4, 1897 - September 14, 1901",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mckinley.jpg/160px-Mckinley.jpg",
        "name": "William McKinley"
    },
    {
        "presidency": "September 14, 1901 - March 4, 1909",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/160px-President_Roosevelt_-_Pach_Bros.jpg",
        "name": "Theodore Roosevelt"
    },
    {
        "presidency": "March 4, 1909 - March 4, 1913",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/William_Howard_Taft%2C_head-and-shoulders_portrait%2C_facing_front.jpg/160px-William_Howard_Taft%2C_head-and-shoulders_portrait%2C_facing_front.jpg",
        "name": "William Howard Taft"
    },
    {
        "presidency": "March 4, 1913 - March 4, 1921",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Woodrow_Wilson-H%26E.jpg/160px-Woodrow_Wilson-H%26E.jpg",
        "name": "Woodrow Wilson"
    },
    {
        "presidency": "March 4, 1921 - August 2, 1923",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg/160px-Warren_G_Harding-Harris_%26_Ewing.jpg",
        "name": "Warren G. Harding"
    },
    {
        "presidency": "August 2, 1923 - March 4, 1929",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg/160px-Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg",
        "name": "Calvin Coolidge"
    },
    {
        "presidency": "March 4, 1929 - March 4, 1933",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/President_Hoover_portrait.jpg/165px-President_Hoover_portrait.jpg",
        "name": "Herbert Hoover"
    },
    {
        "presidency": "March 4, 1933 - April 12, 1945",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/FDR_in_1933_%281%29.jpg/160px-FDR_in_1933_%281%29.jpg",
        "name": "Franklin D. Roosevelt"
    },
    {
        "presidency": "April 12, 1945 - January 20, 1953",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TRUMAN_58-766-06_CROPPED.jpg/160px-TRUMAN_58-766-06_CROPPED.jpg",
        "name": "Harry S. Truman"
    },
    {
        "presidency": "January 20, 1953 - January 20, 1961",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg/160px-Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg",
        "name": "Dwight D. Eisenhower"
    },
    {
        "presidency": "January 20, 1961 - November 22, 1963",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/160px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
        "name": "John F. Kennedy"
    },
    {
        "presidency": "November 22, 1963 - January 20, 1969",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/37_Lyndon_Johnson_3x4.jpg/160px-37_Lyndon_Johnson_3x4.jpg",
        "name": "Lyndon B. Johnson"
    },
    {
        "presidency": "January 20, 1969 - August 9, 1974",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg/160px-Richard_Nixon_presidential_portrait_%281%29.jpg",
        "name": "Richard Nixon"
    },
    {
        "presidency": "August 9, 1974 - January 20, 1977",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gerald_Ford_presidential_portrait.jpg/160px-Gerald_Ford_presidential_portrait.jpg",
        "name": "Gerald Ford"
    },
    {
        "presidency": "January 20, 1977 - January 20, 1981",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/JimmyCarterPortrait2.jpg/160px-JimmyCarterPortrait2.jpg",
        "name": "Jimmy Carter"
    },
    {
        "presidency": "January 20, 1981 - January 20, 1989",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/165px-Official_Portrait_of_President_Reagan_1981.jpg",
        "name": "Ronald Reagan"
    },
    {
        "presidency": "January 20, 1989 - January 20, 1993",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/George_H._W._Bush_presidential_portrait_%28cropped%29.jpg/160px-George_H._W._Bush_presidential_portrait_%28cropped%29.jpg",
        "name": "George H. W. Bush"
    },
    {
        "presidency": "January 20, 1993 - January 20, 2001",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/160px-Bill_Clinton.jpg",
        "name": "Bill Clinton"
    },
    {
        "presidency": "January 20, 2001 - January 20, 2009",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/160px-George-W-Bush.jpeg",
        "name": "George W. Bush"
    },
    {
        "presidency": "January 20, 2009 - January 20, 2017",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/160px-Official_portrait_of_Barack_Obama.jpg",
        "name": "Barack Obama"
    },
    {
        "presidency": "January 20, 2017 - January 20, 2021",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Donald_Trump_official_portrait_%28cropped_2%29.jpg/160px-Donald_Trump_official_portrait_%28cropped_2%29.jpg",
        "name": "Donald Trump"
    },
    {
        "presidency": "January 20, 2021 - ...",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Joe_Biden_official_portrait_2013_cropped_%28cropped%29.jpg/160px-Joe_Biden_official_portrait_2013_cropped_%28cropped%29.jpg",
        "name": "Joe Biden"
    }
];
const doList = ['fighting', 'having a beer', 'enjoing the sunset', 'rock-n-rolling', 'breaking bad', 'voting for themselves', 'playng dices', 'incredible', 'playing golf'];
const presidentsContainer = document.querySelector(".presidents");
const dices = document.querySelector(".dices");
const button = document.querySelectorAll('.button');
const logo = document.querySelector(".logo");
const textLine = document.querySelector(".phrase")

function randomNum(max) {
    const number = Math.floor(Math.random() * max);
    return number;
}

function showPresidents(times) {
    const container = document.querySelector(".presidents");
    const subcontainer = document.querySelector(".presidents div");
    let presidentsNames;
    let previous;
    if (subcontainer !== null) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    for (let i = 0; i < times; i++) {
        const president = randomNum(presidentsData.length);
        if (previous == president) {
            //alert("we have a repeat");
            times++;
            continue;
        }
        previous = president;
        const photo = document.createElement('div');
        const photoSrc = presidentsData[president].photo;
        photo.classList.add(`presidentPhoto`);
        photo.style.backgroundImage = `url('${photoSrc}')`;
        let name = presidentsData[president].name;
        container.appendChild(photo);
        i === 0 ? presidentsNames = name + " and " : presidentsNames += name;
    }
    textLine.innerHTML = `${presidentsNames} are ${doList[randomNum(doList.length)]}.`;
}

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
        textLine.innerHTML = `Answer to the Ultimate Question of Life, the Universe, and Everything is ${n}`;
        logo.classList.remove("shake");
    }, 1000)
}
button[0].addEventListener("click", () => {
    dices.style.display = "flex";
    presidentsContainer.style.display = "none";
    const n = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    textLine.innerHTML = '&nbsp;';
    randotschange(n);
});
button[1].addEventListener("click", () => {
    presidentsContainer.style.display = "flex";
    dices.style.display = "none";
    showPresidents(2);
});

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
