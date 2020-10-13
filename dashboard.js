// JavaScript Code for Chart 1: Bar Chart Race

// Code for Chart 2: TreeMap

//DOCTYPE html>
<meta charset="utf-8">

//-- Load d3.js -->

<script src="https://d3js.org/d3.v4.js"></script>

d3.csv("new_merged_df.csv").then(function(tvData) {
    console.log(tvData);

// log a list of names
var Artists = tvData.map(data => data.name);
console.log("Artists", Artists);



// Code for Chart 3: Zoomable SunBurst
