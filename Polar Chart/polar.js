var year2015 = [

        Danceability = {
    
        Country: 0.5998359375,
        Electronic: 0.598,
        Folk: 0.255,
        Others: 0.964,
        Pop: 0.6258234443,
        RB: 0.7000684932,
        Rap: 0.7136255924,
        Rock: 0.5372895928
        },
        Liveness = {
            Country: 0.1473526042,
            Electronic: 0.158,
            Folk: 0.201,
            Others: 0.2415,
            Pop: 0.1796782923,
            RB: 0.1102684932,
            Rap: 0.1890376777,
            Rock: 0.2201167421
        },
    
        Loudness = {
            Country: -4.94134375,
            Electronic: -4.043,
            Folk: -17.969,
            Others: -6.241,
            Pop: -6.1354746744,
            RB: -7.2048082192,
            Rap: -6.9687298578,
           Rock: -5.9073167421,
        },   
    
        Tempo = {
             Country: 123.4316953125,
             Electronic: 97.479,
             Folk: 94.26,
             Others: 129.9965,
             Pop: 133.6741259045,
             RB: 107.0765890411,
             Rap: 129.6363483412,
             Rock: 139.0212352941
        },

        Valence = {
         Country: 0.5965,
         Electronic: 0.732,
         Folk: 0.109,
         Others: 0.6485,
         Pop: 0.5434280753,
         RB: 0.407260274,
         Rap: 0.4518616114,
         Rock: 0.5085972851
        }
    
    ]




console.log(year2015.Valence.Rock);

// var data = [
//     {
//       type: "scatterpolar",
//       name: "Rock",
//       r: [5, 4, 2, 4, 5, 1, 2],
//       theta: ["Danceability", "Energy", "Liveness", "Loudness", "Popularity", "Tempo", "Valence"],
//       fill: "toself"
//     },
//     {
//       type: "scatterpolar",
//       name: "radial categories",
//       r: ["a", "b", "c", "d", "b", "f", "a"],
//       theta: [1, 4, 2, 1.5, 1.5, 6, 5],
//       thetaunit: "radians",
//       fill: "toself",
//       subplot: "polar2"
//     },
//     {
//       type: "scatterpolar",
//       name: "angular categories (w/ categoryarray)",
//       r: [5, 4, 2, 4, 5],
//       theta: ["a", "b", "c", "d", "a"],
//       fill: "toself",
//       subplot: "polar3"
//     },
//     {
//       type: "scatterpolar",
//       name: "radial categories (w/ category descending)",
//       r: ["a", "b", "c", "d", "b", "f", "a", "a"],
//       theta: [45, 90, 180, 200, 300, 15, 20, 45],
//       fill: "toself",
//       subplot: "polar4"
//     },
//     {
//       type: "scatterpolar",
//       name: "Pop",
//       r: [5, 4, 2, 4, 5, 5, 7],
//       theta: ["Danceability", "Energy", "Liveness", "Loudness", "Popularity", "Tempo", "Valence"],
//       fill: "toself"
//     }
//   ]

// var layout = {
//     polar: {
//       domain: {
//         x: [0, 0.46],
//         y: [0.56, 1]
//       },
//       radialaxis: {
//         angle: 45
//       },
//       angularaxis: {
//         direction: "clockwise",
//         period: 6
//       }
//     },
//     polar2: {
//       domain: {
//         x: [0, 0.46],
//         y: [0, 0.44]
//       },
//       radialaxis: {
//         angle: 180,
//         tickangle: -180
//       }
//     },
//     polar3: {
//       domain: {
//         x: [0.54, 1],
//         y: [0.56, 1]
//       },
//       sector: [150, 400],
//       radialaxis: {
//         angle: -45
//       },
//       angularaxis: {
//         categoryarray: ["d", "a", "c", "b"]
//       }
//     },
//     polar4: {
//       domain: {
//         x: [0.54, 1],
//         y: [0, 0.44]
//       },
//       radialaxis: {
//         categoryorder: "category descending"
//       },
//       angularaxis: {
//         thetaunit: "radians",
//         dtick: 0.3141592653589793
//       }
//     }
//   }

// Plotly.newPlot('myDiv', data, layout)
