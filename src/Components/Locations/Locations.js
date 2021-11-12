import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap defaultZoom={10}
        defaultCenter= {{ lat: 45, lng :-75}}/>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function Location() {
        return(
            <div style={{  width:"80vh", height:'80vh'}}>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeCr3XCNb-yyV1dxv4CCpkJzsLaJrp8FQ`} loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}/>
            </div>
        );
    }

