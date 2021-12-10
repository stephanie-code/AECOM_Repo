import React from "react";
import { Descriptions } from 'antd';

const TripRecoveryPrediction = () => {

    return (
        <div >
            <Descriptions title="Trip Level Recovery Prediction" bordered >
                <Descriptions.Item label="Trip Type" span={3} >Predicted Month</Descriptions.Item>
                <Descriptions.Item label="Intra" span={3}>26 September 2022</Descriptions.Item>
                <Descriptions.Item label="Inward" span={3}>03 June 2024</Descriptions.Item>
                <Descriptions.Item label="Outward" span={3}>10 March 2025</Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default TripRecoveryPrediction;
