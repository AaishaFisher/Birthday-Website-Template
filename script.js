





































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
