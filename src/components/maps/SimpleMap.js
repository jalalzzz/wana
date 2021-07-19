import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from "react";
import { getData } from '../../store/actions/dataAction';
import { Link } from 'react-router-dom';
import Store from './../../store/store';

const AnyReactComponent = ({ text }) => <div>{text}</div>;




export default function SimpleMap() {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    // getData();
    const data2 = Store.getState();
  
    if (!data2.data.loading) {
    
      dataSet(data2.data.data);
    }
    console.log(Store.getState());
    if (Store.getState().data.loading) {
    

      getData();
    }
    Store.subscribe(() => {
     
    })

  }, []);



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
    const iconArr = ['./252025.svg', './2520251.svg', './2520252.svg'];
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var markerIcon = {
        url: iconArr[Math.floor(Math.random() * iconArr.length)],
        scaledSize: new maps.Size(25, 25),
        origin: new maps.Point(0, 0),
        anchor: new maps.Point(16, 33),
        labelOrigin: new maps.Point(12, 9)
      };
      console.log(data[i]['google_maps_link'].split(',')[0])
      let lat=  +data[i]['google_maps_link'].split(',')[0];
      let lng = +data[i]['google_maps_link'].split(',')[1];
      let marker = new maps.Marker({

        position: { lat: lat, lng: lng },
        map,
       /* label: {
          text:  data[i]["association_name"],
          color: "#000000",
          fontSize: "16px",
          fontWeight: "bold"
      },*/
       title: data[i]["association_name"],
        icon: markerIcon,
        customInfo:i

      });
      marker.addListener("click",function (e)  {

       console.log(this.customInfo);
       // var index = this.customInfo;
     //   console.log(index);
        map.setZoom(16);
       // map.setCenter(e.getPosition());
    
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