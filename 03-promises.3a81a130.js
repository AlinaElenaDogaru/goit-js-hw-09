!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register;var i=r("ejkSG");document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();let o=parseInt(t.target.delay.value),n=parseInt(t.target.step.value),r=parseInt(t.target.amount.value);console.log(o,n,r);for(let t=0;t<r;t++)(function(e,t){return new Promise((e,o)=>{setTimeout(()=>{Math.random()>.3?e({position:1,delay:t}):o({position:1,delay:t})},t)})})(0,o+t*n).then(t=>{/*@__PURE__*/e(i).Notify.success(`Fulfilled promise ${t.position} in ${t.delay}ms`)}).catch(t=>{/*@__PURE__*/e(i).Notify.failure(`Rejected promise ${t.position} in ${t.delay}ms`)})})}();
//# sourceMappingURL=03-promises.3a81a130.js.map
