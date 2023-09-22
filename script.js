let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.35 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
}
)



































// document.addEventListener("DOMContentLoaded", function () {
//     const openPopupButton = document.getElementById("open-popup");
//     const closePopupButton = document.getElementById("close-popup");
//     const popup = document.getElementById("popup");
//     const confettiContainer = document.getElementById("confetti-container");

//     // Function to open the popup
//     function openPopup() {
//         popup.style.display = "block";
//     }

//     // Function to close the popup and trigger confetti burst
//     function closePopup() {
//         popup.style.display = "none";
//         triggerConfettiBurst();
//     }

//     // Function to create and append confetti elements to the container
//     function triggerConfettiBurst() {
//         for (let i = 0; i < 200; i++) { // You can adjust the number of confetti pieces
//             const confetti = document.createElement("div");
//             confetti.classList.add("confetti");
//             confetti.style.left = Math.random() * 100 + "vw";
//             confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
//             confetti.style.animationDelay = Math.random() * 2 + "s";
//             confettiContainer.appendChild(confetti);
//         }
//     }

//     // Add a click event listener to the "Open Popup" button
//     openPopupButton.addEventListener("click", openPopup);

//     // Add a click event listener to the "Close" button
//     closePopupButton.addEventListener("click", closePopup);
// });
