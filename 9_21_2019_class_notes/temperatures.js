// Write a function "coolCities" which takes an array of city Objects
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 90.0 },
    { name: 'Michigan', temperature: 52.0 },
    { name: 'Florida', temperature: 90.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 },
    { name: 'Portland', temperature: 60.0 }
  ];

  var towns = [
    { name: 'Stone Mountain', temperature: 60.0},
    { name: 'Atlanta', temperature: 90.0 },
    { name: 'Decatur', temperature: 52.0 },
    { name: 'JonesBoro', temperature: 90.0 },
    { name: 'Buckhead', temperature: 48.0 }
  ];


var coolCities = function(items) {

    var foundCoolCites = [];

    for(var i =0; i<items.length; i++) {
        var city = items[i];

        if(city.temperature < 70) {
            foundCoolCites .push(city.name);
        }
    }

    return foundCoolCites ;
}

var results = coolCities(cities);
console.log(results);

var results = coolCities(towns);
console.log(results);