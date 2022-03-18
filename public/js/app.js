// Array of Random Cities
import { cityArray } from './cityArray.js'

var fetchWeather = "/weather";

// Document Elements to interact with
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const tempElement = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const randtempElement = document.querySelector('.randtemperature span');
const randlocationElement = document.querySelector('.randplace');


// Choosing the random city
var cityArrayTest = cityArray[Math.floor(Math.random()*cityArray.length)];

/*
Saving Imperial temperature document
This function will take the imperial temperature and prompt the user to save a text file
*/
function locationText(locationType, convertTemp) {
    if (locationType == "user") {
        var userFile = new File([convertTemp], "Location1.txt", {type: "text/plain;charset=utf-8"});
        saveAs(userFile);
    }
    else if (locationType == "rand") {
        var randFile = new File([convertTemp], "Location2.txt", {type: "text/plain;charset=utf-8"});
        saveAs(randFile);
    }
}

// Weather Form
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    
    const locationApi = fetchWeather + "?address=" + search.value;

    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
            } else {
                locationElement.textContent = data.cityName;
                // Converting temperature from Kelvin to Imperial
                var userConvertTemp = (data.temperature * 1.8 - 459.67).toFixed(2);

                locationText("user", userConvertTemp);
                
                document.getElementById('userfileInput').addEventListener('change', function selectedFileChanged() {
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                    }
                    
                    /*
                    Read metric temperature from file
                    then place the temps into page
                    */
                    const reader = new FileReader();
                    reader.onload = function fileReadCompleted() {
                        var userTempC = reader.result;
                        tempElement.textContent = userConvertTemp + String.fromCharCode(176) + "F / " 
                        + userTempC + String.fromCharCode(176) + "C";
                    };
                    reader.readAsText(this.files[0]);
                });

                const userLink = document.createElement("a");
                const userModal = document.getElementById("userModal");
                
                // Link for 'Learn More' modal
                userLink.setAttribute("href", 'https://www.google.com/search?q=' + data.cityName);
                userLink.textContent = "Yes";
                userModal.appendChild(userLink);
            }
        }) 
    }),
    fetch(fetchWeather + "?address=" + cityArrayTest).then(response => {
        response.json().then(randdata => {
            if(randdata.error) {
                randlocationElement.textContent = randdata.error;
                randtempElement.textContent = "";
            } else {
                randlocationElement.textContent = randdata.cityName;
                var randConvertTemp = (randdata.temperature * 1.8 - 459.67).toFixed(2);

                locationText("rand", randConvertTemp);
                
                document.getElementById('randfileInput').addEventListener('change', function selectedFileChanged() {
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                      }
                    
                      const reader = new FileReader();
                      reader.onload = function fileReadCompleted() {
                        var randTempC = reader.result;
                        randtempElement.textContent = randConvertTemp + String.fromCharCode(176) + "F / " 
                        + randTempC + String.fromCharCode(176) +"C";
                      };
                      reader.readAsText(this.files[0]);
                });

                const randLink = document.createElement("a");
                const randModal = document.getElementById("randModal");

                randLink.setAttribute("href", 'https://www.google.com/search?q=' + randdata.cityName);
                randLink.textContent = "Yes";
                randModal.appendChild(randLink);
            }
                
        }) 
    })
})

