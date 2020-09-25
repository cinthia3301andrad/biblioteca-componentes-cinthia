import React from 'react'
import { Layout, Card, Col, Row } from 'antd'

import CreatePopoverTop from '../../components/Popovers/PopoverTop';
import CreatePopoverBottom from '../../components/Popovers/PopoverBottom';
import CreatePopoverLeft from '../../components/Popovers/PopoverLeft';
import CreatePopoverRight from '../../components/Popovers/PopoverRight';
import CreateTable from './../Table';
import CreateImage from '../../components/Image';
import CreateCollapse from '../../components/Collapse'

const styleTitleMain: React.CSSProperties = {
    fontSize: '54px',
    fontWeight: 400,
    color: 'black',
    fontFamily: 'Nunito Sans',

}



const styleContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',

}


function Content(): JSX.Element {

    const { Content } = Layout
    return (
        <>
            <Content style={styleContent}>
                <h1 style={styleTitleMain} >Biblioteca de Componentes</h1>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={20}>
                            <Card title="Popovers" bordered={false}>
                                <div style={styleContent}>
                                    <CreatePopoverTop />
                                    <br></br>
                                    <CreatePopoverBottom />
                                    <br></br>
                                    <CreatePopoverLeft />
                                    <br></br>
                                    <CreatePopoverRight />
                                </div>
                            </Card>
                        </Col>
                        <Col span={20}>
                            <Card title="Tabelas" bordered={false}>
                                <CreateTable />
                            </Card>
                        </Col>
                        <Col span={20}>
                            <Card title="Collapse" bordered={false}>
                                <CreateCollapse />
                            </Card>
                        </Col>
                        <Col span={20}>
                            <Card title="Imagens" bordered={false}>
                                <CreateImage />
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Content>
        </>
    )
}

export default Content;

