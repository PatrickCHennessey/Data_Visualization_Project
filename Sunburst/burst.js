//d3.select("plot")
var width = 960;
var height = 700;
var radius =Math.min(width, height) / 2;

var x = d3.scale.linear()
  .range([0, 2 * Math.PI]);

var y = d3.scale.sqrt()
  .range([0, radius]);

var color = d3.scale.category20c();

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g")
  .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

var partition = d3.layout.partition()
  .sort(null)
  .value(function(d) { return 1; });

var arc = d3.svg.arc()
  .startAngle(function(d) {return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
  .endAngle(function(d) {return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
  .innerRadius(function(d) {return Math.max(0, Math.max(0, y(d.y))); })
  .outerRadius(function(d) {return Math.max(0, Math.max(0, y(d.y + d.dy))); });
 
 
  //function unpack(rows, key) {
  //return rows.map(function(row) {
   // return row[key]
//  })
//}
 
//function buildPlot() {
  d3.json("/new_merged_df.json", function(error, root) {
    node = root;

    var path = svg.datum(root).selectAll("path")
      .data(partition.nodes)
    .enter().append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color((d.children ? d : d.parent).name);})
      .on("click", click)
      .each(stash);
  });

d3.selectAll("input").on("change", function change() {
  var value = this.value === "count"
    ? function() {return 1; }
    : function(d) {return d.size; };

    path
      .data(partition.value(value).nodes)
    .transition()
      .duration(1000)
      .attrTween("d", arcTweenData);
});
  
d3.select(self.frameElement).style("height", height + "px");

function stash(d) {
  d.x0 = d.x;
  d.dx0 = d.dx;
}

function arcTweenData(a, i) {
  var oi = d3.interpolate({x: a.x0, dx: a.dx0}, a);
  function tween(t) {
    var b = oi(t);
    a.x0 = b.x;
    a.dx0 = b.dx;
    return arc(d);
  }
}

if (i==0) {
  var xd = d3.interpolate(x.domain(), [node.x + node.dx]);
    return function(t) {
     x.domain(xd(t));
     return tween(t);  
  };
} else {
  return tween;
} 

function arcTweenZoom(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, 1]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d,i) {
    return i
      ? function(t) {return arc(d); }
      : function(t) {x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
};


    //.then(function(data) {
       // return console.log(data)
     /// });

// var name = data.name;
// var artist = data.artists;
// var genre = data.top_genre;
// var peak = data.peak_position;


// var trace = {
//   type: "sunburst",
//   maxdepth: 2,
//   ids: unpack(rows, 'ids'),
//   labels: unpack(rows, 'labels'),
//   parents: unpack(rows, 'parents'),
//   textposition: 'inside',
//   insidetextorientation: 'radial'
// };

// var data = [trace];

// var layout = {
//   margin: {l:10, r: 10, b: 10, t:10},
//   width: 500,
//   height: 500,
//   sunburstcolorway:[
//      "#636efa","#ef553b","#00cc96",
//      "#e763fa", "#FECB52","#FFA15A",   
//     ],
//   extendsunburstcolorway: true
// };

    
// Plotly.newPlot("plot", data, layout);



// buildPlot()