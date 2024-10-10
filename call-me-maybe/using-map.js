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
  return citiesArray.map((c) => c.city);
}

function upperCasingStates(statesArray) {
  return statesArray.map((state) =>
    state
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );
}

function fahrenheitToCelsius(tempArray) {
  return tempArray.map((temp) => {
    return (
      Math.floor(((parseFloat(temp.trim().slice(0, -2)) - 32) * 5) / 9) + "°C"
    );
  });
}

function trimTemp(tempArray) {
  return tempArray.map((item) => {
    return {
      city: item.city,
      region: item.region,
      state: item.state,
      temperature: item.temperature.replace(/\s+/g, ""),
    };
  });
}

function tempForecasts(forecastsArray) {
  return forecastsArray.map((forecast) => {
    return `${Math.floor(
      ((parseFloat(forecast.temperature.trim().slice(0, -2)) - 32) * 5) / 9
    )}°Celsius in ${upperCasingStates([forecast.city])}, ${upperCasingStates([
      forecast.state,
    ])}`;
  });
}

//         const result = [
//             {
//                 city: "Los Angeles",
//                 region: "West",
//                 state: "california",
//                 temperature: "101 °F",
//             },
//             {
//                 city: "San Francisco",
//     region: "West",
//     state: "california",
//     temperature: "84 °F",
// },
// {
//     city: "Miami",
//     region: "South",
//     state: "Florida",
//     temperature: " 112 °F",
// },
// {
//     city: "New york city",
//     region: "North East",
//     state: "new york",
//     temperature: " 0 °F",
// },
// {
//     city: "Juneau",
//     region: "West",
//     state: "Alaska",
//     temperature: " 21° F",
//   },
//   {
//       city: "Boston",
//       region: "North East",
//       state: "massachussetts",
//       temperature: "45 °F",
//     },
//     {
//         city: "Jackson",
//         region: "South",
//     state: "mississippi",
//     temperature: " 70°F  ",
// },
// {
//     city: "Utqiagvik",
//     region: "West",
//     state: "Alaska",
//     temperature: " -1 °F",
// },
// ];

// console.log(citiesOnly(result));

// console.log(upperCasingStates(result));
