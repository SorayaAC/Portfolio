"use strict";particlesJS("particles-js",{particles:{number:{value:140,density:{enable:!0,value_area:800}},color:{value:["#2EB67D","#ECB22E","#E01E5B","#36C5F0"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:8,random:!0,anim:{enable:!1,speed:10,size_min:10,sync:!1}},line_linked:{enable:!0,distance:150,color:"#808080",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:70,duration:.4},push:{particles_nb:4}}},retina_detect:!0});const allElements=document.querySelectorAll(".animated-text");allElements.length>0&&allElements.forEach(e=>{const t=e,n=t.getAttribute("data-words").split(", ");let l=0;!function e(){if(l<n.length){let s=n[l].split(""),o=0;t.textContent="",s.forEach(e=>{let n=" "===e?"&nbsp;":e;t.innerHTML+=`<span>${n}</span>`});let i=t.childNodes;const c=setInterval((function(){i[o].classList.add("active"),o++,o===i.length&&(clearInterval(c),setTimeout(()=>{a()},600))}),70);function a(){let t=setInterval(n,40);function n(){i[o].classList.remove("active"),o--,-1===o&&(clearInterval(t),l++,e())}o--}}else l=0,e()}()});