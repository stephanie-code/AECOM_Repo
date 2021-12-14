
import React, { Component, useEffect } from 'react';
import datasm from './Bus_Routes_in_NJ.json'
import airports from './Airports.json'

let infobox, id;
var style3 = {
    polylineOptions: {
        strokeColor: '#FF0000'
    }
}
const Map = (props) => {

    // const [datasm, setDatasm] = ''
    const [pushPinData, setPushPinData] = ''

    useEffect(() => {
        // if(tripType == 'Intra'){
        //     setDatasm(airports)
        //     console.log('datasm', datas)
        // }else{
        //     let datas = airports
        //     console.log('datasm air', datas)
        // }
        callMap()
        
    },props.tripType)

    const callMap = () => {
        setTimeout(() => {
            GetMap()
        }, 4000)
    }

    const pushpinClicked = (e) => {
        // console.log('pushpinClicked', e.target.metadata)
        
        setPushPinData(e.target.metadata)
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.OBJECT_NAM,
                description: e.target.metadata.COUNTY,
                visible: true
            });
        }
        // console.log('push', pushPinData)
    }
    const GetMap = () => {
        var apiKey =
            "AtaFag9V2j0fN4IE768DM54UswgeNs8LyGOnC7sgLQfiHi1Tzp6MNquxRmWx_HlC"
        const Microsoft = window.Microsoft;
        var map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
            credentials: apiKey,
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            // center: new Microsoft.Maps.Location(39.393486, -98.100769),
            center: new Microsoft.Maps.Location(40.21389, -74.60139),
            zoom: 7,
        });

        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        var a = infobox.setMap(map);
        // Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
        //     var featureCollection = Microsoft.Maps.GeoJson.read(
        //         tripType == undefined ? airports : datasm, style3);

        //     for (var i = 0; i < featureCollection.length; i++) {

        //         Microsoft.Maps.Events.addHandler(featureCollection[i], 'click', pushpinClicked());

        //         map.entities.push(featureCollection[i]);
        //         // console.log('data', featureCollection[i])
        //     }

        // });

    }
    console.log('tripType', props.tripType)

    return (
        <div id='myMap'>
        </div>
    );
}

export default Map;
