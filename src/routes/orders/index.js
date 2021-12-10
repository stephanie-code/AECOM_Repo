import React from "react";
import { Col, Row } from "antd";
import Auxiliary from "util/Auxiliary";

import ListKeywords from "./ListKeywords";
import TweetsTable from './TweetsTable'

import TitleBar from '../../components/TitleBar'
import Widget from '../../components/Widget'
import Select from '../../components/Select'

const installchangedisconnect = () => {
  const data = ['Mixed', 'Positive', 'Negative', 'Neutral']
  const topics = [1, 2, 3, 4, 5]

  return (
    <Auxiliary>
      <div className="tweets_wrapper">
        <Row className='pb'>
          <Col xl={5} lg={5} md={5} sm={24} xs={24}>
            <h5>Select Topic Number</h5>
            <Select placeholder='Select' options={topics} />
          </Col>

          <Col xl={8} lg={8} md={8} sm={24} xs={24} >
            <h5>Select Sentiment</h5>
            <Select placeholder='Select' options={data} />
          </Col>
        </Row>

        <Row className='pb'>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Widget className="gx-card" styleName='color_bg_color'>
              <TitleBar title='Select any keyword to see corrensponding Tweets' styleName='card_title title-bar'/>
              <ListKeywords styleName='tweets_keyword_list ' />
              <TweetsTable />
            </Widget>
          </Col>
        </Row>
      </div>
    </Auxiliary>
  );
};

export default installchangedisconnect;