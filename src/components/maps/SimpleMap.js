import GoogleMapReact  from 'google-map-react';
import React from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 31.3,
      lng: 37
    },
    zoom: 8
  };



  const appendChild = Element.prototype.appendChild;

  // All services to catch
  const urlCatchers = [
    "/AuthenticationService.Authenticate?",
    "/QuotaService.RecordEvent?"
  ];
  let markersArray = [];
  // Google Map is using JSONP.
  // So we only need to detect the services removing access and disabling them by not
  // inserting them inside the DOM
  Element.prototype.appendChild = function (element) {
    const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
    const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

    if (!isGMapAccessScript) {
      return appendChild.call(this, element);
    }

    // Extract the callback to call it with success data
    // (actually this part is not needed at all but maybe in the future ?)
  // const callback = element.src.split(/.*callback=([^\&]+)/, 2).pop();
  // const [a, b] = callback.split('.');
  //  window[a][b]([1, null, 0, null, null, [1]]);

    // Returns the element to be compliant with the appendChild API
    return element;
  };
 
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
  const iconArr=['./252025.svg','./2520251.svg','./2520252.svg']
  for(var i=0;i<100;i++){
    var markerIcon = {
        url:iconArr[ Math.floor(Math.random()*iconArr.length)],
        scaledSize: new maps.Size(25, 25),
        origin: new maps.Point(0, 0),
        anchor: new maps.Point(16, 33),
        labelOrigin: new maps.Point(12, 9)
    };
 let lat=Math.random()*3.5+28.9;
 let lng=Math.random()+35.6;
    let marker = new maps.Marker({
   
      position: { lat:lat,lng:lng},
      map,
      title: 'Hello World! '+i,
      icon:markerIcon
    
    });
    markersArray.push(marker);
  }
  
};

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
         
        <AnyReactComponent
          lat={31.9633887}
          lng={35.9002391}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}