var fetchWeather = "/weather";

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const testtempElement = document.querySelector('.testtemperature span');

const testlocationElement = document.querySelector('.testplace');


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    const locationApi = fetchWeather + "?address=" + search.value + "&units=imperial";
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
            } else {
                locationElement.textContent = data.cityName;
                // tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
                // tempElement.textContent = (data.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F";
                userConvertTemp = (data.temperature * 1.8 - 459.67).toFixed(2);
                console.log(userConvertTemp);
                var userFile = new File([userConvertTemp], "Location1.txt", {type: "text/plain;charset=utf-8"});
                saveAs(userFile);
                
                document.getElementById('userfileInput').addEventListener('change', function selectedFileChanged() {
                    // console.log(this.files); // will contain information about the file that was selected.
                    if (this.files.length === 0) {
                        console.log('No file selected.');
                        return;
                      }
                    
                      const reader = new FileReader();
                      reader.onload = function fileReadCompleted() {
                        // when the reader is done, the content is in reader.result.
                        console.log(reader.result);
                        var userTempC = reader.result;
                        tempElement.textContent = (data.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F / " + userTempC + String.fromCharCode(176) + "C";
                      };
                      reader.readAsText(this.files[0]);
                });

                // const userSpan = document.createElement("span");
                const userLink = document.createElement("a");
                const userModal = document.getElementById("userModal");

                userLink.setAttribute("href", 'https://www.google.com/search?q=' + data.cityName);
                userLink.textContent = "Yes";
                userModal.appendChild(userLink);


            }
        }) 
    }),
    fetch(fetchWeather + "?address=London").then(response => {
        response.json().then(testdata => {
            if(testdata.error) {
                testlocationElement.textContent = testdata.error;
                testtempElement.textContent = "";
            } else {
                testlocationElement.textContent = testdata.cityName;
                // testtempElement.textContent = (testdata.temperature * 1.8 - 459.67).toFixed(2) + String.fromCharCode(176) + "F";
                randConvertTemp = (testdata.temperature * 1.8 - 459.67).toFixed(2);
                console.log(randConvertTemp);
                var randFile = new File([randConvertTemp], "Location2.txt", {type: "text/plain;charset=utf-8"});
                saveAs(randFile);
                
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

                const randLink = document.createElement("a");
                const randModal = document.getElementById("randModal");

                randLink.setAttribute("href", 'https://www.google.com/search?q=' + testdata.cityName);
                randLink.textContent = "Yes";
                randModal.appendChild(randLink);
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