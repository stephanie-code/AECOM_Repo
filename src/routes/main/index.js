import React from "react";
import { Col, Row } from "antd";

import Auxiliary from "util/Auxiliary";

import DisputableCircuits from "./MapTableChartRender/DisputableCircuits";
import TripRecoveryPrediction from './TripRecoveryPrediction';
import ChangeOrdersChartCard from "./chartcard/Card1";
import NewInstallOrdersCard from "./chartcard/Card3";
import DisputeRaisedCard from "./chartcard/Card2";
import LineChartRender from './LineChartRender';
import TravelModes from './charts/TravelModes'
import TravelPurpose from './charts/TravelModes'

import TitleBar from '../../components/TitleBar'
import Widget from '../../components/Widget/index';
import Select from '../../components/Select';
const Main = () => {

  return (
    <Auxiliary>
      <div className='main_wrapper'>
        {/* <Row className="pb">
        </Row> */}
        <Row className='sentiment_row pb' gutter={[16, 24]}>
          <Col span={24} className="title">New Jersey Travel Analysis</Col>
          <Col span={12} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              <TitleBar title='Travel Modes' styleName='card_title title-bar' />
              <TravelModes />
            </div>
          </Col>

          <Col span={12} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              <TitleBar title='Travel Purpose' styleName='card_title title-bar' />
              <TravelPurpose />
            </div>
          </Col>

          <Col span={12} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              <TitleBar title='Weekday Trips By Hour' styleName='card_title title-bar' />
              {/* <HouseOwnership /> */}
            </div>
          </Col>

          <Col span={12} >
            <div className="card card-wh color_bg_color">
              <div className="gradient"></div>
              <TitleBar title='Weekend Trips By Hour' styleName='card_title title-bar' />
              {/* <HouseOwnership /> */}
            </div>
          </Col>
        </Row>
        {/* <Row className='pb'>
          <Col span={24}>
            <Row gutter={[0, 16]}>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <DisputeRaisedCard
                  // prize={cthree}
                  prize='8.8Mn'
                  title='Raised'
                  icon="autocomplete"
                  styleName="up"
                  desc="Disputes Raised (Past 30 Days)"
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <NewInstallOrdersCard
                  // prize={cfour}
                  prize='3.2Mn'
                  title='New'
                  icon="anchor"
                  styleName="up"
                  desc="New Install Orders (Past 30 Days)"
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <ChangeOrdersChartCard
                  // prize={cfive}
                  prize='4.3Mn'
                  // title=Change
                  icon="drag-and-drop"
                  styleName="down"
                  desc="Change Orders (Past 30 Days)"
                />
              </Col>
              
            </Row>
          </Col>
        </Row>

        <DisputableCircuits />

        <Row className='pb'>
          <Col span={12}>
            <Widget styleName='color_bg_color'>
              <LineChartRender />
            </Widget>
          </Col>
          <Col span={12} className='trip-recovery_prediction'>
            <Select placeholder='Select County' style={{float:'right'}}/>
            <Widget styleName='color_bg_color'>
                <TripRecoveryPrediction />
              </Widget>
          </Col>
        </Row>

        <Row className='pb'>
          <Col span={12}>
            <Widget styleName='color_bg_color'>
              <LineChartRender />
            </Widget>
          </Col>
          <Col span={12}>
            <Widget styleName='color_bg_color'>
              <LineChartRender />
            </Widget>
          </Col>
        </Row> */}
      </div>
    </Auxiliary>
  );
};

export default Main;
