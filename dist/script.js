(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".card-wrapper"),o=Array.from(e.children),t=e.children[0].offsetWidth,s=e.getBoundingClientRect(),l=Math.floor(e.offsetWidth/(t+24));let r,c=0,n=0,i=!1;function f(){e.classList.remove("grab"),i=!1}o.slice(-l).reverse().forEach((o=>{e.insertAdjacentHTML("afterbegin",o.outerHTML)})),o.slice(0,l).forEach((o=>{e.insertAdjacentHTML("beforeend",o.outerHTML)})),e.querySelectorAll("img, a").forEach((e=>{e.setAttribute("draggable",!1)})),e.classList.add("no-smooth"),e.scrollLeft=e.offsetWidth,e.classList.remove("no-smooth"),e.onmousedown=function(o){e.classList.add("grab"),n=o.clientX-s.left,c=e.scrollLeft,i=!0},e.onmousemove=function(o){if(i){const t=o.clientX-s.left;e.scrollLeft=c+-(t-n)}},e.onmouseup=f,e.onmouseleave=f,e.onscroll=function(){0===e.scrollLeft?(e.classList.add("no-smooth"),e.scrollLeft=e.scrollWidth-2*e.offsetWidth,e.classList.remove("no-smooth")):e.scrollLeft===e.scrollWidth-e.offsetWidth&&(e.classList.add("no-smooth"),e.scrollLeft=e.offsetWidth,e.classList.remove("no-smooth")),r&&clearTimeout(r),r=setTimeout((()=>{e.classList.remove("no-smooth"),e.scrollLeft+=t}),0)}})()}))})();