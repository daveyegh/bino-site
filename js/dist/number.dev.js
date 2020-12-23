// function animateValue(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       obj.innerHTML = Math.floor(progress * (end - start) + start);
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }
//   const obj = document.querySelectorAll(".stats__title");
//   animateValue(obj, 0, 3891, 5000);
"use strict";