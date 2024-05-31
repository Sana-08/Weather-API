const button = document.querySelector("#btn");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temp");

const apiKey = `0fbae69fe93d2b0f0306742dbfd7fae8`;

button.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
  )
    .then((output) => {
      return output.json();
    })

    .then((output) => {
      console.log(output);
      city.innerHTML = `${output.name}`;
      temperature.innerHTML = `${output.main.temp} °C`;
    })

    .catch((error) => {
      console.log(error);
    });
});


function checkTemp(temp){
    if (temp>30){
        document.style.backgroundImage="url('./images/clear.png')";
    }
}