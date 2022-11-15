let img = document.querySelector(".onlyImage");
let dogBtn = document.querySelector(".btn1");
let city = document.querySelector(".form-control");
let temperature = document.querySelector(".temperature")
let wind = document.querySelector(".wind")
let description =document.querySelector(".description")
let weatherBtn = document.querySelector(".btn2");



fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.message);
        img.src = data.message;

    })

    
dogBtn.addEventListener("click", ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
    return response.json();
        })
        .then((data) => {
            console.log(data.message);
            img.src = data.message;

        })
})


weatherBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    fetch(encodeURI(`https://goweather.herokuapp.com/weather/${city.value}`))
        .then((response) => {
            return response.json();
        })
    
        .then((data) => {
            console.log(data);
            temperature.innerText = `Temperature: ${data.temperature}`;
            wind.innerText = `Wind: ${data.wind}`
            description.innerText = `Description: ${data.description}`
        })

})    

