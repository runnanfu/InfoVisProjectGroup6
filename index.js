
// =================
// Data for the entire country
// =================
var whichyear = 2019;
  
console.log(whichyear);
draw(whichyear);

var slider = d3.select('#year');
slider.on('change', function() {
  // draw(this.value);
  var whichyear = this.value;
  d3.selectAll("svg").remove();
  draw(whichyear);
  console.log(whichyear);
});

function draw(whichyear) {
    
  // Population Data for Netherlands as a whole (I could not get this data to merge into the geojson file for some reason)
    var country_data = '{"2012": {"Type": {"TOTovernightaccommodation": {"GuestTot": 88655, "OvernightTot": 240508}, "Hotelboardinghouseyouthhostel": {"GuestTot": 59038, "OvernightTot": 104371}, "TOTLeisureaccommodation": {"GuestTot": 29618, "OvernightTot": 136132}, "Campsite": {"GuestTot": 9532, "OvernightTot": 48605}, "Holidaypark": {"GuestTot": 17001, "OvernightTot": 78926}, "Groupaccommodation": {"GuestTot": 3082, "OvernightTot": 8597}}, "Country": {"All": {"GuestTot": 79046, "OvernightTot": 242199}, "NL": {"GuestTot": 52153, "OvernightTot": 171315}, "Totalforeigncountries": {"GuestTot": 26891, "OvernightTot": 70883}, "EuropeexNL": {"GuestTot": 21946, "OvernightTot": 61863}, "Germany": {"GuestTot": 7947, "OvernightTot": 30539}, "Belgium": {"GuestTot": 3695, "OvernightTot": 10342}, "UnitedKingdom": {"GuestTot": 3411, "OvernightTot": 6812}, "France": {"GuestTot": 1412, "OvernightTot": 2931}, "SwitzerlandandLiechtenstein": {"GuestTot": 473, "OvernightTot": 1016}, "Italy": {"GuestTot": 940, "OvernightTot": 1942}, "Spain": {"GuestTot": 865, "OvernightTot": 1696}, "Denmark": {"GuestTot": 297, "OvernightTot": 642}, "Sweden": {"GuestTot": 292, "OvernightTot": 539}, "OtherEurozone": {"GuestTot": 954, "OvernightTot": 2131}, "OtherEUcountries": {"GuestTot": 1657, "OvernightTot": 3272}, "America": {"GuestTot": 2773, "OvernightTot": 4946}, "Asia": {"GuestTot": 1602, "OvernightTot": 2924}, "AustraliaandOceania": {"GuestTot": 343, "OvernightTot": 692}, "Africa": {"GuestTot": 229, "OvernightTot": 455}}}, "2013": {"Type": {"TOTovernightaccommodation": {"GuestTot": 91171, "OvernightTot": 251134}, "Hotelboardinghouseyouthhostel": {"GuestTot": 60606, "OvernightTot": 107064}, "TOTLeisureaccommodation": {"GuestTot": 30565, "OvernightTot": 144069}, "Campsite": {"GuestTot": 9521, "OvernightTot": 49469}, "Holidaypark": {"GuestTot": 18183, "OvernightTot": 86271}, "Groupaccommodation": {"GuestTot": 2861, "OvernightTot": 8322}}, "Country": {"All": {"GuestTot": 80629, "OvernightTot": 250831}, "NL": {"GuestTot": 52297, "OvernightTot": 173873}, "Totalforeigncountries": {"GuestTot": 28332, "OvernightTot": 76962}, "EuropeexNL": {"GuestTot": 23313, "OvernightTot": 67708}, "Germany": {"GuestTot": 8703, "OvernightTot": 34248}, "Belgium": {"GuestTot": 4046, "OvernightTot": 11587}, "UnitedKingdom": {"GuestTot": 3445, "OvernightTot": 6921}, "France": {"GuestTot": 1438, "OvernightTot": 2999}, "SwitzerlandandLiechtenstein": {"GuestTot": 487, "OvernightTot": 1083}, "Italy": {"GuestTot": 946, "OvernightTot": 1978}, "Spain": {"GuestTot": 800, "OvernightTot": 1575}, "Denmark": {"GuestTot": 302, "OvernightTot": 655}, "Sweden": {"GuestTot": 292, "OvernightTot": 574}, "OtherEurozone": {"GuestTot": 1039, "OvernightTot": 2418}, "OtherEUcountries": {"GuestTot": 1817, "OvernightTot": 3667}, "America": {"GuestTot": 2684, "OvernightTot": 4900}, "Asia": {"GuestTot": 1760, "OvernightTot": 3211}, "AustraliaandOceania": {"GuestTot": 333, "OvernightTot": 672}, "Africa": {"GuestTot": 244, "OvernightTot": 467}}}, "2014": {"Type": {"TOTovernightaccommodation": {"GuestTot": 96832, "OvernightTot": 263348}, "Hotelboardinghouseyouthhostel": {"GuestTot": 65498, "OvernightTot": 115236}, "TOTLeisureaccommodation": {"GuestTot": 31334, "OvernightTot": 148110}, "Campsite": {"GuestTot": 9636, "OvernightTot": 51147}, "Holidaypark": {"GuestTot": 18776, "OvernightTot": 88328}, "Groupaccommodation": {"GuestTot": 2921, "OvernightTot": 8627}}, "Country": {"All": {"GuestTot": 84447, "OvernightTot": 259391}, "NL": {"GuestTot": 53650, "OvernightTot": 176304}, "Totalforeigncountries": {"GuestTot": 30795, "OvernightTot": 83087}, "EuropeexNL": {"GuestTot": 25309, "OvernightTot": 72937}, "Germany": {"GuestTot": 9646, "OvernightTot": 37280}, "Belgium": {"GuestTot": 4392, "OvernightTot": 12366}, "UnitedKingdom": {"GuestTot": 3818, "OvernightTot": 7846}, "France": {"GuestTot": 1522, "OvernightTot": 3109}, "SwitzerlandandLiechtenstein": {"GuestTot": 532, "OvernightTot": 1185}, "Italy": {"GuestTot": 1027, "OvernightTot": 2116}, "Spain": {"GuestTot": 804, "OvernightTot": 1605}, "Denmark": {"GuestTot": 298, "OvernightTot": 655}, "Sweden": {"GuestTot": 289, "OvernightTot": 535}, "OtherEurozone": {"GuestTot": 1097, "OvernightTot": 2507}, "OtherEUcountries": {"GuestTot": 1884, "OvernightTot": 3723}, "America": {"GuestTot": 2871, "OvernightTot": 5237}, "Asia": {"GuestTot": 1964, "OvernightTot": 3634}, "AustraliaandOceania": {"GuestTot": 379, "OvernightTot": 750}, "Africa": {"GuestTot": 273, "OvernightTot": 529}}}, "2015": {"Type": {"TOTovernightaccommodation": {"GuestTot": 101693, "OvernightTot": 276189}, "Hotelboardinghouseyouthhostel": {"GuestTot": 68967, "OvernightTot": 121380}, "TOTLeisureaccommodation": {"GuestTot": 32730, "OvernightTot": 154807}, "Campsite": {"GuestTot": 9460, "OvernightTot": 50506}, "Holidaypark": {"GuestTot": 20286, "OvernightTot": 95501}, "Groupaccommodation": {"GuestTot": 2980, "OvernightTot": 8795}}, "Country": {"All": {"GuestTot": 87780, "OvernightTot": 268986}, "NL": {"GuestTot": 54523, "OvernightTot": 178800}, "Totalforeigncountries": {"GuestTot": 33256, "OvernightTot": 90185}, "EuropeexNL": {"GuestTot": 27301, "OvernightTot": 79027}, "Germany": {"GuestTot": 10637, "OvernightTot": 41000}, "Belgium": {"GuestTot": 4703, "OvernightTot": 13107}, "UnitedKingdom": {"GuestTot": 4046, "OvernightTot": 8454}, "France": {"GuestTot": 1580, "OvernightTot": 3251}, "SwitzerlandandLiechtenstein": {"GuestTot": 567, "OvernightTot": 1292}, "Italy": {"GuestTot": 1106, "OvernightTot": 2290}, "Spain": {"GuestTot": 875, "OvernightTot": 1727}, "Denmark": {"GuestTot": 329, "OvernightTot": 743}, "Sweden": {"GuestTot": 314, "OvernightTot": 580}, "OtherEurozone": {"GuestTot": 1188, "OvernightTot": 2714}, "OtherEUcountries": {"GuestTot": 1957, "OvernightTot": 3865}, "America": {"GuestTot": 3029, "OvernightTot": 5590}, "Asia": {"GuestTot": 2281, "OvernightTot": 4293}, "AustraliaandOceania": {"GuestTot": 382, "OvernightTot": 759}, "Africa": {"GuestTot": 262, "OvernightTot": 515}}}, "2016": {"Type": {"TOTovernightaccommodation": {"GuestTot": 106337, "OvernightTot": 285841}, "Hotelboardinghouseyouthhostel": {"GuestTot": 73295, "OvernightTot": 129958}, "TOTLeisureaccommodation": {"GuestTot": 33045, "OvernightTot": 155886}, "Campsite": {"GuestTot": 9544, "OvernightTot": 50846}, "Holidaypark": {"GuestTot": 20690, "OvernightTot": 97009}, "Groupaccommodation": {"GuestTot": 2809, "OvernightTot": 8020}}, "Country": {"All": {"GuestTot": 90891, "OvernightTot": 274048}, "NL": {"GuestTot": 55811, "OvernightTot": 178347}, "Totalforeigncountries": {"GuestTot": 35080, "OvernightTot": 95701}, "EuropeexNL": {"GuestTot": 28859, "OvernightTot": 83771}, "Germany": {"GuestTot": 11419, "OvernightTot": 43549}, "Belgium": {"GuestTot": 5079, "OvernightTot": 14006}, "UnitedKingdom": {"GuestTot": 4211, "OvernightTot": 8989}, "France": {"GuestTot": 1658, "OvernightTot": 3419}, "SwitzerlandandLiechtenstein": {"GuestTot": 553, "OvernightTot": 1254}, "Italy": {"GuestTot": 1074, "OvernightTot": 2276}, "Spain": {"GuestTot": 900, "OvernightTot": 1824}, "Denmark": {"GuestTot": 305, "OvernightTot": 673}, "Sweden": {"GuestTot": 318, "OvernightTot": 605}, "OtherEurozone": {"GuestTot": 1369, "OvernightTot": 3177}, "OtherEUcountries": {"GuestTot": 1973, "OvernightTot": 3993}, "America": {"GuestTot": 3302, "OvernightTot": 6048}, "Asia": {"GuestTot": 2236, "OvernightTot": 4495}, "AustraliaandOceania": {"GuestTot": 405, "OvernightTot": 819}, "Africa": {"GuestTot": 277, "OvernightTot": 566}}}, "2017": {"Type": {"TOTovernightaccommodation": {"GuestTot": 116543, "OvernightTot": 304762}, "Hotelboardinghouseyouthhostel": {"GuestTot": 81725, "OvernightTot": 143719}, "TOTLeisureaccommodation": {"GuestTot": 34820, "OvernightTot": 161043}, "Campsite": {"GuestTot": 9460, "OvernightTot": 49370}, "Holidaypark": {"GuestTot": 22208, "OvernightTot": 102870}, "Groupaccommodation": {"GuestTot": 3152, "OvernightTot": 8794}}, "Country": {"All": {"GuestTot": 98133, "OvernightTot": 286221}, "NL": {"GuestTot": 58512, "OvernightTot": 180057}, "Totalforeigncountries": {"GuestTot": 39620, "OvernightTot": 106164}, "EuropeexNL": {"GuestTot": 32028, "OvernightTot": 91957}, "Germany": {"GuestTot": 12966, "OvernightTot": 48457}, "Belgium": {"GuestTot": 5296, "OvernightTot": 14152}, "UnitedKingdom": {"GuestTot": 4580, "OvernightTot": 9766}, "France": {"GuestTot": 1763, "OvernightTot": 3561}, "SwitzerlandandLiechtenstein": {"GuestTot": 616, "OvernightTot": 1380}, "Italy": {"GuestTot": 1196, "OvernightTot": 2590}, "Spain": {"GuestTot": 945, "OvernightTot": 1953}, "Denmark": {"GuestTot": 342, "OvernightTot": 772}, "Sweden": {"GuestTot": 341, "OvernightTot": 648}, "OtherEurozone": {"GuestTot": 1617, "OvernightTot": 3852}, "OtherEUcountries": {"GuestTot": 2358, "OvernightTot": 4825}, "America": {"GuestTot": 4038, "OvernightTot": 7338}, "Asia": {"GuestTot": 2775, "OvernightTot": 5282}, "AustraliaandOceania": {"GuestTot": 475, "OvernightTot": 965}, "Africa": {"GuestTot": 307, "OvernightTot": 618}}}, "2018": {"Type": {"TOTovernightaccommodation": {"GuestTot": 121581, "OvernightTot": 318917}, "Hotelboardinghouseyouthhostel": {"GuestTot": 84880, "OvernightTot": 151946}, "TOTLeisureaccommodation": {"GuestTot": 36701, "OvernightTot": 166967}, "Campsite": {"GuestTot": 10433, "OvernightTot": 52040}, "Holidaypark": {"GuestTot": 22869, "OvernightTot": 105144}, "Groupaccommodation": {"GuestTot": 3399, "OvernightTot": 9783}}, "Country": {"All": {"GuestTot": 102091, "OvernightTot": 296635}, "NL": {"GuestTot": 60422, "OvernightTot": 183497}, "Totalforeigncountries": {"GuestTot": 41670, "OvernightTot": 113139}, "EuropeexNL": {"GuestTot": 34006, "OvernightTot": 98394}, "Germany": {"GuestTot": 14068, "OvernightTot": 52057}, "Belgium": {"GuestTot": 5703, "OvernightTot": 15082}, "UnitedKingdom": {"GuestTot": 4557, "OvernightTot": 9875}, "France": {"GuestTot": 1868, "OvernightTot": 3815}, "SwitzerlandandLiechtenstein": {"GuestTot": 643, "OvernightTot": 1439}, "Italy": {"GuestTot": 1215, "OvernightTot": 2687}, "Spain": {"GuestTot": 1007, "OvernightTot": 2155}, "Denmark": {"GuestTot": 340, "OvernightTot": 732}, "Sweden": {"GuestTot": 332, "OvernightTot": 639}, "OtherEurozone": {"GuestTot": 1795, "OvernightTot": 4763}, "OtherEUcountries": {"GuestTot": 2481, "OvernightTot": 5144}, "America": {"GuestTot": 4159, "OvernightTot": 7811}, "Asia": {"GuestTot": 2745, "OvernightTot": 5342}, "AustraliaandOceania": {"GuestTot": 443, "OvernightTot": 916}, "Africa": {"GuestTot": 318, "OvernightTot": 675}}}, "2019": {"Type": {"TOTovernightaccommodation": {"GuestTot": 128013, "OvernightTot": 342379}, "Hotelboardinghouseyouthhostel": {"GuestTot": 88139, "OvernightTot": 161338}, "TOTLeisureaccommodation": {"GuestTot": 39873, "OvernightTot": 181042}, "Campsite": {"GuestTot": 11146, "OvernightTot": 55536}, "Holidaypark": {"GuestTot": 25296, "OvernightTot": 115789}, "Groupaccommodation": {"GuestTot": 3434, "OvernightTot": 9708}}, "Country": {"All": {"GuestTot": 107180, "OvernightTot": 315926}, "NL": {"GuestTot": 62301, "OvernightTot": 190804}, "Totalforeigncountries": {"GuestTot": 44878, "OvernightTot": 125120}, "EuropeexNL": {"GuestTot": 36663, "OvernightTot": 108830}, "Germany": {"GuestTot": 15395, "OvernightTot": 58408}, "Belgium": {"GuestTot": 6020, "OvernightTot": 16228}, "UnitedKingdom": {"GuestTot": 4944, "OvernightTot": 10899}, "France": {"GuestTot": 2017, "OvernightTot": 4159}, "SwitzerlandandLiechtenstein": {"GuestTot": 639, "OvernightTot": 1502}, "Italy": {"GuestTot": 1265, "OvernightTot": 2833}, "Spain": {"GuestTot": 1077, "OvernightTot": 2302}, "Denmark": {"GuestTot": 351, "OvernightTot": 773}, "Sweden": {"GuestTot": 335, "OvernightTot": 670}, "OtherEurozone": {"GuestTot": 1913, "OvernightTot": 5326}, "OtherEUcountries": {"GuestTot": 2707, "OvernightTot": 5724}, "America": {"GuestTot": 4378, "OvernightTot": 8468}, "Asia": {"GuestTot": 2979, "OvernightTot": 5993}, "AustraliaandOceania": {"GuestTot": 480, "OvernightTot": 1014}, "Africa": {"GuestTot": 379, "OvernightTot": 813}}}}'
    // Parse above data so that it can be placed in the arrays below
    var country_values = JSON.parse(country_data);

    // Turn JSON data into flat array format, got technique from: https://stackoverflow.com/questions/30808384/d3-bar-chart-from-geojson
    
  // Types of Accommodation
  var totalvisitors = 
  {name:"Total overnight accommodation", value:country_values[whichyear]['Type']["TOTovernightaccommodation"]['GuestTot']};
  
  var country_data_acco = [
    // {name:"Total overnight accommodation", value:country_values[whichyear]['Type']["TOTovernightaccommodation"]['GuestTot']},
    {name:"Hotel&youth hostel", value:country_values[whichyear]['Type']["Hotelboardinghouseyouthhostel"]['GuestTot']},
    // {name:"Total leisure accommodation", value:country_values['2019']['Type']["TOTLeisureaccommodation"]['GuestTot']},
    {name:"Campsite", value:country_values[whichyear]['Type']["Campsite"]['GuestTot']},
    {name:"Holiday park", value:country_values[whichyear]['Type']["Holidaypark"]['GuestTot']},
    {name:"Group accommodation", value:country_values[whichyear]['Type']["Groupaccommodation"]['GuestTot']}
  ];

  // console.log(country_values[whichyear]['Country']["NL"]["GuestTot"]);

  var country_data_vis = [
    {name:"the Netherlands", value:country_values['2019']['Country']["NL"]["GuestTot"]},
  {name:"Germany", value:country_values[whichyear]['Country']["Germany"]["GuestTot"]},
  {name:"Belgium", value:country_values[whichyear]['Country']["Belgium"]["GuestTot"]},
  {name:"United Kingdom", value:country_values[whichyear]['Country']["UnitedKingdom"]["GuestTot"]},
  {name:"France", value:country_values[whichyear]['Country']["France"]["GuestTot"]},
  {name:"Switzerland and Liechtenstein", value:country_values[whichyear]['Country']["SwitzerlandandLiechtenstein"]["GuestTot"]},
  {name:"Italy", value:country_values[whichyear]['Country']["Italy"]["GuestTot"]},
  {name:"Spain", value:country_values[whichyear]['Country']["Spain"]["GuestTot"]},
  {name:"Denmark", value:country_values[whichyear]['Country']["Denmark"]["GuestTot"]},
  {name:"Sweden", value:country_values[whichyear]['Country']["Sweden"]["GuestTot"]},
  {name:"Other countries Euro zone", value:country_values[whichyear]['Country']["OtherEurozone"]["GuestTot"]},
  {name:"Other European countries", value:country_values[whichyear]['Country']["OtherEUcountries"]["GuestTot"]},
  {name:"America", value:country_values[whichyear]['Country']["America"]["GuestTot"]},
  {name:"Asia", value:country_values[whichyear]['Country']["Asia"]["GuestTot"]},
  {name:"Australia and Oceania", value:country_values[whichyear]['Country']["AustraliaandOceania"]["GuestTot"]},
  {name:"Africa", value:country_values[whichyear]['Country']["Africa"]["GuestTot"]}
  ];

  // =================
  // Constants:
  // =================

  // Height and width of the MAP SVG element 
  var screenWidth = window.innerWidth;
  var svgMargin = {left: 20, top: 40, right: 20, bottom: 0}
      
    width = Math.min(screenWidth, 680) - (svgMargin.left) - svgMargin.right,
      height = Math.min(screenWidth, 750) - (svgMargin.left) - svgMargin.right

  //accommodation bargraph margins and size
  var barMargin = {top: 20, right: 30, bottom: 65, left: 40}, //margins in D3 are specified as an object with top, right, bottom and left properties
      barWidth = Math.min(screenWidth, 400) - barMargin.left - barMargin.right,
      barHeight = Math.min(screenWidth, 250) - barMargin.top - barMargin.bottom;

  var barMargin2 = {top: 20, right: 30, bottom: 65, left: 40},
  barWidth2 = Math.min(screenWidth, 400) - barMargin2.left - barMargin2.right,
  barHeight2 = Math.min(screenWidth, 400) - barMargin2.top - barMargin2.bottom;
  // =================
  // Set up the Map:
  // =================

  // =================
  // Map of the Netherlands:

  // Projects spherical coordinates of the Cartesian plate. Needed to display map on 2d plane. 
  var projection = d3.geoMercator()
                    .center([ 5.4, 52.2 ])
                    .translate([ width/2, height/2 ])
                    //change size of map within SVG element
                    .scale([ width*12.5]);

  // Path generator takes projection and formats it for SVG   
  var path = d3.geoPath()
              .projection(projection);
              
  d3.selectAll("svg").remove();
  // Create main SVG element where all content will be inserted
  var svgMain = d3.select("body").append("svg")
              .attr("width", (width + svgMargin.left + barMargin.left) + (svgMargin.right + barMargin.right +400))
              .attr("height", height + svgMargin.top + svgMargin.bottom)
              .attr("class", "mainSvg")
              
  // Create g element where map will be inserted 
  var svgMap = svgMain.append("g")
              .attr("width", (width + svgMargin.left + barMargin.left) + (svgMargin.right + barMargin.right +400))
              .attr("height", height + svgMargin.top + svgMargin.bottom)
              .attr("class", "map")
              .attr("transform", "translate(" + (width-200) + "," + (-40) + ")");
          

  // Color scale for population of province
  var color = d3.scaleSequential()
      .domain([0, 20000])
    .interpolator(d3.interpolateOranges);

  // Load the geojson map file, which also contains population data for provinces and municipalities 
  d3.json("nldataset"+ whichyear + ".json", function(error, nl) {


  // =================
  // Create provinces in map:

  // Create a child element that will contain each province
    svgMap.exit().remove();

    svgMap.append("g")
      .attr("class", "provinces")
      .selectAll(".path")
      .data(topojson.feature(nl, nl.objects.provinces).features)
      // Create a child SVG for each province 
      .enter().append("path")
        .attr("fill", function(d) { 
          return color(d.properties.All); })
        .attr("d", path)
      
      .on("mouseout", handleProviMouseOut)
      .on("mouseover", handleProviMouseOver);

    // =================
    // Create white line boundaries between provinces
    svgMap.append("path")
      .attr("class", "province-boundaries")
      .datum(topojson.feature(nl, nl.objects.provinces, function(a, b) { return a !== b; }))
      .attr("d", path);


  // =================
  // charts, legends and labels:
  // =================

    // =================
    // accommodation types bargraph:           

    // Create a band scale that returns the width of each bar - https://github.com/d3/d3-scale/blob/master/README.md#band_bandwidth
    var x = d3.scaleBand()
        .range([0, barWidth])
        .padding(.1); // adds padding between bars
      
    // Create a linear scale that returns the height of each bar - https://github.com/d3/d3-scale#linear-scales
    var y = d3.scaleLinear()
        .range([barHeight, 0]);

    // Add x and y axis
    var xAxis = d3.axisBottom(x)

    var yAxis = d3.axisLeft(y)
    .ticks(6, "s");
      
    // set the width and height of the SVG element to the outer dimensions 
    // and add a g element to offset the origin of the chart area by the top-left margin
    var chart = svgMain.append("g")
        .attr("width", barWidth + barMargin.left + barMargin.right)
        .attr("height", barHeight + barMargin.top + barMargin.bottom)
        .attr("id", "chart")
        .attr("transform", "translate(" + (50) + "," + 50+ ")")
        .append("g")
        .attr("transform", "translate(" + barMargin.left + "," + barMargin.top + ")");

    x.domain(country_data_acco.map(function(d) { return d.name; }));
    y.domain([0, d3.max(country_data_acco , function(d) { return d.value; })]);

    // Select all g elements, then use the enter() selection to create an element for each data point
    // this also translates each g element - https://github.com/d3/d3-selection#selection_enter
    xChart = chart.append("g")
      .attr("class", "x baraxis")
      .attr("transform", "translate(0," + barHeight + ")")
      .call(xAxis);

    yChart = chart.append("g")
      .attr("class", "y baraxis")
      .call(yAxis);

  var barChart =	chart.selectAll(".bar")
      .data(country_data_acco)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return barHeight - y(d.value); })
      .attr("width", x.bandwidth());

    // Rotate text on x axis -  http://bl.ocks.org/phoebebright/3061203
    // chart.selectAll(".x.baraxis text")  // select all the text elements for the xaxis
    //   .attr("transform", function(d) {
    //      return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().width/2 + ")rotate(-90)";
    //  });

    // now add titles to the axes
      chart.append("text")
        .attr("text-anchor", "middle")  
        .attr("transform", "translate("+ (barMargin.left -100) +","+(barHeight/2)+")rotate(-90)")  
        .text("Number of Guests");
        chart.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ (barWidth/2) +","+(barHeight-150)+")")  // centre below axis
        .text("Type of accommodation");

    // ================================================================
    // ================================================================
    // visitors countries bargraph:  
  // Create a band scale that returns the width of each bar - https://github.com/d3/d3-scale/blob/master/README.md#band_bandwidth
        var x2 = d3.scaleBand()
        .range([0, barWidth2])
        .padding(.1); // adds padding between bars

        // Create a linear scale that returns the height of each bar - https://github.com/d3/d3-scale#linear-scales
        var y2 = d3.scaleLinear()
        .range([barHeight2, 0]);

        // Add x and y axis
        var xAxis2 = d3.axisBottom(x2);

        var yAxis2 = d3.axisLeft(y2)
        .ticks(6, "s");

        // set the width and height of the SVG element to the outer dimensions 
        // and add a g element to offset the origin of the chart area by the top-left margin
        var chart2 = svgMain.append("g")
        .attr("width", barWidth2 + barMargin2.left + barMargin2.right)
        .attr("height", barHeight2 + barMargin2.top + barMargin2.bottom)
        .attr("id", "chart")
          .attr("transform", "translate(" + (50) + "," + 300 + ")")
        .append("g")
          .attr("transform", "translate(" + barMargin2.left + "," + barMargin2.top + ")");

        x2.domain(country_data_vis.map(function(d) { return d.name; }));
        y2.domain([0, d3.max(country_data_vis , function(d) { return d.value; })]);

        // Select all g elements, then use the enter() selection to create an element for each data point
        // this also translates each g element - https://github.com/d3/d3-selection#selection_enter
        xChart2 = chart2.append("g")
        .attr("class", "x baraxis")
        .attr("transform", "translate(0," + barHeight2 + ")")
        .call(xAxis2);

        yChart2 = chart2.append("g")
        .attr("class", "y baraxis")
        .call(yAxis2);

        var barChart2 =	chart2.selectAll(".bar")
        .data(country_data_vis)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x2", function(d) { return x2(d.name); })
        .attr("y2", function(d) { return y2(d.value); })
        .attr("height", function(d) { return barHeight2 - y2(d.value); })
        .attr("width", x2.bandwidth());

        // Rotate text on x axis -  http://bl.ocks.org/phoebebright/3061203
        chart2.selectAll(".x.baraxis text")  // select all the text elements for the xaxis
        .attr("transform", function(d) {
          return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().width/2 + ")rotate(-90)";
        });

        // now add titles to the axes
        chart2.append("text")
        .attr("text-anchor", "middle")  
        .attr("transform", "translate("+ (barMargin2.left -100) +","+(barHeight2/2)+")rotate(-90)")  
        .text("Number of Guests");
        chart2.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ (barWidth2/2) +","+(barHeight2 - 200)+")")  // centre below axis
        .text("Visitors' Countries of Resident");

    // =================
    // Color scale legend  based on population

    //Append a defs (for definition) element to SVG
      // var defs = svgMap.append("defs");
      //Extra scale since the color scale is interpolated
      var countScale = d3.scaleLinear()
        .domain([0, 2e4])
        .range([0, width])
      //Calculate the variables for the temp gradient
      var numStops = 9;
      countRange = countScale.domain();
      countRange[2] = countRange[1] - countRange[0];
      countPoint = [];
      for(var i = 0; i < numStops; i++) {
        countPoint.push(i * countRange[2]/(numStops-1) + countRange[0]);
      }
      //Create the gradient
      svgMap.append("defs")
        .append("linearGradient")
        .attr("id", "legend-traffic")
        //Sets the direction of the legend
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "0%")
        .selectAll("stop") 
        .data(d3.range(numStops))                
        .enter().append("stop") 
        .attr("offset", function(d,i) { 
          return countScale( countPoint[i] )/width;
        })   
        .attr("stop-color", function(d,i) { 
          return color( countPoint[i] ); 
        });

      // Draw legend 
      var legendWidth = Math.min(width*0.8, 400);
      //Color legend container
      var legendsvg = svgMap.append("g")
        .attr("class", "legendWrapper")
        // Sets the actual position of the legend  container
        .attr("transform", "translate(" + (width/2) + "," + 720 + ")");
      //Draw the Rectangle
      legendsvg.append("rect")
        .attr("class", "legendRect")
        .attr("x", -legendWidth/2)
        .attr("y", 0)
        .attr("width", legendWidth)
        //sets height of legend
        .attr("height", 10)
        .style("fill", "url(#legend-traffic)");
      //Append title
      legendsvg.append("text")
        .attr("class", "legendTitle")
        .attr("x", 0)
        .attr("y", -5)
        .style("text-anchor", "middle")
        .text("Tourist Guests of Provinces");

    //Set scale for x-axis
    var xScale = d3.scaleLinear()
      .range([-legendWidth/2, legendWidth/2])
      .domain([ 0, 2e4] );

    //Define x-axis
    var xAxis = d3.axisBottom()
      //Set tick number and format
      .ticks(8, "s")
      .scale(xScale);
    //Set up X axis
    legendsvg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (10) + ")")
      .call(xAxis);
      
    
    // =================
    // Tooltip for displaying municipality and province name on hover 
      var tooltip = d3.select("body").append("div") 
              .attr("class", "tooltip")       
              .style("opacity", 0);


    // =================
    // Name of place and total population

      var textboxPositionX = 20
          textboxPositionY = 10

    var placeName = svgMain.append("text")
          .attr("class", "place-name")
          .attr("x", textboxPositionX)
          .attr("y", textboxPositionY)
          .attr("dy", ".35em")
          .text("Area: The Netherlands");

    var totalPopulation = svgMain.append("text")
          .attr("class", "population-text")
          .attr("x", textboxPositionX )
          .attr("y", textboxPositionY + 30)
          .attr("dy", ".35em")
          .text("Total Guests: " + totalvisitors.value);
    
  // =================
  // Handlers:
  // =================

  // Changes the graphs and titles every time a user hovers over a province with the corresponsing province data
  function handleProviMouseOver(d) {

    d3.select(this)
      .attr("class", "proviMouseOver")

  // Display the name of the province as a tooltip
    tooltip.transition()    
      .duration(200)    
      .style("opacity", .9);    
      tooltip.html(d.properties.province_name) 
      .style("left", (d3.event.pageX) + "px")   
      .style("top", (d3.event.pageY - 28) + "px");  

    // Edit textbox with information about the province   
    placeName.html("Area: " + d.properties.province_name) 
    totalPopulation.html("Total Guests: " + d.properties.All) 

    // Prepare province data for bar chart
  // Types of Accommodation
  var province_data_acco = [
    // {name:"Total overnight accommodation", value:d.properties['TOTovernightaccommodation']},
    {name:"Hotel&youth hostel", value:d.properties["Hotelboardinghouseyouthhostel"]},
    // {name:"Total leisure accommodation", value:d.properties["TOTLeisureaccommodation"]},
    {name:"Campsite", value:d.properties["Campsite"]},
    {name:"Holiday park", value:d.properties["Holidaypark"]},
    {name:"Group accommodation", value:d.properties["Groupaccommodation"]}
  ];

  //visitors countries
  var province_data_vis = [
    {name:"the Netherlands", value:d.properties["NL"]},
    {name:"Germany", value:d.properties["Germany"]},
    {name:"Belgium", value:d.properties["Belgium"]},
    {name:"United Kingdom", value:d.properties["UnitedKingdom"]},
    {name:"France", value:d.properties["France"]},
    {name:"Switzerland and Liechtenstein", value:d.properties["SwitzerlandandLiechtenstein"]},
    {name:"Italy", value:d.properties["Italy"]},
    {name:"Spain", value:d.properties["Spain"]},
    {name:"Denmark", value:d.properties["Denmark"]},
    {name:"Sweden", value:d.properties["Sweden"]},
    {name:"Other countries Euro zone", value:d.properties["OtherEurozone"]},
    {name:"Other European countries", value:d.properties["OtherEUcountries"]},
    {name:"America", value:d.properties["America"]},
    {name:"Asia", value:d.properties["Asia"]},
    {name:"Australia and Oceania", value:d.properties["AustraliaandOceania"]},
    {name:"Africa", value:d.properties["Africa"]}
  ]

  //Update the barchart with province data
    x.domain(province_data_acco.map(function(d) { return d.name; }));
    y.domain([0, d3.max(province_data_acco , function(d) { return d.value; })]);
    barChart.data(province_data_acco)
    barChart.attr("y", function(d) { return y(d.value); })
    barChart.attr("x", function(d) { return x(d.name); })
    barChart.attr("height", function(d) { return barHeight - y(d.value); })
    barChart.attr("width", x.bandwidth())
    yChart.attr("class", "y baraxis")
    yChart.call(yAxis);
    

    x2.domain(province_data_vis.map(function(d) { return d.name; }));
    y2.domain([0, d3.max(province_data_vis , function(d) { return d.value; })]);
    barChart2.data(province_data_vis)
    barChart2.attr("y", function(d) { return y2(d.value); })
    barChart2.attr("x", function(d) { return x2(d.name); })
    barChart2.attr("height", function(d) { return barHeight2 - y2(d.value); })
    barChart2.attr("width", x2.bandwidth())
    yChart2.attr("class", "y baraxis")
    yChart2.call(yAxis2);
    }

  // Changes the graphs and titles every time a user hovers out of a province with the corresponsing country data
  function handleProviMouseOut(d) {

    d3.select(this)
      .attr("class", "proviMouseOut")

    // Remove province text on mouse out
    tooltip.transition()    
      .duration(500)    
      .style("opacity", 0); 

    // Update textbox on mouseout
    placeName.text("Area: The Netherlands");
    totalPopulation.text("Total Guests: " + totalvisitors.value);

    //Update barchart with country data on mouseout
    x.domain(country_data_acco.map(function(d) { return d.name; }));
    y.domain([0, d3.max(country_data_acco , function(d) { return d.value; })]);
    barChart.data(country_data_acco)
    barChart.attr("y", function(d) { return y(d.value); })
    barChart.attr("x", function(d) { return x(d.name); })
    barChart.attr("height", function(d) { return barHeight - y(d.value); })
    barChart.attr("width", x.bandwidth())
    yChart.attr("class", "y baraxis")
    yChart.call(yAxis);

    x2.domain(country_data_vis.map(function(d) { return d.name; }));
    y2.domain([0, d3.max(country_data_vis , function(d) { return d.value; })]);
    barChart2.data(country_data_vis)
    barChart2.attr("y", function(d) { return y2(d.value); })
    barChart2.attr("x", function(d) { return x2(d.name); })
    barChart2.attr("height", function(d) { return barHeight2 - y2(d.value); })
    barChart2.attr("width", x2.bandwidth())
    yChart2.attr("class", "y baraxis")
    yChart2.call(yAxis2);
    

  }
    

    // For viewing file objects, REMEMBER TO DELETE 
    
    console.log(nl);

  });
};

