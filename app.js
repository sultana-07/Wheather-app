

 KYE = 'c4b469446da64a62a7455412241903';

 const input = document.querySelector("#input")
 const btn = document.querySelector("#btn")
 const cityname = document.querySelector(".cityname")
 const deg = document.querySelector("#degre")
 const hum = document.querySelector("#hum")
 const img = document.querySelector(".img")
 const mainbox = document.querySelector(".resultcon")
 const load = document.querySelector("#loading")
 const condi = document.querySelector("#condition")

 btn.addEventListener("click", () => {
    
    // console.log(inputval);
     let inputval = input.value
    
    const get = async(inputval) => {
        load.innerHTML = "Loading Data...."
        const res = await  fetch(`https://api.weatherapi.com/v1/current.json?key=${KYE}&q=${inputval}&aqi=yes`);
        const data = await res.json()
        console.log(data);
        
        load.innerHTML = ""
       
        cityname.innerHTML = `${data.location.name}: ${data.location.country}`
        img.setAttribute("src",`${data.current.condition.icon}`)
        deg.innerHTML = `degree : ${Math.floor(data.current.temp_c)} `
        hum.innerHTML = `Humadity: ${data.current.humidity}`
        condi.innerHTML = `Condition : ${data.current.condition.text}`
         mainbox.style. visibility =  "visible";
        input.value = ""

        
    }
    
    
    get(inputval)
 })







