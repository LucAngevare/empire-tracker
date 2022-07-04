import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return (
    <div className='App'>
      <ReactMapGL {...viewPort} mapboxAccessToken={process.env.REACT_APP_API_KEY}>
        marker
      </ReactMapGL>
    </div>
  );
}

export default App;
