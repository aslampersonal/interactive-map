import React, { useState, useEffect } from 'react';
import Map from './Components/Map';
import data from './data.json';

function App() {
  const [mapdata, setMapData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    setMapData(data);
  }, []);

  return (
    <div>
      <Map data={mapdata} />
    </div>
  );
}

export default App;
