// Function to fetch and update weather information
const weather = async (city) => {
  try {
    // Show loading message
    document.querySelector(".city h1").textContent = "Loading...";
    document.querySelector(".temperature h2").textContent =
      "Temperature: Loading...";
    document.querySelector(".condition h2").textContent =
      "Condition: Loading...";
    document.querySelector(".humidity").textContent = "Humidity: Loading...";
    document.querySelector(".wind").textContent = "Wind: Loading...";
    document.querySelector(".pressure").textContent = "Pressure: Loading...";
    document.querySelector(".visibility").textContent =
      "Visibility: Loading...";
    document.querySelector(".uv").textContent = "UV Index: Loading...";

    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=276356e11dca4048a99150952241508&q=" +
        `${city}`
    );
    const data = await response.json();

    // Update the HTML elements with weather data
    document.querySelector(".city h1").textContent = data.location.name;
    document.querySelector(".temperature h2").textContent =
      "Temperature: " + Math.round(data.current.temp_c) + " °C";
    document.querySelector(".condition h2").textContent =
      "Condition: " + data.current.condition.text;
    document.querySelector(".weather-icon").src =
      "https:" + data.current.condition.icon;
    document.querySelector(".humidity").textContent =
      "Humidity: " + data.current.humidity + "%";
    document.querySelector(".wind").textContent =
      "Wind: " + data.current.wind_kph + " km/h";
    document.querySelector(".pressure").textContent =
      "Pressure: " + data.current.pressure_mb + " mb";
    document.querySelector(".visibility").textContent =
      "Visibility: " + data.current.vis_km + " km";
    document.querySelector(".uv").textContent = "UV Index: " + data.current.uv;

    // Log data to console (for debugging purposes)
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    // Show error message
    document.querySelector(".city h1").textContent = "Error fetching data";
    document.querySelector(".temperature h2").textContent = "Temperature: --";
    document.querySelector(".condition h2").textContent = "Condition: --";
    document.querySelector(".humidity").textContent = "Humidity: --%";
    document.querySelector(".wind").textContent = "Wind: -- km/h";
    document.querySelector(".pressure").textContent = "Pressure: -- mb";
    document.querySelector(".visibility").textContent = "Visibility: -- km";
    document.querySelector(".uv").textContent = "UV Index: --";
  }
};

// Event listener for the search button
document.querySelector(".btn").addEventListener("click", () => {
  const city = document.querySelector("#search").value;
  if (city) {
    weather(city);
  } else {
    alert("Please enter a city name");
  }
});
