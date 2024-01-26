import React from 'react';
import RegionMarker from './RegionMarker';
import "./Map.css";

function Map({ data }) {
  const usageRanges = [
    { color: '#40ADCF', min: 0, max: 200 },
    { color: '#4078CF', min: 201, max: 500 },
    { color: '#633DC8', min: 501, max: 1000 },
    { color: '#8C54D3', min: 1001, max: Infinity },
  ];

  const totalData = data.reduce((sum, region) => sum + region.data, 0);

  const calculatePercentage = (range) => {
    const rangeData = data.filter((region) => region.data >= range.min && region.data <= range.max);
    const rangeSum = rangeData.reduce((sum, region) => sum + region.data, 0);
    return ((rangeSum / totalData) * 100).toFixed(2);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src="/images/world-map.jpg" alt="World Map" style={{ width: '100%' }} />

      {data &&
        data.map((region) => (
          <RegionMarker
            key={region.id}
            position={{ top: region.top, left: region.left }}
            size={calculateSize(region.data)}
            color={calculateColor(region.data)}
            network={region} // Pass network details to RegionMarker
          />
        ))}

      <div id='usage-note'>
        <div id='usage-note-lines'>
          {usageRanges.map((range, index) => (
            <div key={index} style={{ backgroundColor: range.color, width: calculatePercentage(range) + '%' }}></div>
          ))}
        </div>
        <div className='usage-note-labels'>
          {usageRanges.map((range, index) => (
            <div key={index} style={{width: calculatePercentage(range) + '%', textAlign: "center", fontSize: "12px"}}>{calculatePercentage(range) + '%'}</div>
          ))}
        </div>
        <div className='usage-note-labels'>
          {usageRanges.map((range, index) => (
            <div key={index} style={{width: calculatePercentage(range) + '%'}}><div style={{backgroundColor: range.color, width: "10px", height: "10px" }}></div>{range.min}-{range.max}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function calculateSize(data) {
  if (data <= 200) return 10;
  else if (data <= 500) return 20;
  else if (data <= 1000) return 30;
  else return 40;
}

function calculateColor(data) {
  if (data <= 200) return '#40ADCF';
  else if (data <= 500) return '#4078CF';
  else if (data <= 1000) return '#633DC8';
  else return '#8C54D3';
}

export default Map;
