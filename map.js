(function (d3, topojson) {
    'use strict';

    const svg1 = d3.select("#div1").select('svg');
  
    const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom',  (e) => {
        g.attr('transform', e.transform);
    });
    
    const g = svg1.append('g');
    const projection = d3.geoMercator().scale(5000).center([5.116667,52.17000]);
    const pathGenerator = d3.geoPath().projection(projection);
  
    d3.csv("tourism data.csv",function(error,csvdata){ 
  
        if(error){ 
         console.log(error); 
        } 
        console.log(csvdata); 
    });

    d3.json('https://cartomap.github.io/nl/wgs84/toeristengroep_2020.topojson').then
    (data => {
        const toeristengroep = topojson.feature(data, data.objects.toeristengroep_2020);
      
        g
        .selectAll('path').data(toeristengroep.features)
          .enter().append('path')
              .attr('d', pathGenerator)
            .append('title')
          .text(d => `${d.properties.statnaam}, ID:${d.id}`);
  });
  
      svg1.call(zoom); 
  
  }(d3, topojson));
  
  