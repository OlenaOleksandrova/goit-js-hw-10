import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') { 
        reject(delay);
       }
    }, delay);
  });

    
  promise
    .then((delay) => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${delay}ms`,
        });
    });
  
  if (state === 'caution' || state === 'informing' || state === 'message' || state === 'options') {
    setTimeout(() => {
      if (state === 'caution') {
        iziToast.warning({
          title: 'Caution',
          message: 'You forgot important data',
        });
      } else if (state === 'informing') {
        iziToast.info({
          title: 'Hello',
          message: 'Welcome!',
        });
      } else if (state === 'message') {
        iziToast.info({
          title: 'Hello!',
          message: 'Do you like it?',
        });
      } else if (state === 'options') {
        iziToast.info({
          title: 'Hey',
          message: 'What would you like to add?',
        });
      }
    }, delay);
  }
  
});
