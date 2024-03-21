let setError=function(index,SetError){
    document.getElementsByClassName("error")[index].textContent=SetError
}
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})
let submit_func=function(){
    console.log("running")
    let current_=true
    if(document.getElementById("first_name").value.length<=2){
        setError(0,"*Name too Short")
        console.log("error")
        current_=false
    }
    else{
        document.getElementsByClassName("error")[0].textContent=""
        console.log(document.getElementById("first_name").value)
    }
    if(document.getElementById("last_name").value.length<=2){
        setError(1,"*Name too Short")
        current_=false
    }
    else{
        document.getElementsByClassName("error")[1].textContent=""
        console.log(document.getElementById("last_name").value)
    }
    if(document.getElementById("phone").value.length!==10){
        setError(2,"*Please enter valid 10 digit number")
        current_=false
    }
    else{
        document.getElementsByClassName("error")[2].textContent=""
        console.log(document.getElementById("phone").value)
    }
    return current_
}
