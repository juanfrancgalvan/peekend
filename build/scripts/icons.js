const icons=[{name:"Good Price",icon:"/build/assets/images/icon1.webp"},{name:"For Developers",icon:"/build/assets/images/icon2.webp"},{name:"Free Shipping",icon:"/build/assets/images/icon3.webp"},{name:"The Best Quality",icon:"/build/assets/images/icon4.webp"}];function createIcons(){const e=document.querySelector(".icons-grid");icons.forEach(i=>{const n=document.createElement("div");n.classList.add("icon"),n.innerHTML=`\n        <img src="${i.icon}" alt="Buy icon">\n        <h3>${i.name}</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n      `,e.appendChild(n)})}createIcons();
//# sourceMappingURL=icons.js.map