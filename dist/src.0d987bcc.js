parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oGlk":[function(require,module,exports) {
var e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],o=document.querySelector(".js-gallery"),t=i(e);function i(e){return e.map(function(e){var o=e.preview,t=e.original,i=e.description;return'<li class="gallery__item">\n            <a\n                class="gallery__link"\n                href="'.concat(t,'"\n                onclick="event.preventDefault()"\n            >\n            <img\n                class="gallery__image"\n                src="').concat(o,'"\n                data-source="').concat(t,'"\n                alt="').concat(i,'"\n                />\n            </a>\n        </li>')}).join("")}o.insertAdjacentHTML("beforeend",t);var n=document.querySelector(".lightbox__button"),a=document.querySelector(".js-lightbox"),p=document.querySelector(".lightbox__image"),c=document.querySelector(".lightbox__overlay");function r(e){"IMG"===e.target.nodeName&&(p.src=e.target.dataset.source,a.classList.add("is-open"),window.addEventListener("keydown",l))}function s(){a.classList.remove("is-open"),p.src=" ",window.removeEventListener("keydown",l)}function l(o){if(a.classList.contains("is-open")){var t=[];switch(e.map(function(e){return t.push(e.original)}),o.key){case"Escape":s();break;case"ArrowRight":t.indexOf(p.src)+1===t.length?p.src=t[0]:p.src=t[t.indexOf(p.src)+1];break;case"ArrowLeft":0===t.indexOf(p.src)?p.src=t[t.length-1]:p.src=t[t.indexOf(p.src)-1]}}}c.addEventListener("click",s),o.addEventListener("click",r),n.addEventListener("click",s);
},{}],"OxpV":[function(require,module,exports) {
var e=document.querySelector(".form-listen");e.addEventListener("click",a);var l='\n<form>\n  <div class="mb-3">\n    <label for="exampleInputEmail1" class="form-label">Email address</label>\n    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\n    <div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>\n  </div>\n  <div class="mb-3">\n    <label for="exampleInputPassword1" class="form-label">Password</label>\n    <input type="password" class="form-control" id="exampleInputPassword1">\n  </div>\n  <div class="mb-3 form-check">\n    <input type="checkbox" class="form-check-input" id="exampleCheck1">\n    <label class="form-check-label" for="exampleCheck1">Check me out</label>\n  </div>\n  <button type="submit" class="btn btn-primary">Submit</button>\n</form>\n';function a(){e.insertAdjacentHTML("afterend",l),e.removeEventListener("click",a)}
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./js/creating_markup"),require("./js/form-listen");
},{"./js/creating_markup":"oGlk","./js/form-listen":"OxpV"}]},{},["H99C"], null)
//# sourceMappingURL=/src.0d987bcc.js.map