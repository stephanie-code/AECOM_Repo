import React, { useState } from "react";
import { Col, Row, Select } from "antd";
import Auxiliary from "util/Auxiliary";
import { useDispatch } from "react-redux"; 

import MapRender from './components/MapRender';
import PowerBi from './components/PowerBi';
import Map from './components/Map';

import {SelectTrip} from '../../appRedux/actions/SelectTrip';
import TitleBar from '../../components/TitleBar'

const installchangedisconnect = () => {
  const Dispatch = useDispatch()

  const handleSelectChange = (value) => {
    Dispatch(SelectTrip(value))
  }

  return (
    <Auxiliary>
      <div className="main_wrapper">
        {/* <Analysis /> */}
        <Row className='pb' gutter={[16, 24]}>
          <Col span={24} className="title">Transit Ridership Recovery Summary</Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24} >
            <h5>Select Type of Trip</h5>
            {/* <Select placeholder='Select' options={data} onChange={handleSelectChange}/> */}
            <Select style={{ width: 120 }} onChange={handleSelectChange}>
              <Option value="Intra">Intra</Option>
              <Option value="Inward">Inward</Option>
              <Option value="Outward">Outward</Option>
              <Option value="Overlay">Overlay</Option>
            </Select>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className="card color_bg_color" style={{ width: '100%', height: '500px' }}>
              <div className="gradient"></div>
              <TitleBar title='Weeks to reach Pre-Covid Ridership' styleName='card_title title-bar' />
              {/* <MapRender /> */}
              <Map />
            </div>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              Table
            </div>
          </Col>

<PowerBi />
        </Row>
      </div>
    </Auxiliary>
  );
};

export default installchangedisconnect;