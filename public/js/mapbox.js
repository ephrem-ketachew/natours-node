/*eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZXBocmVtNjQiLCJhIjoiY21kMzR2NHdxMDB4MDJxczl0MnZ0anZ3dCJ9.UcsapD7cGUM4ocKfKy3Amw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ephrem64/cmd36du15047v01sd3nvl1ywc',
    projection: 'mercator',
    scrollZoom: false
    //   zoom: 1,
    //   center: [30, 15]
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
