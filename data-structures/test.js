weather_conditions = [
  {
    dayicon: "01d.png",
    nighticon: "01n.png",
    description: "clear sky",
    clothing: ""
  },
  {
    dayicon: "02d.png",
    nighticon: "02n.png ",
    description: "few clouds",
    clothing: ""
  },
  {
    dayicon: "03d.png",
    nighticon: "03n.png",
    description: "scattered clouds",
    clothing: ""
  },
  {
    dayicon: "04d.png",
    nighticon: "04n.png ",
    description: "broken clouds",
    clothing: ""
  },
  {
    dayicon: "09d.png",
    nighticon: "09n.png",
    description: "shower rain",
    clothing: ""
  },
  {
    dayicon: "0d.png",
    nighticon: "10n.png",
    description: "rain",
    clothing: ""
  },
  {
    dayicon: "11d.png",
    nighticon: "	11n.png",
    description: "thunderstorm",
    clothing: ""
  },
  {
    dayicon: "13d.png",
    nighticon: "13n.png",
    description: "snow",
    clothing: ""
  },
  {
    dayicon: "50d.png",
    nighticon: "50n.png",
    description: "mist",
    clothing: ""
  }
];

let juan = weather_conditions.filter(item => item.dayicon === "13d.png");
let juan2 = weather_conditions.find(item => item.dayicon === "13d.png");
console.log(juan);
console.log(juan2);
