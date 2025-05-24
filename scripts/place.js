const temp = parseInt(document.querySelector("#current-temp").textContent);
const windSpeed = parseInt(document.querySelector("#windspeed").textContent);


// Calculate wind chill in Celsius
const windChill = calculateWindChill(temp, windSpeed);
function calculateWindChill(T, V) {
    // temp in Celsius, windSpeed in km/h
    if (T <= 10 && V >= 4.8) {
        return (
            13.12 +
            0.6215 * T -
            11.37 * Math.pow(V, 0.16) +
            0.3965 * T * Math.pow(V, 0.16)
        );
    } else {
        return T; // Wind chill not applicable
    }
}

// Display wind chill in the HTML (rounded to 1 decimal place)
document.querySelector("#windchill").textContent = 
    (temp <= 10 && windSpeed >= 4.8) ? `${windChill.toFixed(1)} °C` : "N/A";