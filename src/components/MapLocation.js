import React, {Component} from 'react'
import '../App.css'
import L from 'leaflet'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

const myIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/real-estate-solid-icons-1/48/19-512.png',
    iconSize: [60,60],
    iconAnchor: [30,60],
    popupAnchor: [0,-60]
})

class MapLocation extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }

    render() {
        const position = [this.state.lat, this.state.lng]
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="#">Your Best Place</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            Best Home <br /> € 700,00.
          </Popup>
        </Marker>
      </Map>
    )
    }
}

export default MapLocation

