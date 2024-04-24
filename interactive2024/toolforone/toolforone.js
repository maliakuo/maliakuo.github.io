const compassCircle = document.querySelector(".compass-circle");
const myPoint = document.querySelector(".my-point");
const startBtn = document.querySelector(".start-btn");

const isIOS =
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/);

function init() {
  startBtn.addEventListener("click", startCompass);
  // startCompass();
  navigator.geolocation.getCurrentPosition(locationHandler);

  if (!isIOS) {
    window.addEventListener("deviceorientationabsolute", handler, true);
  }
}

function startCompass() {
  if (isIOS) {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handler, true);
        } else {
          alert("has to be allowed!");
        }
      })
      .catch(() => alert("not supported"));
  }
}

function handler(e) {
  compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

  // ±15 degree
  if (
    (pointDegree < Math.abs(compass) &&
      pointDegree + 15 > Math.abs(compass)) ||
    pointDegree > Math.abs(compass + 15) ||
    pointDegree < Math.abs(compass)
  ) {
    myPoint.style.opacity = 0;
  } else if (pointDegree) {
    myPoint.style.opacity = 1;
  }
}

let pointDegree;

let longitude;
let latitude;

function locationHandler(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  // const { latitude, longitude } = position.coords;
  pointDegree = calcDegreeToPoint(latitude, longitude, 41.309260, -72.923250);

  if (pointDegree < 0) {
    pointDegree = pointDegree + 360;
  }
}

function calcDegreeToPoint(latitude, longitude, dest_lat, dest_long) {
  // 227 church st location
  const point = {
    lat: dest_lat,
    lng: dest_long
  };

  const phiK = (point.lat * Math.PI) / 180.0;
  const lambdaK = (point.lng * Math.PI) / 180.0;
  const phi = (latitude * Math.PI) / 180.0;
  const lambda = (longitude * Math.PI) / 180.0;
  const psi =
    (180.0 / Math.PI) *
    Math.atan2(
    Math.sin(lambdaK - lambda),
    Math.cos(phi) * Math.tan(phiK) -
    Math.sin(phi) * Math.cos(lambdaK - lambda)
    );
  return Math.round(psi);
}

let form = document.forms['address_select'];
let menu = form.addresses;
let addresses = form.addresses.options;

menu.onchange = function() {
  let optionValue = this.value;
  switch(optionValue) {
    case "japan":
      pointDegree = calcDegreeToPoint(latitude, longitude, 42.76308, 141.77158);
      console.log("eli");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
    case "ky1":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 38.166490, -84.233330);
      console.log("ky1");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
    case "ky2":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 38.15528, -84.45570);
      console.log("ky2");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
    case "anguilla":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 18.184936, -63.135627);
      console.log("anguilla");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;

    case "jordan":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 31.751629, 35.846775);
      console.log("jordan");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;

    case "cali":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 34.066167, -118.394131);
      console.log("cali");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
    case "eli":
      pointDegree = calcDegreeToPoint(latitude, longitude, 41.309260, -72.923250);
      console.log("eli");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
    case "la":
      // locationHandler(position, 38.166490, -84.233330);
      pointDegree = calcDegreeToPoint(latitude, longitude, 34.068314, -118.426081);
      console.log("la");
      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
      console.log(pointDegree);
      break;
  }
}



init();