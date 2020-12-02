(function (d3, topojson) {
  'use strict';

  const svg = d3.select('svg');

  const zoom = d3.zoom()
  .scaleExtent([1, 8])
  .on('zoom',  (e) => {
      g.attr('transform', e.transform);
  });

  const g = svg.append('g');

  const projection = d3.geoMercator().scale(5000).center([5.116667,52.17000]);
  const pathGenerator = d3.geoPath().projection(projection);

  d3.json('https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson').then(data => {
  	const gemeentes = topojson.feature(data, data.objects.gemeente_2020);
    
    g
      .selectAll('path').data(gemeentes.features)
    	.enter().append('path')
    		.attr('d', pathGenerator)
  		.append('title')
        .text(d => `${d.properties.statnaam}, ID:${d.id}`);
                    
    g
      .selectAll('g')
      .data(geoData)
      .enter().append('circle')
        .attr('cx', function(d){
          const long = d.longitude;
          const lat = d.latitude;
          return projection([+long, +lat])[0]  
        })
        .attr('cy', function(d){
          const long = d.longitude;
          const lat = d.latitude;
          return projection([+long, +lat])[1]
        })
        .attr('r', '0.7px');

});

    svg.call(zoom); 

  //Handels the reset button 
  // source: https://stackoverflow.com/questions/53056320/html-d3-js-how-to-zoom-from-the-mouse-cursor-rather-than-top-left-corner
    resetButton
      .attr('cursor', 'pointer')
      .text('Reset Zoom')
      .on('click', function(){
        g.transition()
          .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
      });


}(d3, topojson));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwganNvbiwgZ2VvUGF0aCwgZ2VvTWVyY2F0b3IsIHpvb20gfSBmcm9tICdkMydcbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICd0b3BvanNvbidcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKVxuXG5jb25zdCBwcm9qZWN0aW9uID0gZ2VvTWVyY2F0b3IoKS5zY2FsZSg1MDAwKS5jZW50ZXIoWzUuMTE2NjY3LDUyLjE3MDAwXSlcbmNvbnN0IHBhdGhHZW5lcmF0b3IgPSBnZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKVxuXG5qc29uKCdodHRwczovL2NhcnRvbWFwLmdpdGh1Yi5pby9ubC93Z3M4NC9nZW1lZW50ZV8yMDIwLnRvcG9qc29uJykudGhlbihkYXRhID0+IHtcblx0Y29uc3QgZ2VtZWVudGVzID0gZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuZ2VtZWVudGVfMjAyMClcbiAgXG4gIHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKS5kYXRhKGdlbWVlbnRlcy5mZWF0dXJlcylcbiAgXHQuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICBcdFx0LmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKVxuXHRcdC5hcHBlbmQoJ3RpdGxlJylcbiAgXHRcdC50ZXh0KGQgPT4gYCR7ZC5wcm9wZXJ0aWVzLnN0YXRuYWFtfSwgSUQ6JHtkLmlkfWApXG59KSJdLCJuYW1lcyI6WyJzZWxlY3QiLCJnZW9NZXJjYXRvciIsImdlb1BhdGgiLCJqc29uIiwiZmVhdHVyZSJdLCJtYXBwaW5ncyI6Ijs7O0VBR0EsTUFBTSxHQUFHLEdBQUdBLFNBQU0sQ0FBQyxLQUFLLEVBQUM7QUFDekI7RUFDQSxNQUFNLFVBQVUsR0FBR0MsY0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQztFQUN4RSxNQUFNLGFBQWEsR0FBR0MsVUFBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQztBQUN0RDtBQUNBQyxTQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO0VBQ2hGLENBQUMsTUFBTSxTQUFTLEdBQUdDLGdCQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDO0VBQzVEO0VBQ0EsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0VBQ2hELElBQUksS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDO0VBQzdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUNsQixLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQztFQUN0RCxDQUFDOzs7OyJ9