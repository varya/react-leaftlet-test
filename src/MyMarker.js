import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer, MapLayer } from 'react-leaflet';

class MyMarker extends MapLayer {
  componentWillMount() {
    super.componentWillMount();
    const { map, position, ...props } = this.props;
  }
  render () {
    return (
        <Marker position={this.props.position}>
            <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
        </Marker>
    )
  }
}

export default MyMarker;
