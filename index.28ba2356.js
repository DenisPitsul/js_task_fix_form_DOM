document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var l=document.createElement("label");l.classList.add("field-label"),l.htmlFor=e.id,l.textContent=e.name,e.placeholder=e.name[0].toUpperCase()+e.name.slice(1),e.before(l)})});
//# sourceMappingURL=index.28ba2356.js.map
