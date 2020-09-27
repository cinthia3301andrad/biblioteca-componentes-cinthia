import React, {useState} from 'react'
import { Layout, Col, Row } from 'antd'
import Modal from '../Modal/modal'
import Button from '../Button/button'
import { SearchOutlined } from '@ant-design/icons';

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
    background: '#fff',

}


function Content(): JSX.Element {

    const { Content } = Layout
    const [visible, setVisible] = useState(false)

    function onOk(): void {
        setVisible(true)
    }
    function onCancel(): void {
        setVisible(false)
    }

    return (
        <>
            <Content style={styleContent}>
                <h1 style={styleTitleMain} >Componentes AntDesign - Cinthia</h1>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={20}>
                        <Button  onClick={onOk}  >
                            Open Modal
                        </Button>
                            <Modal  
                                title="Teste"
                                cancelText="FECHAR"
                                okText="ALGUMA AÇÃO"
                                visible={visible}
                                onCancel={onCancel}
                                >
                                    Lorem ipsum dolor sit amet.
                            </Modal>
                        <p>---------------------------------------</p>
                        <Button  onClick={onCancel} loading={true} >
                        Loading
                        </Button>
                        <p>---------------------------------------</p>
                        <Button  onClick={onCancel}  ghost={true} >
                            Ghost
                        </Button>
                        disabled
                        <p>---------------------------------------</p>
                        <Button  onClick={onCancel}  disabled={true} >
                            INATIVO
                        </Button>
                        <p>---------------------------------------</p>
                        <Button  icon={<SearchOutlined/>} onClick={onCancel}  >
                            Icon
                        </Button>
                        <p>---------------------------------------</p>
                        <Button  onClick={onCancel} danger={true}  >
                            DANGER
                        </Button>
                        
                         
                        </Col>
                    </Row>
                </div>

            </Content>
        </>
    )
}

export default Content;

