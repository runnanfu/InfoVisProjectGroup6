(function (d3, topojson) {
    'use strict';
    const svg2 = d3.select("#div2").select('svg');
  
    const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom',  (e) => {
        g.attr('transform', e.transform);
    });
  
    const g = svg2.append('g');
  
    const projection = d3.geoMercator().scale(5000).center([5.116667,52.17000]);
    const pathGenerator = d3.geoPath().projection(projection);
  
    // d3.json('https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson').then(data => {
    d3.json('https://cartomap.github.io/nl/wgs84/provincie_2020.topojson').then
    (data => {
        const provincie = topojson.feature(data, data.objects.provincie_2020);
      
        g
        .selectAll('path').data(provincie.features)
          .enter().append('path')
              .attr('d', pathGenerator)
            .append('title')
          .text(d => `${d.properties.statnaam}, ID:${d.id}`);
  });
  
      svg2.call(zoom); 
  
  }(d3, topojson));
  
  