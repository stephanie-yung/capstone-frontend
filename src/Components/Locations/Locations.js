import React, {useState} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import * as starbucks from "./starbucks.json"
function Map() {
    return (
        <GoogleMap defaultZoom={10}
        defaultCenter= {{ lat: 40.768538, lng :-73.964741}}>
            <Marker key={'Hunter College'} position={{lat: 40.768538, lng: -73.964741}}/>
        </GoogleMap>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function Location() {
        return(
            <div style={{  width:"90vh", height:'90vh', borderStyle: 'solid'}}>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeCr3XCNb-yyV1dxv4CCpkJzsLaJrp8FQ`} loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}/>
            </div>
        );
    }

