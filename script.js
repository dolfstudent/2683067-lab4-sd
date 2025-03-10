async function getData(countryName) {

    const url = "https://restcountries.com/v3.1/name/"+countryName
    
    try {
  
      const response= await fetch(url);
      console.log(response)
  
      if(!response.ok){
        throw new error('response status:${response.status}')
      }
  
      const jasonResponse= await response.json();

      jasonResponse.forEach(value=>{

        const capital=value.capital
        const population=value.population
        const region= value.region
        const flags=value.flags.png 
        //console.log(value[detail])

        const countryinfo =document.getElementById("country-info");
         countryinfo.innerHTML=`
        <p><strong>Capital:</strong>${capital}</p>
        <p><strong>Population:</strong>${population}</p>
        <p><strong>Region:</strong>${region}</p>
        <p><strong>Flag:</strong> <img src="${flags}" alt="flag" width="500" height=400></p>
        `
            })
    
      
    } catch (error) {
  
      console.error(error.message)
      
    }
  }

       const myButton= document.getElementById("button");

        myButton.addEventListener('click',function(){
        const myInput=document.getElementById("input");
         const countryis= myInput.value.trim()
         getData(countryis)
         })
               


  async function getdetails(countryName,detail) {


    country=await getData(countryName)

    country.forEach(value=>{
        console.log(value[detail])
      })

    
  }
