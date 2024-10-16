//make sure never to forget to remove temporalily the word 'export' from the function in order to test it, but return it back whenever we require to test the function...
export function dogYears() {
  const secondsInEarthYear = 31557600;
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const ageInEarthYears = ageInSeconds / secondsInEarthYear;
  const planetAgeInDogYears = (ageInEarthYears * 7) / orbitalPeriods[planet];
  return parseFloat(planetAgeInDogYears.toFixed(2));
}
console.log(dogYears("jupiter", 31557600));
