import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TableRender from "./tableRender";
import { useSelector, useDispatch } from "react-redux";
import { DistrictSelected } from "../../appRedux/actions/DistrictSelected";

export default function MapRender() {
  const position = [51.505, -0.09];
  const [map, setMap] = useState(null);

  const geoJsonRef = useRef();
  const [geoJSON, setGeoJSON] = useState(null);
  const [selectValue, setSelectValue] = useState("");
  const [selectValueData, setSelectValueData] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/master/2_bundeslaender/2_hoch.geo.json"
    )
      .then((response) => response.json())
      .then((response) => {
        let Data = response.features.map((data) => {
          // let geometry_type = data.geometry.type;
          let name = data.properties.name;
          // let property_type= data.properties.type;
          let id= data.properties.id;

          let coordinates = data.geometry.coordinates[0];
          let MapDatas = coordinates[0];
          let coordinate = MapDatas.length > 2 ? MapDatas[0] : MapDatas;
          let latitude = coordinate[0];
          let longtitude = coordinate[1];
          return { id, name, latitude, longtitude };
        });
        dispatch(DistrictSelected(Data));
        setSelectValueData(Data);
        setGeoJSON(response);
        if (geoJsonRef.current && map)
          map.fitBounds(geoJsonRef.current.getBounds());
//mycode
        // let name = response.features.map((data) => data.properties.name)
        // let details = response.features.map((data) => {
        //   return {
        //     id: data.properties.id,
        //     name: data.properties.name,
        //     geometry_type: data.geometry.type,
        //     property_type: data.properties.type,
        //   }
        // })
        // console.log('response', response)
        // dispatch(DistrictSelected(details))
        // setGeoJSON(response);
        // if (geoJsonRef.current && map) {
        //   map.fitBounds(geoJsonRef.current.getBounds());
        // }
//end

        // setSelectValueData(details)
        // console.log('map',details)
        // console.log('map', response.features.map((coords) => coords.geometry.coordinates.map((coords1) => coords1.map((coords2) => coords2.map((coords3)=>coords3[0])))))  
        // console.log('map1', response.features.map((coords) => coords.geometry.coordinates.map((coords1) => coords1[0][0]  )))  
      });
// console.log('selectValueData',selectValueData)
  }, [map, dispatch, selectValueData]);

  const handleEachFeature = (feature, layer) => {
    const districtName = feature.properties.name;
    layer.bindPopup(districtName);
    layer.on({
      mousedown: (e) => {
        ToolTipPopUp(e, districtName);
        setSelectValue(districtName);
        // handleDistrictChange(districtName);
      },
      // mouseout: (e) => {
      //   ToolTipPopUp(e, value);
      // },
    });
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setSelectValue(newDistrict);
    dispatch(DistrictSelected(newDistrict))

    if (!newDistrict) return;

    // const selectedDistrict = e.target.value.filter(
    //   (data) => data.cityName === newDistrict
    // );
    // dispatch(DistrictSelected(selectedDistrict));

    const layer = geoJsonRef.current
      .getLayers()
      .find((layer) => layer._popup._content === newDistrict);
    layer.openPopup();
    map.fitBounds(layer.getBounds());

    // const newDistrictData = [
    //   {
    //     id: layer.openPopup().feature.properties.id,
    //     name: layer.openPopup().feature.properties.name,
    //     geometry_type: layer.openPopup().feature.geometry.type,
    //     property_type: layer.openPopup().feature.properties.type
    //   }
    // ]
    // setSelectValueData(newDistrictData)
    // dispatch(DistrictSelected(newDistrictData))
  };

  const ToolTipPopUp = (e, districtName) => {
    const selectedDistrict = value.filter(
      (data) => data.cityName === districtName
    );
    dispatch(MapData1(selectedDistrict));
    dispatch(MapData(districtName));
  };
  
  // {
  //   selectValue == null ?
  //     dispatch(DistrictSelected(
  //       geoJsonRef.current
  //         ?.getLayers()
  //         .map((layer) => layer._popup._content),
  //       geoJsonRef.current
  //         ?.getLayers()
  //         .map((layer) => {
  //           return {
  //             id: layer.feature.properties.id,
  //             name: layer._popup._content,
  //             geometry_type: layer.feature.geometry.type,
  //             property_type: layer.feature.properties.type,
  //           }
  //         })
  //     ))
  //     :
  //     null
  // }

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "700px" }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoJSON && (
          <GeoJSON
            data={geoJSON}
            onEachFeature={handleEachFeature}
            ref={geoJsonRef}
          />
        )}
      </MapContainer>
      <select value={selectValue} onChange={handleDistrictChange}>
        <option value="">Select a district</option>
        {geoJsonRef.current
          ?.getLayers()
          .map((layer) => layer._popup._content)
          .map((district, index) => (
            <option key={`district-${index}`} value={district}>
              {district}
            </option>
          ))}
      </select>
    </>
  );
}
