// aside expand
var asideExpandButton = document.getElementById("aside-expand-button");

function asideExpand(){
    document.querySelector(".page-aside").classList.toggle("hide")
    document.querySelector(".mainbar").classList.toggle("expand")
    document.querySelector(".page-aside-layer").classList.toggle("show")
}

document.querySelector(".page-aside-layer").addEventListener("click", function() {
    document.querySelector(".page-aside-layer").classList.remove("show")
    document.querySelector(".page-aside").classList.remove("hide")
    document.querySelector(".mainbar").classList.remove("expand")
    
})