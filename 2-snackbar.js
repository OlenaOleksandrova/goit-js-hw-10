import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();const s=parseInt(t.target.elements.delay.value),r=t.target.elements.state.value;new Promise((e,o)=>{setTimeout(()=>{r==="fulfilled"?e(s):r==="rejected"&&o(s)},s)}).then(e=>{i.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"❌ Error",message:`Rejected promise in ${e}ms`})})});
//# sourceMappingURL=2-snackbar.js.map
