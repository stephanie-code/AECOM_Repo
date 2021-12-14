import React, { useState } from "react";
import { Col, Row, Select } from "antd";
import Auxiliary from "util/Auxiliary";

import ListKeywords from "./ListKeywords";
import TweetsTable from './TweetsTable'
import MapRender from './components/MapRender';
import Map from './components/Map';

import TitleBar from '../../components/TitleBar'
import Widget from '../../components/Widget'
// import Select from '../../components/Select'
import Analysis from '../analysis'

import datasm from './components/Airports.json'



const installchangedisconnect = () => {
  const data = ['Intra', 'Inward', 'Outward']
  const topics = [1, 2, 3, 4, 5]
  const [tripType, setTripType] = useState('')

  const handleSelectChange = (value) => {
    setTripType(value)
  }

  return (
    <Auxiliary>
      <div className="main_wrapper">
        <Analysis />
        <Row className='pb' gutter={[16, 24]}>
          <Col span={24} className="title">Transit Ridership Recovery Summary</Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24} >
            <h5>Select Type of Trip</h5>
            {/* <Select placeholder='Select' options={data} onChange={handleSelectChange}/> */}
            <Select style={{ width: 120 }} onChange={handleSelectChange}>
              <Option value="Intra">Intra</Option>
              <Option value="Inward">Inward</Option>
              <Option value="Outward">Outward</Option>
            </Select>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className="card color_bg_color" style={{ width: '100%', height: '500px' }}>
              <div className="gradient"></div>
              <TitleBar title='Weeks to reach Pre-Covid Ridership' styleName='card_title title-bar' />
              {/* <MapRender data={tripType}/> */}
              <Map data={tripType}/>
              {console.log('indes', tripType)}
            </div>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              Table
            </div>
          </Col>

        </Row>
      </div>
    </Auxiliary>
  );
};

export default installchangedisconnect;