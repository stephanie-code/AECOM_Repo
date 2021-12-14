import React from "react";
import { Col, Row } from "antd";

import Auxiliary from "util/Auxiliary";

import TitleBar from '../../components/TitleBar'
import TravelAnalysis from './component/TravelAnalysis';
import PowerBiReport from './component/PowerBiReport'

const Analysis = () => {
    return (
        <Auxiliary>
            <div className='main_wrapper'>
                {/* <TravelAnalysis /> */}
                {/* <PowerBiReport /> */}
                {/* <iframe 
                    title="aecom_map_testing - Page 1" 
                    width="800" 
                    height="500" 
                    src="https://app.powerbi.com/reportEmbed?reportId=3bf0435f-ea86-4ffa-ae34-b67efd17f593&autoAuth=true&ctid=1e9b1923-98ea-4f66-9d93-8b9032adc213&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe> */}
            </div>
        </Auxiliary>
    );
};

export default Analysis;
