import React, {useState} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import starbucks from "./starbucks.json"
// console.log(starbucks)
//using google maps api and react hooks, I simply found a json file with locations of all starbucks within Manhattan and mapped over the json file to create a mark at the starbucks with a info window displaying the store ID
function Map() {
    const [selectedStore, setSelectedStore] = useState()
    return (
        <div >
                <GoogleMap defaultZoom={16}
                    defaultCenter= {{ lat: 40.768538, lng :-73.964741}}>
                        {starbucks.map((store)=> (
                            <Marker key={store.id} position={{lat:store.location.latitude, lng:store.location.longitude}} 
                                onClick ={()=> {
                                    setSelectedStore(store);
                                }}
                                icon={{
                                    url: "https://i.pinimg.com/originals/92/87/24/92872451654fc0cb7a8a14cdf31f2d82.png",
                                    scaledSize: new window.google.maps.Size( 35, 35)
                                }}
                            />
                        ))}
                        {selectedStore != null ? 
                            <InfoWindow position={{lat:selectedStore.location.latitude, lng:selectedStore.location.longitude}} onCloseClick={()=>{setSelectedStore(null);}}>
                                <div>
                                    <h2>{selectedStore.id}</h2>
                                    <h3>{selectedStore.street}</h3>
                                </div>
                            </InfoWindow> 
                            : console.log("no info")
                        }
                </GoogleMap>
        </div>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
// This is just the container in which the map is displayed
export default function Location() {
        return(
            <div className="center">
                <div style={{  width:"90vh", height:'90vh', borderStyle: 'solid'}}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeCr3XCNb-yyV1dxv4CCpkJzsLaJrp8FQ`} loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}/>
                </div>
                <div>
                    <h2 className="ma3">Currently displaying Starbucks only in Manhattan</h2>
                    <h2 className="ma3">You can zoom in/out to view any Starbucks location within the city!</h2>
                </div>
            </div>
        );
    }

