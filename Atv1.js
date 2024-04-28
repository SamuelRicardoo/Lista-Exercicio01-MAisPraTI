function celciusFahrenheit(celsius){
    var fahrenheit = (celsius *9/5) + 32;
    return fahrenheit;
}

var temperaturaCelsius = 25;

var temperaturaFahrenheit = celciusFahrenheit(temperaturaCelsius);

console.log("Temperatura em Fahrenheit: "+ temperaturaFahrenheit);