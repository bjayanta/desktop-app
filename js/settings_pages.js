// aside expand
var asideExpandButton = document.getElementById("aside-expand-button");

function asideExpand(){
    if(asideExpandButton.checked == true){
        document.querySelector(".setting-pages-aside").classList.add("hide")
        document.querySelector(".setting-pages-mainber").classList.add("expand")
        document.querySelector(".setting-pages-aside-layer").classList.add("show")
    }
    else{
        document.querySelector(".setting-pages-aside").classList.remove("hide")
        document.querySelector(".setting-pages-mainber").classList.remove("expand")
        document.querySelector(".setting-pages-aside-layer").classList.remove("show")
    }
}

document.querySelector(".setting-pages-aside-layer").addEventListener("click", function() {
    document.querySelector(".setting-pages-aside-layer").classList.remove("show")
    document.querySelector(".setting-pages-aside").classList.remove("hide")
    document.querySelector(".setting-pages-mainber").classList.remove("expand")

    asideExpandButton.checked = false;
})