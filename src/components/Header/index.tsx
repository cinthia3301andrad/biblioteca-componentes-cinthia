import React, { useState } from 'react'
import { Layout, Button, Avatar } from 'antd'
import { FaBars } from 'react-icons/fa'
import { UserOutlined } from '@ant-design/icons'
import DrawerMenu from '../DrawerMenu'

const styleButton: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    boxShadow: "none"
}

const styleHeader: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: "1.5em", height: 64, 
    backgroundColor: "#52DF9A", 
    fontFamily: 'Nunito Sans',
    borderBottom: 'solid 4px #fff',
    fontWeight: 100
}

function Header(): JSX.Element {
    const { Header } = Layout

    const [visible, setVisible] = useState(false)

    function showDrawer(): void {
        setVisible(true)
    }

    function onClose(): void {
        setVisible(false)
    }

    return (
        <Header style={styleHeader}>
            <Button type="primary" style={styleButton} onClick={showDrawer} >
                <FaBars size={16} style={{ marginRight: 5 }} />
                MENU
            </Button>
            <Avatar size="small" style={{ border: 'solid 3px #00B894' }} icon={<UserOutlined />} />
            <DrawerMenu onClose={onClose} visible={visible} />
        </Header>
    )
}

export default Header