((imgs, html, main, stl) => {
    html.innerHTML = "";
    html.querySelector("body").appendChild(main)
    html.querySelector("head").appendChild(stl)
    imgs.forEach(x => main.appendChild(x));
    stl.innerText = "@media print { img { width:95%; height:95%; page-break-after:always; } }";
})(  
    [ ... document.querySelectorAll("img[alt~='Page']") ],
    document.querySelector("html"),
    document.createElement("main"),
    document.createElement("style")
)
