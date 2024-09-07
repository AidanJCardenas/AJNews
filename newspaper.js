document.addEventListener('DOMContentLoaded', function() {
    
    // Update date
    const dateElement = document.getElementById('date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);

    // Update weather
    const weatherElement = document.getElementById('weather');
    fetch('https://api.weatherapi.com/v1/current.json?key=2fa6b991b64a443c8e412942240309&q=Memphis')
        .then(response => response.json())
        .then(data => {
            weatherElement.textContent = `${data.current.condition.text}, ${data.current.temp_f}°F`;
        })
        .catch(error => {
            weatherElement.textContent = 'Unable to fetch weather data';
        });
})