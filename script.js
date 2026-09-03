/* =========================================
   MATRIX BACKGROUND
========================================= */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

let width;
let height;
let columns;
let drops;

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "{}[]<>/\\#$%&*アイウエオカキクケコ";


function resizeCanvas() {

    width = canvas.width = window.innerWidth;

    height = canvas.height = window.innerHeight;

    columns = Math.floor(width / 18);

    drops = new Array(columns).fill(1);

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


function drawMatrix() {

    ctx.fillStyle =
        "rgba(2,6,5,0.075)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    ctx.font =
        "14px JetBrains Mono, monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const char =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        if (Math.random() > .95) {

            ctx.fillStyle =
                "#d8ffe5";

        } else {

            ctx.fillStyle =
                "#55ff9a";

        }


        ctx.fillText(
            char,
            i * 18,
            drops[i] * 18
        );


        if (
            drops[i] * 18 > height &&
            Math.random() > .975
        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


setInterval(
    drawMatrix,
    65
);


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuBtn");

const navigation =
    document.getElementById("nav");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(".navbar nav a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


/* =========================================
   SCROLL REVEAL
========================================= */

const elements =
    document.querySelectorAll(
        ".section, .hero-content, .profile-area"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.animate(
                            [
                                {
                                    opacity: 0,
                                    transform:
                                        "translateY(25px)"
                                },
                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],
                            {
                                duration: 700,
                                easing:
                                    "cubic-bezier(.2,.7,.2,1)",
                                fill: "forwards"
                            }
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .08
        }
    );


elements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);


/* =========================================
   TERMINAL TYPING EFFECT
========================================= */

const cursor =
    document.querySelector(".cursor");


setInterval(
    () => {

        cursor.style.opacity =
            cursor.style.opacity === "0"
                ? "1"
                : "0";

    },
    500
);


/* =========================================
   MOUSE GLOW
========================================= */

document.addEventListener(
    "mousemove",
    event => {

        document.documentElement.style
            .setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );

        document.documentElement.style
            .setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );

    }
);