document.getElementsByClassName("search-button")[0].addEventListener("click",()=>{
    city_name=document.getElementById("search_query").value
    let xhr= new XMLHttpRequest()
    let URL=`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city_name}`
    xhr.open("GET",URL)
    xhr.setRequestHeader("X-RapidAPI-Key","0f248f7282mshd231481abdf9177p174348jsnb28408136862")
   
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState==4){
            let database=JSON.parse(xhr.response)
            console.log(database)
            document.getElementById("temp_now_value").textContent=`${database.temp} degrees celsius`
            document.getElementById("real_feel_value").textContent=`${database.feels_like} degrees celsius`
            document.getElementById("min_temp_value").textContent=`${database.min_temp} degrees celsius`
            document.getElementById("max_temp_value").textContent=`${database.max_temp} degrees celsius`
            document.getElementById("cloud_pct_value").textContent=`${database.cloud_pct}`
            document.getElementById("wind_speed_value").textContent=`${database.wind_speed}`
            document.getElementById("wind_direction_value").textContent=`${database.wind_degrees}`
            document.getElementById("humidity_value").textContent=`${database.humidity}`
            if(database.cloud_pct<=20){
                document.getElementById("cloud_status_value").textContent=`Few or No Clouds`
            }
            else if(database.cloud_pct<=50){
                document.getElementById("cloud_status_value").textContent=`Medium Clouds`   
            }
            else if(database.cloud_pct<=75){
                document.getElementById("cloud_status_value").textContent=`Quite Cloudy`
            }
            else if(database.cloud_pct<=100){
                document.getElementById("cloud_status_value").textContent=`Overcast`
            }

            if(database.wind_speed<=2){
                document.getElementById("wind_report_value").textContent=`Calm or no Winds`
            }
            else if(database.wind_speed<=4){
                document.getElementById("wind_report_value").textContent=`Light Breeze`   
            }
            else if(database.wind_speed<=7){
                document.getElementById("wind_report_value").textContent=`Gusty Conditions`
            }
            else{
                document.getElementById("wind_report_value").textContent=`Strong Winds`
            }

            if(database.humidity<=20){
                document.getElementById("humidity_report_value").textContent=`Dry Conditions`
            }
            else if(database.humidity<=40){
                document.getElementById("humidity_report_value").textContent=`Moderately Humid`   
            }
            else if(database.humidity<=70){
                document.getElementById("humidity_report_value").textContent=`Humid`
            }
            else{
                document.getElementById("humidity_report_value").textContent=`Very Humid`
            }
        }
    })
    
    xhr.send()
})
