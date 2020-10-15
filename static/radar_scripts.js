// Create an event listener for the radar graph update button click
document.getElementById("update_radar").addEventListener("click",update_radar);

// Create the JS to generate the radar graph

//const update_radar = () => {
function update_radar() {

    // Get year from dropdown selector
    let e = document.getElementById("year_selector");
    let year = e.options[e.selectedIndex].text;
    //console.log(year);

    // Call MONGODB API with the year using fetch command
    fetch(`/api?year=${year}`)
    //.then(response => response.json())
    .then(data => console.log(data));
    

    // Problem with JS attempts to decode the reply from MongoDB XXXXXXX

    
    // Read response from API


    // Update/display the graph

}

