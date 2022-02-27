var fetchWeather = "/weather";
// const fs = require('fs');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

// const weatherIcon = document.querySelector('.weatherIcon i');

// const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

// const testweatherIcon = document.querySelector('.testweatherIcon i');
// const testweatherCondition = document.querySelector('.testweatherCondition');

const testtempElement = document.querySelector('.testtemperature span');

const testlocationElement = document.querySelector('.testplace');

// const dateElement = document.querySelector('.date');

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    // weatherCondition.textContent = "";
    const locationApi = fetchWeather + "?address=" + search.value + "&units=imperial";
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                // weatherCondition.textContent = "";
            } else {
                // console.log()
                // if(data.description === "rain" || data.description === "fog") {
                //     weatherIcon.className = "wi wi-day-" + data.description
                // } else {
                //     weatherIcon.className = "wi wi-day-cloudy"
                // }
                locationElement.textContent = "Your Location: " + data.cityName;
                // tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
                tempElement.textContent = (data.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F";
                userConvertTemp = (data.temperature * 1.8 - 459.67).toFixed(2);
                console.log(userConvertTemp);
                // fs.writeFile('Location1.txt', userConvertTemp, (err) => {
                //     if (err) {
                //         throw err;
                //     }
                // })
                var myFile = new File([userConvertTemp], "Location1.txt", {type: "text/plain;charset=utf-8"});
                saveAs(myFile);

                // fs.readFile('Location1.txt', function (err, data) {
                //     if (err) {
                //        return console.error(err);
                //     }
                //     console.log("Asynchronous read: " + data.toString());
                // })
                document.getElementById('fileInput').addEventListener('change', function selectedFileChanged() {
                    // console.log(this.files); // will contain information about the file that was selected.
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                      }
                    
                      const reader = new FileReader();
                      reader.onload = function fileReadCompleted() {
                        // when the reader is done, the content is in reader.result.
                        console.log(reader.result);
                      };
                      reader.readAsText(this.files[0]);
                });


                // weatherCondition.textContent = data.description.toUpperCase();
            }
        }) 
    }),
    fetch(fetchWeather + "?address=London").then(response => {
        response.json().then(testdata => {
            if(testdata.error) {
                testlocationElement.textContent = testdata.error;
                testtempElement.textContent = "";
                // testweatherCondition.textContent = "";
            } else {
                // console.log()
                // if(testdata.description === "rain" || testdata.description === "fog") {
                //     testweatherIcon.className = "wi wi-day-" + testdata.description
                // } else {
                //     testweatherIcon.className = "wi wi-day-cloudy"
                // }
                testlocationElement.textContent = "Random Location: " + testdata.cityName;
                testtempElement.textContent = (testdata.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F";
                // testweatherCondition.textContent = testdata.description.toUpperCase();
            }
        }) 
    })
})

// var videoModal = document.getElementById("vidTutModal");
// var vidModalButton = document.getElementById("vidTutorial");
// var span = document.getElementsByClassName("close")[0];
// vidModalButton.onclick = function() {
//     videoModal.style.display = "block";
// }

// span.onclick = function() {
//     videoModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == videoModal) {
//         videoModal.style.display = "none";
//     }
// }

// // Get the modal
// var userLearnModal = document.getElementById("userLearnModal");
// // Get the button that opens the modal
// var userLeanrBtn = document.getElementById("userLearnButton");
// // Get the <span> element that closes the modal
// var userSpan = document.getElementsByClassName("close")[1];
// // When the user clicks the button, open the modal 
// userLeanrBtn.onclick = function() {
//     userLearnModal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// userSpan.onclick = function() {
//     userLearnModal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == userLearnModal) {
//     userLearnModal.style.display = "none";
//   }
// }

// // Get the modal
// var randLearnModal = document.getElementById("randLearnModal");
// // Get the button that opens the modal
// var randLeanrBtn = document.getElementById("randLearnButton");
// // Get the <span> element that closes the modal
// var randSpan = document.getElementsByClassName("close")[2];
// // When the user clicks the button, open the modal 
// randLeanrBtn.onclick = function() {
//     randLearnModal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// randSpan.onclick = function() {
//     randLearnModal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == randLearnModal) {
//     randLearnModal.style.display = "none";
//   }
// }