import React, { useState } from 'react';

const RegionMarker = ({ position, size, color, network }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="region-marker" style={{ position: 'absolute', top: position.top + '%', left: position.left + '%', transform: 'translate(-50%, -50%)' }}>
      <div onClick={handlePopupToggle} className='region-marker-click' style={{ width: size + 'px', height: size + 'px', borderRadius: '50%', backgroundColor: color, cursor: 'pointer' }}></div>
      {showPopup && (
        <div className="popup">
          <h3>Data Usage</h3>
          <p><b>Region: </b>{network.region}</p>
          <p><b>Data Usage: </b>{network.data}</p>
        </div>
      )}
    </div>
  )
};

export default RegionMarker;
