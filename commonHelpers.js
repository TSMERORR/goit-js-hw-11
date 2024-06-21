import{i as o,S as g}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="43830047-c5fe5a5c9108224ed65675c7e",h="https://pixabay.com/api/",d=a=>{const r=new URLSearchParams({key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/?${r}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})},f=a=>a.reduce((r,{tags:s,webformatURL:i,largeImageURL:e,likes:t,views:l,comments:m,downloads:u})=>r+`
			<li class="gallery__item item-gallery">
				<a class="item-gallery__link" href="${e}">
					<img class="item-gallery__img" src="${i}" alt="${s}">
				</a>
				<ul class="item-gallery__data">
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Likes</h2>
						<p class="item-gallery__counter">${t}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Views</h2>
						<p class="item-gallery__counter">${l}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Comments</h2>
						<p class="item-gallery__counter">${m}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Downloads</h2>
						<p class="item-gallery__counter">${u}</p>
					</li>
				</ul>
			</li>
		`,""),c=document.querySelector(".js-gallery"),p=document.querySelector(".js-search-form"),n=document.querySelector(".js-loader");async function _(a){a.preventDefault();const r=a.target.elements.searchword.value.trim();if(c.innerHTML="",r==="")return o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.classList.remove("is-hidden");try{const s=await d(r);if(s.hits.length===0)return o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});c.innerHTML=f(s.hits),new g(".item-gallery__link",{captionsData:"alt",captionsDelay:250}).refresh()}catch{o.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{a.target.reset(),n.classList.add("is-hidden")}}p.addEventListener("submit",_);
//# sourceMappingURL=commonHelpers.js.map
