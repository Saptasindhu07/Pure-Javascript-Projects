console.log(document.getElementsByClassName("Price_text")[0].style)
document.getElementsByClassName("Overview")[0].addEventListener("click",()=>{
    if(document.getElementsByClassName("Price_text")[0].style.display !== "none"){
        document.getElementsByClassName("Price_text")[0].style.display = "none"
    }
    if(document.getElementsByClassName("Overview_text")[0].style.display == "none"){
        document.getElementsByClassName("Overview_text")[0].style.display = "block"
    }
    if(document.getElementsByClassName("Reviews_text")[0].style.display !== "none"){
        document.getElementsByClassName("Reviews_text")[0].style.display = "none"
    }
})
document.getElementsByClassName("Reviews")[0].addEventListener("click",()=>{
    if(document.getElementsByClassName("Price_text")[0].style.display !== "none"){
        document.getElementsByClassName("Price_text")[0].style.display = "none"
    }
    if(document.getElementsByClassName("Overview_text")[0].style.display !== "none"){
        document.getElementsByClassName("Overview_text")[0].style.display = "none"
    }
    if(document.getElementsByClassName("Reviews_text")[0].style.display == "none"){
        document.getElementsByClassName("Reviews_text")[0].style.display = "block"
    }
})
document.getElementsByClassName("Price")[0].addEventListener("click",()=>{
    if(document.getElementsByClassName("Price_text")[0].style.display == "none"){
        document.getElementsByClassName("Price_text")[0].style.display = "block"
    }
    if(document.getElementsByClassName("Overview_text")[0].style.display !== "none"){
        document.getElementsByClassName("Overview_text")[0].style.display = "none"
    }
    if(document.getElementsByClassName("Reviews_text")[0].style.display !== "none"){
        document.getElementsByClassName("Reviews_text")[0].style.display = "none"
    }
})
