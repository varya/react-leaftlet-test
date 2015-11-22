import React from 'react';

import {render} from 'react-dom';

require("!style!css!./styles.css");

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const center = [51.505, -0.09];

const marker = (function() {
  const position = [51.500, -0.08];
  return (
    <Marker position={position}>
        <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
    </Marker>
  );
})()

render(
  <div>
    <h1>Hello, world!</h1>
    <div className="map">
        <Map center={center} zoom={13}>
            <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {marker}
        </Map>
    </div>
  </div>
  ,
  document.getElementById('example')
);
