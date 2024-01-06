import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const inputDeley = document.querySelector('input[name="delay"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(inputDeley.value, 10);
    const state = form.elements.state.value;
    event.target.reset();

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
            iziToast.show({
                title: `✅ Fulfilled promise in ${delay}ms`,
                titleColor: 'white',
                color: 'white',
                backgroundColor: 'green',
                position: 'topRight',
            });
        })
        .catch((delay) => {
            iziToast.show({
                title: `❌ Rejected promise in ${delay}ms`,
                titleColor: 'white',
                color: 'white',
                backgroundColor: 'red',
                position: 'topRight',
            });
        });
});

