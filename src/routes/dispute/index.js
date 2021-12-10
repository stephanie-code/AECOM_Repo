import React from "react";
import { Col, Row } from "antd";
import {useSelector} from 'react-redux';

import Auxiliary from "util/Auxiliary";

import SentimentOverTime from "./SentimentOverTime";
import SentimentChart from "./SentimentChart";
import ListKeywords from "./ListKeywords";
import TweetsTable from './TweetsTable'

import TitleBar from '../../components/TitleBar'
import Widget from '../../components/Widget'
import Select from '../../components/Select'

const dispute = () => {
  const data = ['Mixed', 'Positive', 'Negative', 'Neutral']
  const topics = [1, 2, 3, 4, 5]

  const sentimentTopicSelected = useSelector((state) => state.Sentiment.Topic_Number)
  const sentimentSelected = useSelector((state) => state.Sentiment.Sentiment)

  return (
    <Auxiliary>
      <div className='sentiment_wrapper'>
        <Row className='pb'>
          <Col span={24} >
            <Widget className="gx-card" styleName='color_bg_color'>
              <Row>
                <Col xl={6} lg={6} md={6} sm={24} xs={24} className='tweets_count'>
                  <h1>18.8K</h1>
                  <h6>Tweets</h6>
                </Col>

                <Col xl={18} lg={18} md={18} sm={24} xs={24}>
                  <TitleBar title='Sentiment On App Reviews' styleName='title-bar card_title' />
                  <SentimentChart />
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row className='pb'>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Widget className="gx-card" styleName='color_bg_color'>
              <TitleBar title='Sentiment Over Time' styleName='title-bar card_title'/>
              <SentimentOverTime />
            </Widget>
          </Col>
        </Row>

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
              {sentimentTopicSelected && sentimentSelected && <ListKeywords styleName='tweets_keyword_list ' />}
              <TweetsTable />
            </Widget>
          </Col>
        </Row>
      </div>
    </Auxiliary>
  );
};

export default dispute;
