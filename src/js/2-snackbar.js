import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const inputDeley = document.querySelector('input[name="delay"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(inputDeley.value, 10);
    const state = form.elements.state.value;

    const notificationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    notificationPromise
        .then((delay) => {
            console.log(`✅ Fulfilled promise in ${delay}ms`);
        })
        .catch((delay) => {
            console.log(`❌ Rejected promise in ${delay}ms`);
        });
});

