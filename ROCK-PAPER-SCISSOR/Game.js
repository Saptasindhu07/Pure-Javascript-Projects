let score_user=0
let score_comp=0
let custom_object={
    1:"paper",
    2:"rock",
    3:"scissor"
}
alert("1st to 4 Points Wins the Game. Click on the respective buttons to give input")
document.getElementsByClassName("button_paper")[0].addEventListener("click",()=>{
    let new_element= document.createElement("p")
    new_element.className="log_text"
    new_element.innerText="PAPER"
    document.getElementsByClassName("Player-Log")[0].append(new_element)
    let random_=Math.floor(Math.random()*3+1)
    let comp_output=custom_object[random_]
    let new_element2= document.createElement("p")
    new_element2.className="log_text"
    new_element2.innerText=comp_output
    document.getElementsByClassName("AI-Log")[0].append(new_element2)
    if(comp_output=="paper"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="NONE"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
    }
    if(comp_output=="rock"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="PLAYER"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_user=score_user+1
    }
    if(comp_output=="scissor"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="COMPUTER"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_comp=score_comp+1
    }
    let temp_2=document.createElement("p")
    temp_2.className="log_text"
    temp_2.textContent=score_user
    let temp_3=document.createElement("p")
    temp_3.className="log_text"
    temp_3.textContent=score_comp
    document.getElementsByClassName("Player_Score")[0].append(temp_2)
    document.getElementsByClassName("Computer_Score")[0].append(temp_3)
    if(score_user==4){
        alert("CONGRATULATIONS!!!! You have Reached 4 Points You Won")
    }
    if(score_comp==4){
        alert("Sorry Computer reached 4 Points It seems you have lost")
    }
})
document.getElementsByClassName("button_rock")[0].addEventListener("click",()=>{
    let new_element= document.createElement("p")
    new_element.className="log_text"
    new_element.innerText="ROCK"
    document.getElementsByClassName("Player-Log")[0].append(new_element)
    let random_=Math.floor(Math.random()*3+1)
    let comp_output=custom_object[random_]
    let new_element2= document.createElement("p")
    new_element2.className="log_text"
    new_element2.innerText=comp_output
    document.getElementsByClassName("AI-Log")[0].append(new_element2)
    if(comp_output=="paper"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="computer"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_comp=score_comp+1
    }
    if(comp_output=="rock"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="NONE"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
       
    }
    if(comp_output=="scissor"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="Player"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_user=score_user+1
    }
       
    let temp_2=document.createElement("p")
    temp_2.className="log_text"
    temp_2.textContent=score_user
    let temp_3=document.createElement("p")
    temp_3.className="log_text"
    temp_3.textContent=score_comp
    document.getElementsByClassName("Player_Score")[0].append(temp_2)
    document.getElementsByClassName("Computer_Score")[0].append(temp_3)
    if(score_user==4){
        alert("CONGRATULATIONS!!!! You have Reached 4 Points You Won")
    }
    if(score_comp==4){
        alert("Sorry Computer reached 4 Points It seems you have lost")
    }
})
document.getElementsByClassName("button_scissor")[0].addEventListener("click",()=>{
    let new_element= document.createElement("p")
    new_element.className="log_text"
    new_element.innerText="SCISSOR"
    document.getElementsByClassName("Player-Log")[0].append(new_element)
    let random_=Math.floor(Math.random()*3+1)
    let comp_output=custom_object[random_]
    let new_element2= document.createElement("p")
    new_element2.className="log_text"
    new_element2.innerText=comp_output
    document.getElementsByClassName("AI-Log")[0].append(new_element2)
    if(comp_output=="paper"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="Player"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_user=score_user+1
    }
    if(comp_output=="rock"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="COMPUTER"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        score_comp=score_comp+1
       
    }
    if(comp_output=="scissor"){
        let temp_=document.createElement("p")
        temp_.className="log_text"
        temp_.textContent="NONE"
        document.getElementsByClassName("Win_Log")[0].append(temp_)
        
    }
       
    let temp_2=document.createElement("p")
    temp_2.className="log_text"
    temp_2.textContent=score_user
    let temp_3=document.createElement("p")
    temp_3.className="log_text"
    temp_3.textContent=score_comp
    document.getElementsByClassName("Player_Score")[0].append(temp_2)
    document.getElementsByClassName("Computer_Score")[0].append(temp_3)
    if(score_user==4){
        alert("CONGRATULATIONS!!!! You have Reached 4 Points You Won")
    }
    if(score_comp==4){
        alert("Sorry Computer reached 4 Points It seems you have lost")
    }
})
