var e=document.querySelectorAll("form input"),t=function(e){for(var t="",r=0;r<e.length;r++)r>0&&e[r]===e[r].toUpperCase()&&" "!==e[r-1]&&(t+=" "),t+=e[r];return t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}).join(" ")};e.forEach(function(e){var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",e.id),e.parentNode.insertBefore(r,e),r.textContent=e.name.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,function(e){return e.toUpperCase()}),e.setAttribute("placeholder",t(e.name))});
//# sourceMappingURL=index.b74dd1de.js.map