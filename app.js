fetch(`https://restcountries.eu/rest/v2/all`)
.then(res=>res.json())
.then(data =>newCountry(data))

const newCountry = data =>{

    let inner1 = document.getElementById("inner1")

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

      
      let inner2 = document.createElement('div')
      

        const country_info = `
        
        <div class="boom">
        
        <h2>${element.name}</h2>
        <h3>${element.capital}</h3>

        <button class="btn btn-secondary" onclick="myDetails('${element.name}')">Details</button>

       </div> 
        
        `
        inner2.innerHTML=country_info
        inner1.appendChild(inner2)
        
       
        
    }

}

var myDetails = (param)=>{

    let url =`https://restcountries.eu/rest/v2/name/${param}`

    fetch(url)
    .then(res=>res.json())
    .then(data =>callFunc(data[0]) )



}

function callFunc(value){

  fan=document.getElementById("fan")

  let light =document.getElementById("light")

   light.style.display="none"
   fan.style.display="block"


  

   let  valueInfo =`

   


    <h1><span style="color:red"> Country Name</span> :<span style="color:green"> ${value.name} </span> </h1>
     <h3>Population : ${value.population} </h3>
     <h4> Country area : ${value.area}</h4>
     <h5>Capital : ${value.capital || "Without capital city"}</h5>
     <h3>Language : ${value.languages[0].name}</h3>
    <h5>Country region : ${value.region}</h5>
    <br>
    <img style="widows: 200px;height:200px" src="${value.flag}" alt=""> <br><br>
    
    <button class="btn btn-success" onclick="newfunc()"> back</button>
    
    
    `
    fan.innerHTML=valueInfo
 
    


}

function newfunc(){

    let light =document.getElementById("light")
    let fan =document.getElementById("fan")

    light.style.display="block"

    fan.style.display="none"

   
 


}