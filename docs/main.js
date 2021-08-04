(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap);"]),o.push([n.id,"body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Quicksand', sans-serif;\n  position: relative;\n  background-image: linear-gradient(#9ec1a3, #cfe0c3);\n}\n\n.main-title {\n  margin: 0;\n  padding: 15px 10px;\n  color: #1f363d;\n  text-shadow: -3px 3px #40798c;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  flex: 1;\n  margin: 20px 10px;\n}\n\n.title-refresh {\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.box-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-align: center;\n  margin: 0;\n  flex: 2;\n  color: #1f363d;\n}\n\n.table {\n  border: none;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 0 10px grey;\n  background-color: #cfe0c3;\n  width: 100%;\n}\n\n.form {\n  width: min-content;\n  margin: 0 auto;\n}\n\n.form input {\n  display: block;\n  margin: 20px 0;\n  float: right;\n  clear: both;\n  overflow: hidden;\n}\n\n.text-inputs {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 0 10px grey;\n  background-color: #cfe0ce;\n  padding: 10px;\n}\n\n.text-inputs::placeholder {\n  font-weight: 600;\n  font-family: 'Quicksand', sans-serif;\n  color: #1f363d;\n}\n\n.submit,\n.refresh {\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-family: inherit;\n  box-shadow: 0 0 20px grey;\n}\n\n.copyright {\n  text-align: center;\n  font-family: inherit;\n  color: #1f363d;\n}\n\n.copyright p {\n  margin: 0;\n  padding: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    height: 100vh;\n  }\n\n  .main-title {\n    padding: 25px 25px;\n    font-size: 2.5rem;\n  }\n\n  .main-container {\n    flex-direction: inherit;\n  }\n\n  .box {\n    margin: 20px 20px;\n  }\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:l,updater:o(f,r),references:1}),i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),p=t.n(l),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=(n,e)=>{const t=document.querySelector(".table"),r=document.createElement("tr"),o=document.createElement("td");o.innerHTML=n,r.appendChild(o);const a=document.createElement("td");a.innerHTML=e,r.appendChild(a),t.appendChild(r)},x=async()=>{(await(async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EO65suUhDU47wLiHboGe/scores/");return await n.json()})()).result.forEach((n=>{h(n.user,n.score)}))},g=document.querySelector(".submit"),b=document.querySelector(".refresh");x(),g.addEventListener("click",(n=>{n.preventDefault(),(()=>{const n=document.querySelector("#name").value,e=document.querySelector("#score").value;((n,e)=>{fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EO65suUhDU47wLiHboGe/scores/",{method:"POST",body:JSON.stringify({user:n,score:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((n=>n.json()))})(n,e),h(n,e)})(),document.querySelector("form").reset()})),b.addEventListener("click",(n=>{n.preventDefault(),document.querySelector(".table").innerHTML="",x()}))})()})();