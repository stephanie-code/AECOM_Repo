import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useDispatch } from "react-redux";
import { SentimentTopic, Sentiment } from '../../appRedux/actions/SentimentTopic'

const { Option } = Select;

function onBlur() {
    // console.log('blur');
}

function onFocus() {
    // console.log('focus');
}

function onSearch(val) {
    // console.log('search:', val);
}

const SelectBox = (props) => {
    const Dispatch = useDispatch()

    const [options, setOptions] = useState([])

    useEffect(() => {
        getData()
    }, [options])

    const getData = async () => {
        setOptions((props.options))
    }

    const onChange = (value) => {
        // console.log(`selected ${value}`);
        if(value == 1 || value == 2 || value == 3 || value == 4 || value == 5)
            Dispatch(SentimentTopic(value));
        else
            Dispatch(Sentiment(value))
    }

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={props.placeholder}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className='select-box-transition'
        >
            {options &&
                options.map(item => (
                    <Option key={item}>{item}</Option>
                ))}
            {/* <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
        </Select>
    )
}

export default SelectBox;
