import React, { Component, useEffect, useState } from 'react'
import { Row, Col, Space } from 'antd'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SearchBox from '../SearchBox'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

const TableRender = (props) => {

  let districtData = props.data
  // console.log('districtData', districtData)
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
      dataField: 'id',
      text: 'UserId'
    },
    {
      dataField: 'name',
      text: 'Id',
      sort: true
    },
    {
      dataField: 'geometry_type',
      text: 'Title',
      sort: true
    },
    {
      dataField: 'property_type',
      text: 'Status',
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

  axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
    setEmployee(response.data)
  });

  return (
    <div className="container">
      <Row>
        <Col span={24}><Space><i class="fas fa-table"></i>Table </Space></Col>
      </Row>
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
          {/* <BootstrapTable
            striped
            hover
            keyField='id'
            // data={districtData}
            // columns={columns2}
            data={employee}
            columns={columns}
            noDataIndication="No Data Available"
            filter={filterFactory()}
            pagination={paginationFactory()} 
            /> */}
          <ToolkitProvider
            bootstrap4
            keyField="name"
            data={districtData}
            columns={columns2}
            search
          >
            {(props) => (
              <div>
                <Row className="table-design">
                  <div className="title-align">
                    <i className="fas fa-table icons1" />
                    <span className="custom-title">Bootstrap Table</span>
                  </div>

                  <div>
                    <SearchBar
                      {...props.searchProps}
                      style={{
                        height: "30px",
                        // width: width / 6,
                      }}
                    />
                  </div>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  noDataIndication="No data"
                  hover
                  condensed
            filter={filterFactory()}
            pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        </Col>
      </Row>
    </div >
  )
}
export default TableRender;