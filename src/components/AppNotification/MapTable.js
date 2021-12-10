import React, { Component, useEffect, useState } from 'react'
import { Row, Col, Space, Table } from 'antd'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SearchBox from '../SearchBox'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
import Axios from "axios";
const MapTable = (props) => {

    const districtData = props.data
    const [district, setDistrict] = useState([{ id: 'DE-BW', name: 'Baden-Württemberg', geometry_type: 'MultiPolygon', property_type: 'State' }])
    const [employee, setEmployee] = useState([])
    const [columns1, setColumns1] = useState([
        {
            dataField: 'Geometry_Id',
            text: 'UserId'
        },
        {
            dataField: 'Geometry_Type',
            text: 'Id',
            sort: true
        },
        {
            dataField: 'District_Id',
            text: 'Title',
            sort: true
        },
        {
            dataField: 'District_Type',
            text: 'Status',
            sort: true
        },
    ])

    const [columns2, setColumns2] = useState([
        {
            dataIndex: 'id',
            text: 'UserId'
        },
        {
            dataIndex: 'name',
            text: 'Id',
            sort: true
        },
        {
            dataIndex: 'latitude',
            text: 'latitude',
            sort: true
        },
        {
            dataIndex: 'longtitude',
            text: 'longtitude',
            sort: true
        },
    ])

    const [columns, setColumns] = useState([
        {
            dataField: 'userId',
            text: 'UserId'
        },
        {
            dataField: 'id',
            text: 'Id',
            sort: true
        },
        {
            dataField: 'title',
            text: 'Title',
            sort: true
        },
        {
            dataField: 'completed',
            text: 'Status',
            sort: true
        },
    ])
    // const options = {
    //   page: 2,
    //   sizePerPageList: [{
    //     text: '5', value: 5
    //   }, {
    //     text: '10', value: 10
    //   }, 
    //   {
    //     text: 'All', value: employee.length
    //   }
    // ],
    //   sizePerPage: 5,
    //   pageStartIndex: 0,
    //   paginationSize: 0,
    //   prePage: 'Prev',
    //   nextPage: 'Next',
    //   firstPage: 'First',
    //   lastPage: 'Last',
    // };
    useEffect(() => {
        getApi()
    }, [])
    const getApi = () => {
        Axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            setEmployee(response.data.map(row => ({
                userId: row.userId,
                id: row.id,
                title: row.title,
                completed: row.completed,
            })))
        });
    }

    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await Axios.get("https://jsonplaceholder.typicode.com/todos").then(
            res => {
                setloading(false);
                setstate(
                    res.data.map(row => ({
                        userId: row.userId,
                        id: row.id,
                        title: row.title,
                        completed: row.completed,
                    }))
                );
            }
        );
    };

    const columns3 = [
        {
            title: "userId",
            dataIndex: "userId",
        },
        {
            title: "id",
            dataIndex: "id",
        },
        {
            title: "title",
            dataIndex: "title",
        },
        {
            title: "completed",
            dataIndex: "completed",
        },
    ];
    return (
        <div className="container">
            <Row className="row" className="hdr">
                {/* <div class="col-sm-12 btn btn-info"> */}
                <Col span={18}></Col>
                <Col span={6} offset={18}>
                    <SearchBox placeholder='Search' />
                </Col>
                {/* </div> */}
            </Row>
            <Row style={{ marginTop: 20, height: '300px' }}>
                <Col span={24}>
                    <div>
                        {/* {districtData.map(home => <div>{home.name}</div>)} */}
                        {/* {typeof(districtData)} */}
                        {/* {JSON.stringify(districtData)} */}
                    </div>
                    {/* {districtData && <Table dataSource={districtData} columns={columns2} />} */}
                    <Table dataSource={districtData} columns={columns2} pagination={{ pageSize: 5 }}/>
                    {/* {    console.log('districtData', props.data) } */}
                </Col>
            </Row>
        </div >
    )
}
export default MapTable;