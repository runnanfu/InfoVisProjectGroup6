// Start code Laurens Aarnoudse
//Imports from D3 and function imports from other files
import { select, json, geoPath, geoMercator, zoom } from 'd3'
import { feature } from 'topojson'
import { transformData } from '/transform.js'
import { cleanData } from '/clean.js'
import { getCities } from '/getCities.js'

//Global constants
const endpointGeoPoints = 'https://opendata.rdw.nl/resource/nsk3-v9n7.json?$limit=6100';
const endpointCities = 'https://geocode.search.hereapi.com/v1/geocode?apiKey=F459fGwOAUSFJqNdpwl6CKSRvm4R1kCWWZJwnIjRi68&q=';
const colomnName = 'areageometryastext';
const svg = d3.select('svg')
const resetButton = d3.select('.reset')
const changeButtonOne = d3.select('.changeOne')
const changeButtonTwo = d3.select('.changeTwo')
const changeButtonThree = d3.select('.changeThree')
const citiesArray = ["Amsterdam"]
// const citiesArray = [ "Amsterdam" , "Rotterdam", "DenHaag", "Urecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", 
//                 "Enschede", "Apeldoorn", "Haarlem", "Amersfoort", "Zaanstad", "Arnhem", "Haarlemmermeer", "DenBosch", "Zoetermeer", 
//                 "Zwolle", "Maastricht", "Leiden", "Dordrecht", "Ede", "Emmen", "Westland", "Venlo" ]

//"Master" function that makes everything happen
getData(endpointGeoPoints)
  .then((parkingDataResponse) => {
    return parkingDataResponse.json()
  })
  .then((parkingData) => {
    const transformedArray = transformData(parkingData)
  	const geoPointsArray = cleanData(transformedArray, colomnName)
  	console.log(geoPointsArray)
  	
  
    drawMap(geoPointsArray);
    
//Most used areamanagerid are 363, 518, 2448
  		changeButtonOne
      	.text('Area Manager 363')
  			.on('click', updateAreaManager(geoPointsArray, 363))
  
  		changeButtonTwo
      	.text('Area Manager 518')
  			.on('click', updateAreaManager(geoPointsArray, 518))
  
  		changeButtonThree
      	.text('Area Manager 2448')
  			.on('click', updateAreaManager(geoPointsArray, 2448))

  })

console.log(citiesArray)
const cities = getCities(citiesArray, endpointCities)
console.log(cities)
cities.then(result => {
  result.json()
})
.then(data => console.log(data))

// cities.then(result => {
//   console.log(result)
// }

//Fetches the data from the url
function getData(url) {
  return fetch(url)
}

//Draws map and points on map
function drawMap(geoData) {

  const zoom = d3.zoom()
   .scaleExtent([1, 8])
   .on('zoom',  (e) => {
       g.attr('transform', e.transform)
   });
  const g = svg.append('g')
  
//Code adapted from sreen020
// ------------------------------------------------------------------------------------
  const projection = geoMercator().scale(5100).center([5.116667, 52.17])
  const pathGenerator = geoPath().projection(projection)

//Gets topojson from url and draws the paths of the townships with it
  json('https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson').then(
    (data) => {
      const townships = feature(data, data.objects.gemeente_2020)
      
      g
        .selectAll('path')
        .data(townships.features)
        .enter().append('path')
        	.attr('d', pathGenerator)
        .append('title')
        .text((d) => `${d.properties.statnaam}`)
      	
// ------------------------------------------------------------------------------------
      
// Plots the dots on the map for the 25 largest cities
      
      // g
      // 	.selectAll('g')
      // 	.data(cityData)
      // 	.enter().append('circle')
      //     .attr('cx', function(d){
      //       const long = d.longitude
      //       const lat = d.latitude
      //       return projection([+long, +lat])[0]  
      //     })
      //     .attr('cy', function(d){
      //       const long = d.longitude
      //       const lat = d.latitude
      //       return projection([+long, +lat])[1]
      //     })
      // 		.attr('r', '1.5px')
      
//Sources: https://www.youtube.com/watch?v=MTR2T5VyxMc, https://www.youtube.com/watch?v=hrJ64jpYb0Aand and help from Gijs Laarman    
//Plots the dots on the map using the long and lat from the cleaned dataset
      g
      	.selectAll('g')
      	.data(geoData)
      	.enter().append('circle')
          .attr('cx', function(d){
            const long = d.longitude
            const lat = d.latitude
            return projection([+long, +lat])[0]  
          })
          .attr('cy', function(d){
            const long = d.longitude
            const lat = d.latitude
            return projection([+long, +lat])[1]
          })
      		.attr('r', '0.7px')
      
  })
  		
  		svg.call(zoom)
  
  //Handels the reset button 
  // source: https://stackoverflow.com/questions/53056320/html-d3-js-how-to-zoom-from-the-mouse-cursor-rather-than-top-left-corner
  		resetButton
      	.attr('cursor', 'pointer')
      	.text('Reset Zoom')
      	.on('click', function(){
        	g.transition()
      			.duration(750)
      		.call(zoom.transform, d3.zoomIdentity)
      	})
  
}
//Update function that isn't working 
function updateAreaManager(dataArray, searchTerm){
  	 	const selectedKeys = dataArray.filter(item => item.areamanagerid == searchTerm) 		
  			const circles = svg.selectAll('circle')
  			circles
        	.data(selectedKeys)
  				.attr('fill', 'red')
  				.attr('r', '2px')
}