let sections = document.querySelectorAll("section")
let navlink = document.querySelectorAll(".menu ul li a")
let navlinkOne = document.querySelectorAll(".menuOne ul li a")
let navbar = document.getElementById("navbar")
let gitOne = document.getElementById("gitOne")
let gitTwo = document.getElementById("gitTwo")
let gitThree = document.getElementById("gitThree")
let gitFour = document.getElementById("gitFour")
let gitFive = document.getElementById("gitFive")
let gitSix = document.getElementById("gitSix")
let netlifyOne = document.getElementById("netlifyOne")
let netlifyTwo = document.getElementById("netlifyTwo")
let netlifyThree = document.getElementById("netlifyThree")
let netlifyFour = document.getElementById("netlifyFour")
let netlifyFive = document.getElementById("netlifyFive")
let netlifySix = document.getElementById("netlifySix")
let titleOne = document.getElementById("titleOne")
let titleTwo = document.getElementById("titleTwo")
let titleThree = document.getElementById("titleThree")
let titleFour = document.getElementById("titleFour")
let titleFive = document.getElementById("titleFive")
let titleSix = document.getElementById("titleSix")
let downloadResume = document.getElementById("downloadResume")
let sub = document.getElementById("sub")
let spinnersec = document.getElementById("spinnersec")
let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let usermsg = document.getElementById("usermsg")
let msgtitle = document.getElementById("msgtitle")


let title = [titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix]
let git = [gitOne, gitTwo, gitThree, gitFour, gitFive, gitSix]
let netlify = [netlifyOne, netlifyTwo, netlifyThree, netlifyFour, netlifyFive, netlifySix]





// Type
let type = new Typed('#change-txt', {
    strings: ['Web Developer', 'Mobile App Developer', 'Flutter Developer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
})

// Onscroll
scrollFunction = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let offsetOne = sec.offsetTop - 350;
        let heightOne = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active')

            })
        }
        if (top >= offsetOne && top < offsetOne + heightOne) {
            navlinkOne.forEach((links) => {
                links.classList.remove('active');
                document.querySelector(`.menuOne ul li a[href="#${id}"]`).classList.add('active');
            });
        }
    })


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.padding = "30px 10px";
    } else {
        navbar.style.padding = "60px 10px";
    }
}

window.onscroll = () => { scrollFunction() }


// Swiper
var swiper = new Swiper(".mySwiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },


});

// Project
async function project() {
    let response = await fetch("script.json")
    let result = await response.json()

    for (let i = 0; i < 6; i++) {
        let a = document.createElement("a")
        let a1 = document.createElement("a")
        let j = document.createElement("i")
        let j1 = document.createElement("i")
        title[i].innerHTML = result.Project_Data[i].Project_Name
        j.classList.add("fa-brands", "fa-github")
        j1.classList.add("fa-solid", "fa-globe")
        a.href = result.Project_Data[i].Git_link
        a.target = "_blank"
        a1.href = result.Project_Data[i].Netlify_link
        a1.target = "_blank"
        a.appendChild(j)
        a1.appendChild(j1)
        git[i].appendChild(a)
        netlify[i].appendChild(a1)
    }
}
project()

// Spinner
sub.addEventListener("click", () => {
    spinnersec.style.display = "block";

    setTimeout(function () {
        spinnersec.style.display = "none";
    }, 3000)
})

// Form Submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbzS_4vwBCPe8sG-NDsp3KyBS89z5iBCSb5evYQFpioUvtH0Q8uRBjCwpejFJwUIr9YTLQ/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById("msgbox")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (username.value == "" || useremail.value == "" || usermsg.value == "") {
                msg.style.display = "block";
                msgtitle.innerHTML = "Please fill the required detail!"
                setTimeout(function () {
                    msg.style.display = "none";
                }, 5000)
            }
            else {
                msg.style.display = "block";
                msgtitle.innerHTML = "Your Message has been sent successfully!"
                setTimeout(function () {
                    msg.style.display = "none";
                }, 5000)
                form.reset();
            }
        })
        .catch(error => console.error('Error!', error.message))
})

downloadResume.addEventListener("click", () => {
    window.open("images/bgset.png")
})
