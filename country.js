const ota2=document.getElementById("ota2");

const countries=JSON.parse(localStorage.getItem("country")) ;

ota2.innerHTML=`
  <img src=${countries.flags.svg} alt=${countries.flags.alt}>
                    <div class="info">
                        <h2>${countries.name.common}</h2>
                        <h3>Poytaxti:${countries.capital} </h3>
                        <h3>Aholiyasi:${countries.population} </h3>
                        <h3>Mydoni:${countries.area} </h3>
                        <h3>Region:${countries.region} </h3>
                        <h3>Chegarados davlatlari:${countries.borders} </h3>
                    </div>
`