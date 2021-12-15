
import React, { Component, useEffect, useState } from 'react';
import datasm from './Bus_Routes_in_NJ.json'
import airports from './Airports.json'
import { useSelector } from "react-redux";

let infobox, id;
var style3 = {
    polylineOptions: {
        strokeColor: '#FF0000'
    }
}
const Map = () => {

    // const [datasm, setDatasm] = ''
    const [pushPinData, setPushPinData] = useState('')
    const tripType = useSelector((state) => state.TripType.Trip_Type)

    useEffect(() => {
        // if(tripType == 'Intra'){
        //     setDatasm(airports)
        //     console.log('datasm', datas)
        // }else{
        //     let datas = airports
        //     console.log('datasm air', datas)
        // }
        callMap()

    })

    const callMap = () => {
        setTimeout(() => {
            GetMap()
        }, 4000)
    }

    const pushpinClicked = (e) => {
        // console.log('pushpinClicked', e.target.metadata)

        setPushPinData(e.target.metadata)
        if (e.target.metadata) {
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.OBJECT_NAM,
                description: e.target.metadata.COUNTY,
                visible: true
            });
        }
        console.log('push', pushPinData)
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
        //         tripType == 'Intra' ? airports : datasm, style3);

        //     for (var i = 0; i < featureCollection.length; i++) {

        //         // Microsoft.Maps.Events.addHandler(featureCollection[i], 'click', pushpinClicked());

        //         map.entities.push(featureCollection[i]);
        //         // console.log('data', featureCollection[i])
        //     }

        // });

        //Heat Map

        Microsoft.Maps.loadModule(['Microsoft.Maps.GeoJson', 'Microsoft.Maps.HeatMap'], function () {
            // earthquake data in the past 30 days from usgs.gov
            if(tripType == 'Overlay'){
                var overlay = new Microsoft.Maps.GroundOverlay({
                    bounds: Microsoft.Maps.LocationRect.fromEdges(50, -126, 25, -66),
                    imageUrl: 'https://bingmapsisdk.blob.core.windows.net/isdksamples/us_counties.png',
                    opacity: 0.4
                });
                map.layers.insert(overlay);
            }else if (tripType == 'Outward') {
                Microsoft.Maps.GeoJson.readFromUrl('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function (shapes) {
                    var heatMap = new Microsoft.Maps.HeatMapLayer(shapes, { radius: 5, propertyAsWeight: 'mag' });
                    map.layers.insert(heatMap);
                });
            } else {
                Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
                    var featureCollection = Microsoft.Maps.GeoJson.read(
                        tripType == 'Intra' ? airports : datasm, style3);

                    for (var i = 0; i < featureCollection.length; i++) {

                        // Microsoft.Maps.Events.addHandler(featureCollection[i], 'click', pushpinClicked());

                        map.entities.push(featureCollection[i]);
                        // console.log('data', featureCollection[i])
                    }

                });
            }

        });

    }
    console.log('tripType', tripType)

    return (
        <div id='myMap'>
        </div>
    );
}

export default Map;
