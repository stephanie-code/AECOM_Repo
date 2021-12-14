import React from "react";
import { Col, Row } from "antd";

import Auxiliary from "util/Auxiliary";

import ModesOfTransportation from './charts/ModesOfTransportation'
import IncomeDistribution from './charts/IncomeDistribution';
import EmployedPercentage from './charts/EmployedPercentage';
import VehicleOwnership from './charts/VehicleOwnership';
import HouseOwnership from './charts/HouseOwnership';
import TravelTime from './charts/TravelTime';

import TitleBar from '../../components/TitleBar'
import Widget from "../../components/Widget";
import Select from '../../components/Select'

const Dashboard = () => {
    return (
        <Auxiliary>
            <div className='main_wrapper'>
                <Row className='tweets_row pb'>
                    <Col xl={5} lg={5} md={5} sm={24} xs={24}>
                        <h5>Year</h5>
                        <Select placeholder='Select' />
                    </Col>

                    <Col xl={5} lg={5} md={5} sm={24} xs={24} >
                        <h5>County</h5>
                        <Select placeholder='Select' />
                    </Col>
                    <Col xl={5} lg={5} md={5} sm={24} xs={24} >
                        <h5>FIPS</h5>
                        <Select placeholder='Select' />
                    </Col>
                </Row>

                <Row className='tweets_row pb'>
                    <Col xl={5} lg={5} md={5} sm={24} xs={24} >
                        <Widget className="gx-card " styleName='color_bg_color hoverEffect '>
                            <h1>8.9M</h1>
                            <h6>Total Population</h6>
                        </Widget>
                    </Col>
                    <Col xl={5} lg={5} md={5} sm={24} xs={24} >
                        <Widget className="gx-card" styleName='color_bg_color hoverEffect'>
                            <h1>8.9M</h1>
                            <h6>Total Population</h6>
                        </Widget>
                    </Col>
                </Row>

                <Row className='sentiment_row pb' gutter={[16, 24]}>
                    <Col span={12} >
                        <div className="card card-wh color_bg_color">
                            <div className="gradient"></div>
                            <TitleBar title='Employed %' styleName='card_title title-bar' />
                            <EmployedPercentage />
                        </div>
                    </Col>

                    <Col span={12} >
                        <div className="card card-wh color_bg_color">
                            <div className="gradient"></div>
                            <TitleBar title='House Ownership' styleName='card_title title-bar' />
                            <HouseOwnership />
                        </div>
                    </Col>
                    
                    <Col span={12} >
                        <div className="card card-wh color_bg_color">
                            <div className="gradient"></div>
                            <TitleBar title='Income Distribution' styleName='card_title title-bar' />
                            <IncomeDistribution />
                        </div>
                    </Col>

                    {/* <Col span={12} >
                        <Widget className="gx-card" styleName='color_bg_color card-wh'>
                            <TitleBar title='Employed %' styleName='card_title title-bar' />
                            <EmployedPercentage />
                        </Widget>
                    </Col> */}
                    {/* <Col span={12} >
                        <Widget className="gx-card" styleName='color_bg_color card-wh'>
                            <TitleBar title='House Ownership' styleName='card_title title-bar' />
                            <HouseOwnership />
                        </Widget>
                    </Col> */}
                    {/* <Col span={12} >
                        <Widget styleName='card card-wh ' >
                            <TitleBar title='Income Distribution' styleName='card_title title-bar' />
                            <IncomeDistribution />
                        </Widget>
                    </Col> */}
                    <Col span={12} >
                        <Widget className="gx-card" styleName='color_bg_color card-wh'>
                            <TitleBar title='Vehicle Ownership' styleName='card_title title-bar' />
                            <VehicleOwnership />
                        </Widget>
                    </Col>
                    <Col span={12} >
                        <Widget className="gx-card" styleName='color_bg_color card-wh'>
                            <TitleBar title='Travel Time' styleName='card_title title-bar' />
                            <TravelTime />
                        </Widget>
                    </Col>
                    <Col span={12} >
                        <Widget className="gx-card" styleName='color_bg_color card-wh'>
                            <TitleBar title='Modes Of Transportation' styleName='card_title title-bar' />
                            <ModesOfTransportation />
                        </Widget>
                    </Col>
                </Row>
            </div>
        </Auxiliary>
    );
};

export default Dashboard;
