// JavaScript Code for Chart 1: Bar Chart Race

// Code for Chart 2: TreeMap

//DOCTYPE html>
<meta charset="utf-8">

//-- Load d3.js -->

<script src="https://d3js.org/d3.v4.js"></script>

// Load data from hours-of-tv-watched.csv
d3.csv("new_merged_df.csv").then(function(music_data) {

    console.log(music_data);
  
    // log a list of names
    var artists = music_data.map(music_data => data.name);
    console.log("Artists", artists);
  
    // Cast each hours value in tvData as a number using the unary + operator
    music_data.forEach(function(music_data) {
      data.name = +data.name;
      console.log("Artists:", data.artists);
      console.log("Name:", data.name);
    });
  }).catch(function(error) {
    console.log(error);
  });
  



// Code for Chart 3: Zoomable SunBurst
