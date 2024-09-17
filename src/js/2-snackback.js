

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const delay = parseInt(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); 
      } else {
        reject(delay); 
      }
    }, delay);
  });

    
     
  promise
    .then((delay) => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch((delay) => {
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});