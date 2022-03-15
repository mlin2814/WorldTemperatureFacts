import { cityArray } from './cityArray.js'

var fetchWeather = "/weather";

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const testtempElement = document.querySelector('.testtemperature span');

const testlocationElement = document.querySelector('.testplace');


// import cityArray  from './cityArray.js'
var cityArrayTest = cityArray[Math.floor(Math.random()*cityArray.length)];
console.log("City: " + cityArrayTest);


function locationText(locationType, convertTemp) {
    console.log(locationType);
    if (locationType == "user") {
        var userFile = new File([convertTemp], "Location1.txt", {type: "text/plain;charset=utf-8"});
        saveAs(userFile);
    }
    else if (locationType == "rand") {
        var randFile = new File([convertTemp], "Location2.txt", {type: "text/plain;charset=utf-8"});
        saveAs(randFile);
    }
}


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
                var userConvertTemp = (data.temperature * 1.8 - 459.67).toFixed(2);
                console.log(userConvertTemp);
                // var userFile = new File([userConvertTemp], "Location1.txt", {type: "text/plain;charset=utf-8"});
                // saveAs(userFile);
                locationText("user", userConvertTemp);
                
                document.getElementById('userfileInput').addEventListener('change', function selectedFileChanged() {
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function fileReadCompleted() {
                        console.log(reader.result);
                        var userTempC = reader.result;
                        tempElement.textContent = (data.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F / " + userTempC + String.fromCharCode(176) + "C";
                    };
                    reader.readAsText(this.files[0]);
                });

                const userLink = document.createElement("button");
                const userModal = document.getElementById("userModal");

                userLink.setAttribute("href", 'https://www.google.com/search?q=' + data.cityName);
                userLink.textContent = "Yes";
                userModal.appendChild(userLink);
            }
        }) 
    }),
    fetch(fetchWeather + "?address=" + cityArrayTest).then(response => {
        response.json().then(testdata => {
            if(testdata.error) {
                testlocationElement.textContent = testdata.error;
                testtempElement.textContent = "";
            } else {
                testlocationElement.textContent = testdata.cityName;
                // testtempElement.textContent = (testdata.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F";
                var randConvertTemp = (testdata.temperature * 1.8 - 459.67).toFixed(2);
                console.log(randConvertTemp);
                // var randFile = new File([randConvertTemp], "Location2.txt", {type: "text/plain;charset=utf-8"});
                // saveAs(randFile);
                locationText("rand", randConvertTemp);
                
                document.getElementById('randfileInput').addEventListener('change', function selectedFileChanged() {
                    // console.log(this.files); // will contain information about the file that was selected.
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                      }
                    
                      const reader = new FileReader();
                      reader.onload = function fileReadCompleted() {
                        // when the reader is done, the content is in reader.result.
                        console.log(reader.result);
                        var randTempC = reader.result;
                        testtempElement.textContent = (testdata.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F / " + randTempC + String.fromCharCode(176) +"C";
                      };
                      reader.readAsText(this.files[0]);
                });

                const randLink = document.createElement("button");
                const randModal = document.getElementById("randModal");

                randLink.setAttribute("href", 'https://www.google.com/search?q=' + testdata.cityName);
                randLink.textContent = "Yes";
                randModal.appendChild(randLink);
            }
                
        }) 
    })
})

