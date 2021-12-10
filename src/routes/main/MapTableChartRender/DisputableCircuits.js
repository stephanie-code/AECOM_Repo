import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

import LineChartRender from "../../../components/AppNotification/LineChartRender";
import ChartRender from "../../../components/AppNotification/chartRender";
import MapRender from "../../../components/AppNotification/MapRender";
import MapTable from "../../../components/AppNotification/MapTable";
import TitleBar from "../../../components/TitleBar";
import Select from "../../../components/Select";
import Widget from "../../../components/Widget";


const DisputableCircuits = () => {
  const MapData = useSelector((state) => state.District.District_Data);

  return (
    <>
      <Row >
        <Col span={12} style={{ height: '700px' }}>
          <Widget styleName='map-wrapper color_bg_color' style={{ height: '780px' }}>
            <TitleBar title='Map' icon='fas fa-map-marker-alt'  styleName='card_title'/>
            <Col span={24}> <MapRender /> </Col>
          </Widget>
        </Col>
        <Col span={12} style={{ margin: '0px 0px 28px 0px' }}>
          <Widget className="gx-card" styleName='color_bg_color'>
            <TitleBar title='Chart' icon='fas fa-chart-line' styleName='card_title'/>
            <ChartRender data={MapData} />
          </Widget>
          <Widget className="gx-card" styleName='table-wrapper color_bg_color' style={{ overflow: 'auto' }} >
            <TitleBar title='Table' icon='fas fa-table' styleName='card_title'/>
            <MapTable data={MapData} />
          </Widget>
        </Col>
      </Row>

      <Row className='row_padding'>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Widget className="gx-card" style={{ width: '100%' }} styleName='color_bg_color'>
            <TitleBar title='Table' icon='fas fa-table' styleName='card_title'/>
            <MapTable data={MapData} />
          </Widget>
        </Col>
      </Row>

      <Row className='row_padding'>
        <Widget className="gx-card" styleName='color_bg_color'>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <TitleBar title='Line Chart' icon='fas fa-chart-line' styleName='card_title'/>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} >
              <Select placeholder='Select Source' />
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} >
              <Select placeholder='Select Destination' />
            </Col>
          </Row>
          <Col>
            <LineChartRender data={MapData} />
          </Col>
          <Col>
            <LineChartRender data={MapData} />
          </Col>
        </Widget>
      </Row>
    </>
  );
};

export default DisputableCircuits;
