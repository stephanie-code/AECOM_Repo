
import React, { Component } from 'react';
// import datasm from './Bus_Routes_in_NJ.json'
import datasm from './Airports.json'

let infobox;

export class MapRender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sms',
            pushPinData: '',
            // datasm: this.props.data
        }
    }
    componentDidMount() {
        var style4 = {
            'LineString': {
                strokeColor: '#ef4f91'
            }
        }
        var style3 = {
            polylineOptions: {
                strokeColor: '#FF0000'
            }
        }
        var style4 = {
            polylineOptions: {
                strokeColor: "#00FF00",
            },
        };
        function pushpinClicked(e) {
            // console.log('pushpinClicked', e.target.metadata)
            this.state = ({
                pushPinData: e.target.metadata
            })
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
            console.log('push', this.state.pushPinData)
        }

        function GetMap() {
            var apiKey =
                "AtaFag9V2j0fN4IE768DM54UswgeNs8LyGOnC7sgLQfiHi1Tzp6MNquxRmWx_HlC"
            const Microsoft = window.Microsoft;
            var map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
                credentials: apiKey,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                // center: new Microsoft.Maps.Location(39.393486, -98.100769),
                center: new Microsoft.Maps.Location(40.21389,-74.60139),
                zoom: 7,
            });
            
            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
                visible: false
            });

            //Assign the infobox to a map instance.
            var a = infobox.setMap(map);

            Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
                var featureCollection = Microsoft.Maps.GeoJson.read(datasm, style3);

                for (var i = 0; i < featureCollection.length; i++) {
                    
                    Microsoft.Maps.Events.addHandler(featureCollection[i], 'click', pushpinClicked);

                    map.entities.push(featureCollection[i]);
                    console.log('data', featureCollection[i])
                }

            });

        }
        setTimeout(() => {
            GetMap()
            // this.setState({
            //     datasm: this.props.data
            // }, () => GetMap())
        }, 4000)
    }

    render() {
        return (
                <div id='myMap'>
                </div>
        );
    }
}

export default MapRender
