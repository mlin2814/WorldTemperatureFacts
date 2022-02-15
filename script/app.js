let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');

let userLocationName = document.querySelector('.userLocationName');
let userLocationTemp = document.querySelector('.userLocationTempFahrenheit');
let userLocationTempC = document.querySelector('.userLocationTempCelsius');
let userLocationInfo = document.querySelector('.userInfoSection');
// let userLearnMore = document.querySelector('.userLearnMore');


let randLocationName = document.querySelector('.randLocationName');
let randLocationTemp = document.querySelector('.randLocationTempFahrenheit');
let randLocationTempC = document.querySelector('.randLocationTempCelsius');
let randLocationInfo = document.querySelector('.randInfoSection');
// let randLearnMore = document.querySelector('.randLearnMore');

// let ulist = document.createElement("ul");
let rlist = document.createElement("ul");

const myKey = "ce511346877247bb549233d925546cbe";

var videoModal = document.getElementById("vidTutModal");
var vidModalButton = document.getElementById("vidTutorial");
var span = document.getElementsByClassName("close")[0];
vidModalButton.onclick = function() {
    videoModal.style.display = "block";
}

span.onclick = function() {
    videoModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == videoModal) {
        videoModal.style.display = "none";
    }
}

// var userModal = document.getElementById("userLearnMoreContent");
// var userModalButton = document.getElementById("userLearnButton");
// var userSpan = document.getElementsByClassName("close")[1];
// userModalButton.onclick = function() {
//     userModal.style.display = "block";
// }

// userSpan.onclick = function() {
//     userModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == userModal) {
//         userModal.style.display = "none";
//     }
// }
// Get the modal
var userLearnModal = document.getElementById("userLearnModal");
// Get the button that opens the modal
var userLeanrBtn = document.getElementById("userLearnButton");
// Get the <span> element that closes the modal
var userSpan = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
userLeanrBtn.onclick = function() {
    userLearnModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
userSpan.onclick = function() {
    userLearnModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == userLearnModal) {
    userLearnModal.style.display = "none";
  }
}

// Get the modal
var randLearnModal = document.getElementById("randLearnModal");
// Get the button that opens the modal
var randLeanrBtn = document.getElementById("randLearnButton");
// Get the <span> element that closes the modal
var randSpan = document.getElementsByClassName("close")[2];
// When the user clicks the button, open the modal 
randLeanrBtn.onclick = function() {
    randLearnModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
randSpan.onclick = function() {
    randLearnModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == randLearnModal) {
    randLearnModal.style.display = "none";
  }
}

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+myKey+'&units=imperial')
.then(response => response.json())
// .then(data => console.log(data))
.then(data => {
    let userLocationNameValue = data['name'];
    let userLocationTempValue = data['main']['temp'];
    let ulistBullet = document.createElement("li");

    ulistBullet.textContent = "User Location Fact";

    userLocationName.innerHTML = "User Location: " + userLocationNameValue;
    userLocationTemp.innerHTML = userLocationTempValue+" F";
    userLocationTempC.innerHTML = "Dummy Data: 10 C";
    userLocationInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    // userLearnMore.innerHTML = "<button id='userLearnMoreButton'>Learn More</button><div id='userLearnMoreModalDiv'></div>"

    // var userModal = document.getElementById("userLearnMoreModalDiv");
    // var userModalButton = document.getElementById("userLearnMoreButton");
    // var userSpan = document.getElementsByClassName("close")[0];
    // let userLearnMoreModalDiv = document.getElementById('userLearnMoreModalDiv');

    // userModalButton.onclick = function() {
        
    //     userLearnMoreModalDiv.innerHTML = "<div class='modal-header'><h2>Leaving Page</h2></div><div class='modal-body'><p>Do you want to navigate away from this page?</p><a href=https://www.google.com id='userLearnMore'>Yes</a><span class='close'>&times;</span></div>"
    //     userModal.style.display = "block";
    // }

    // userSpan.onclick = function() {
    //     userModal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //     if (event.target == userModal) {
    //         userModal.style.display = "none";
    //     }
    // }
    // let userLearnMoreModalDiv = document.getElementById('userLearnMoreModalDiv');
    // userLearnMoreModalDiv.innerHTML = "<div class='modal-header'><h2>Leaving Page</h2></div><div class='modal-body'><p>Do you want to navigate away from this page?</p><a href=https://www.google.com id='userLearnMore'>Yes</a><span class='close'>No</span></div>"
    
    // ulist.appendChild(ulistBullet);
    // userLocationInfo.appendChild(ulist);

})
.catch(err => alert("Something's wrong"),
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+myKey+'&units=imperial')
.then(response => response.json())
// .then(data => console.log(data))
.then(randData => {
    let randLocationNameValue = randData['name'];
    let randLocationTempValue = randData['main']['temp'];
    let rlistBullet = document.createElement("li");

    rlistBullet.textContent = "Random Location Fact";

    randLocationName.innerHTML = "Random Location: " + randLocationNameValue;
    randLocationTemp.innerHTML = randLocationTempValue+" F";
    randLocationTempC.innerHTML = "Dummy Data: 10 C";
    randLocationInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // randLearnMore.innerHTML = "<a href=https://www.google.com>Learn More</a>"
    // rlist.appendChild(rlistBullet);
    // randLocationInfo.appendChild(rlist);
})
.catch(err => alert("Something's wrong"))
)
})




// var userModal = document.getElementById("userLearnMoreModalDiv");
// var userModalButton = document.getElementById("userLearnMoreButton");
// var userSpan = document.getElementsByClassName("close")[0];
// let userLearnMoreModalDiv = document.getElementById('userLearnMoreModalDiv');

// userModalButton.onclick = function() {
    
//     userLearnMoreModalDiv.innerHTML = "<div class='modal-header'><h2>Leaving Page</h2></div><div class='modal-body'><p>Do you want to navigate away from this page?</p><a href=https://www.google.com id='userLearnMore'>Yes</a><span class='close'>No</span></div>"
//     userModal.style.display = "block";
// }

// userSpan.onclick = function() {
//     userModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == userModal) {
//         userModal.style.display = "none";
//     }
// }

{/* <a href=https://www.google.com id='userLearnMore'>Learn More</a> */}