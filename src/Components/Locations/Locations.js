import React, {useState, useEffect} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import new_starbucks from "./new-starbucks.json"
//using google maps api and react hooks, I simply found a json file with locations of all starbucks within Manhattan and mapped over the json file to create a mark at the starbucks with a info window displaying the store ID

export const Map = () => {
    const [selectedStore, setSelectedStore] = useState(null)
    const [currentPosition, setCurrentPosition] = useState({lat: 40.768538, lng: -73.964741});

    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success);
    }, []);

    const new_markers = new_starbucks.map((store) => (
        <Marker
            key={store["Store Number"]}
            position={{lat: store["Latitude"], lng: store["Longitude"]}}
            onClick={() => setSelectedStore(store)}
            icon={{
                url: "https://i.pinimg.com/originals/92/87/24/92872451654fc0cb7a8a14cdf31f2d82.png",
                scaledSize: new window.google.maps.Size(35, 35)
            }}
        />
    ));

    return (
        <div>
                <GoogleMap defaultZoom={13}
                    center= {currentPosition}>
                        {new_markers}
                        {selectedStore !== null ? 
                            <InfoWindow
                                position={{lat:selectedStore.Latitude, lng:selectedStore.Longitude}}
                                clickable={true}
                                onCloseClick={() => setSelectedStore(null)}
                            >
                                <div>
                                    <h3>Address: {selectedStore["Address"]}</h3>
                                    <h3>Phone #: {selectedStore["Phone Number"]}</h3>
                                </div>
                            </InfoWindow> 
                            : null
                        }
                </GoogleMap>
        </div>
    );
}
const WrappedMap = withScriptjs(withGoogleMap((props) => <Map coords={props.coords}/>));
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
                    <div className="center bg-white br3 pa5 pa4-ns mv5 ba b--black-10">
                        <div className="tc">
                            <img alt="" src="https://i.pinimg.com/originals/92/87/24/92872451654fc0cb7a8a14cdf31f2d82.png" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
                            <h1 className="f4">Starbucks around NYC</h1>
                            <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className=" pa4 lh-copy measure center f6 black-70">
                            The map to the left will show all starbucks locations around NYC, give it some time to load!
                        </p>
                    </div>
                    <div className="center bg-white br3 pa5 pa4-ns mv5 ba b--black-10">
                        <div className="tc">
                            <img alt="" src="https://i.pinimg.com/originals/92/87/24/92872451654fc0cb7a8a14cdf31f2d82.png" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
                            <h1 className="f4">Starbucks around NYC</h1>
                            <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className=" pa4 lh-copy measure center f6 black-70">
                            The map to the left will also be centered around your current Location. If you want more information about a specific starbucks,
                            click the icon to find out the store's unique ID number as well as the postal code. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }

