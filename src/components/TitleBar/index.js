import React from 'react'
import { Row, Col, Divider } from 'antd'

const TitleBar = ({ title, styleName, icon }) => {
    return (
        <>
            <Row>
                <Col span={24} className={`${styleName}`}>
                    <i class={`${icon}`}></i> &nbsp;
                    {title}
                    <Divider style={{ color: 'white' }} />
                </Col>
            </Row>
        </>
    )
}

export default TitleBar;