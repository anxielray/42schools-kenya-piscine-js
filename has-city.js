function hasCity(country, cities) {
    return function (city) {
        if (cities.indexOf(city) === -1) {
            return city + " is not a city in " + country;
        }
        return city + " is a city in " + country;
    };
}
