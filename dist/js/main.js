"use strict";var makeCaledar=function(){var e=document.getElementById("content"),t=document.createElement("table");t.setAttribute("class","calendar");for(var a=0;a<5;a+=1){var n=document.createElement("tr");t.appendChild(n);for(var r=0;r<7;r+=1){var d=document.createElement("td");n.appendChild(d);var c=document.createElement("div");c.setAttribute("class","content"),d.appendChild(c),c.innerHTML=r}}e.appendChild(t)};document.onreadystatechange=function(){"interactive"===document.readyState&&makeCaledar()};