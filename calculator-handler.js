
// const startDestinationContainer = document.querySelector('.start-destination');
// const startSelect = document.querySelector('.dropdown-options');


// startDestinationContainer.addEventListener('click', () => {
    
//     if (startSelect.hidden === false){
//         startSelect.hidden = true;
//     } else{
//         startSelect.hidden = false;
//     }
   
//     console.log("unhidden");
   
// });

const startDestinationContainer = document.getElementById("trigger-div")
const startDestinationText = document.getElementById("");
const selectElement = document.getElementById("hidden-select");

startDestinationContainer.addEventListener('mousedown', function() {

        startDestinationContainer.style.border = "1px solid purple";
        startDestinationText.innerText =  selectElement.value;
});