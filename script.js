async function fetchWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&key=9046c22073134697ad4164223240907`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const responseData = await response.json();
        const responseLocationName = responseData.location.name;
        const responseLocationTemp = responseData.current.temp_c;

        document.getElementById('locationName').textContent = `Location: ${responseLocationName}`;
        document.getElementById('locationTemp').textContent = `Temperature: ${responseLocationTemp} °C`;
        document.getElementById('weatherData').style.display = 'block';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

document.getElementById('fetchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
});
