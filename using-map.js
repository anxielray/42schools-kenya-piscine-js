/* Create the following functions:

    Your solutions must use map.

Cities Only

citiesOnly: accepts an array of objects and returns an array of strings from the city key.

citiesOnly([
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
]) // -> ['Los Angeles', 'San Francisco']

Upper Casing States

upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.

upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

Fahrenheit to Celsius

fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.

fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

Trim Temp

trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.

trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
]

^Temp Forecasts

tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:

tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]) -> ['38°Celsius in Pasadena, California']
 */

function citiesOnly(citiesArray) {
  const citiesMap = new Map();
  citiesArray.forEach((item) => {
    if (item.city) {
      citiesMap.set(item.city.trim(), item.city.trim());
    }
  });
  return Array.from(citiesMap.keys());
}

function upperCasingStates(statesArray) {
  return statesArray.map((state) => {
    return state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();
  });
}

function fahrenheitToCelsius(tempArray) {
  return tempArray.map((temp) => {
    return (
      Math.floor(((parseFloat(temp.trim().slice(0, -2)) - 32) * 5) / 9) + "°C"
    );
  });
}

function trimTemp(temp) {
  return temp.map((item) => {
    return { ...item, temperature: item.temperature.trim().slice(0, -2) };
  });
}

function tempForecasts(forecastsArray) {
  return forecastsArray.map((forecast) => {
    return `${Math.floor(
      ((parseFloat(forecast.temperature.trim().slice(0, -2)) - 32) * 5) / 9
    )}°Celsius in ${forecast.city}, ${forecast.state}`;
  });
}
