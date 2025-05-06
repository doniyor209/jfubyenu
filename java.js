const ota = document.getElementById("ota");
const Input = document.getElementById("input");
const select = document.getElementById("select");

let davlatlar ;
async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    chizish(data);
    davlatlar = data;
}

function chizish(malumot) {
    ota.innerHTML = "";
    console.log(malumot);


    malumot.map((countries) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.onclick= ()=>{
            location.href="./country.html";
            localStorage.setItem("country", JSON.stringify(countries));
        }
        div.innerHTML = `
              <img src=${countries.flags.svg} alt=${countries.flags.alt}>
                        <h3>${countries.name.common}</h3>
        
        `
        ota.appendChild(div);


    })

}


Input.addEventListener("input",()=>{
    const d=davlatlar.filter(a=> a.name.common.toLowerCase().includes(Input.value.toLowerCase()));
    chizish(d);
})

getData();

select.addEventListener("change",()=>{  
    if(select.value == "All"){
        chizish(davlatlar);
    }else{

        const d=davlatlar.filter(a=> a.region.toLowerCase().includes(select.value.toLowerCase()));
        chizish(d);
    }
})











