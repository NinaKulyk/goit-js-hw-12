import{a as h,S as p}from"./assets/vendor-4533621d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const y="44189904-4675a190af98c4e4efc911d57",b="https://pixabay.com/api/";async function d(e,r=1,n=15){const s={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n};try{return(await h.get(b,{params:s})).data}catch(t){throw console.error("Error fetching images:",t),t}}function f(e){return e.map(({webformatURL:r,largeImageURL:n,tags:s,likes:t,views:o,comments:a,downloads:g})=>`
    <div class="photo-card">
      <a href="${n}" class="gallery-link">
        <img src="${r}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${t}</p>
        <p class="info-item"><b>Views</b>${o}</p>
        <p class="info-item"><b>Comments</b>${a}</p>
        <p class="info-item"><b>Downloads</b>${g}</p>
      </div>
    </div>
  `).join("")}function m(e){document.querySelector(".gallery").insertAdjacentHTML("beforeend",e)}function L(){const e=document.querySelector(".gallery");e.innerHTML=""}function l(e){const r=document.querySelector(".load-more");e?r.classList.remove("hidden"):r.classList.add("hidden")}function S(){const e=document.createElement("p");e.classList.add("end-message"),e.textContent="We're sorry, but you've reached the end of search results.",document.querySelector(".gallery").insertAdjacentElement("afterend",e)}function v(){const e=document.querySelector(".end-message");e&&e.remove()}const q=document.querySelector(".search-form"),M=document.querySelector(".load-more");let c="",u=1,i;q.addEventListener("submit",w);M.addEventListener("click",E);async function w(e){if(e.preventDefault(),c=e.currentTarget.elements.searchQuery.value.trim(),u=1,L(),l(!1),v(),c!=="")try{const r=await d(c,u);if(r.hits.length===0){alert("No images found. Please try a different query.");return}const n=f(r.hits);m(n),l(r.hits.length>=15),$()}catch(r){console.error(r)}}async function E(){u+=1;try{const e=await d(c,u),r=f(e.hits);m(r),l(e.hits.length>=15),e.hits.length<15&&(l(!1),S()),O(),i.refresh()}catch(e){console.error(e)}}function O(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function $(){i?i.refresh():i=new p(".gallery a",{captionDelay:250,captionsData:"alt"})}
//# sourceMappingURL=commonHelpers.js.map