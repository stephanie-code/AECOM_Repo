import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { List, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { TweetKeyword } from '../../appRedux/actions/TweetKeyword'

let data
const getData = (sentimentTopicSelected, sentimentSelected) => {
    if (sentimentTopicSelected == 1 && (sentimentSelected == 'Positive' || sentimentSelected == 'Mixed')) {
        return (
            data = [
                {
                    title: 'Title 1',
                },
                {
                    title: 'Title 2',
                },
                {
                    title: 'Title 3',
                },
                {
                    title: 'Title 4',
                },
            ]
        )
    } else if (sentimentTopicSelected == 2 && (sentimentSelected == 'Negative' || sentimentSelected == 'Mixed')) {
        return (
            data = [
                {
                    title: 'Title 5',
                },
                {
                    title: 'Title 6',
                },
                {
                    title: 'Title 7',
                },
                {
                    title: 'Title 8',
                },
                {
                    title: 'Title 9',
                },
                {
                    title: 'Title 10',
                },
            ]
        )
    } else if (sentimentTopicSelected == 3 && (sentimentSelected == 'Neutral' || sentimentSelected == 'Mixed')) {
        return (
            data = [
                {
                    title: 'Title 11',
                },
                {
                    title: 'Title 12',
                },
                {
                    title: 'Title 13',
                },
                {
                    title: 'Title 14',
                },
                {
                    title: 'Title 15',
                },
            ]
        )
    } else if (sentimentTopicSelected == 4 && (sentimentSelected == 'Positive' || sentimentSelected == 'Negative')) {
        return (
            data = [
                {
                    title: 'Title 16',
                },
                {
                    title: 'Title 17',
                },
            ]
        )
    } else if (sentimentTopicSelected == 5 && (sentimentSelected == 'Positive' || sentimentSelected == 'Neutral')) {
        return (
            data = [
                {
                    title: 'Title 18',
                },
                {
                    title: 'Title 19',
                },
                {
                    title: 'Title 20',
                },
            ]
        )
    }

}
const ListKeywords = ({ styleName }) => {
    let keywords
    const Dispatch = useDispatch()
    const sentimentTopicSelected = useSelector((state) => state.Sentiment.Topic_Number)
    const sentimentSelected = useSelector((state) => state.Sentiment.Sentiment)
    keywords = getData(sentimentTopicSelected, sentimentSelected)

    const keywordClicked = (val) => {
        Dispatch(TweetKeyword(val))
    }
    return (
        <List
            itemLayout="horizontal"
            dataSource={keywords}
            renderItem={item => (
                <List.Item onClick={() => keywordClicked(item.title)}>
                    <List.Item.Meta
                        title={<span><Button style={{ backgroundColor: '#57543D' }} >{item.title}</Button></span>}
                    />
                </List.Item>
            )}
            grid={{
                gutter: 4,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 12,
                xl: 12,
            }}
            column={{ span: 8 }}
            className={styleName}
        />
    );
}

export default ListKeywords;
