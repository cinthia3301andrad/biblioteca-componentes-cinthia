import React from 'react'
import { Drawer, Menu } from 'antd'
import { MdFlight, MdCameraAlt, MdHelp, MdFeedback } from 'react-icons/md'
import { FaBed, FaHotel, FaBars } from 'react-icons/fa'


type TDrawerMenu = {
    onClose(): void
    visible: boolean
}

const styleContainerIcon: React.CSSProperties = {
    display: 'flex', flexDirection: 'row',
    alignItems: 'center', fontSize: '16px',
}

const styleItem: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 80,
    width: '100%',
    fontSize: '13px',
    fontWeight: "bold",
    marginTop: 20
}

const styleMenu: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}

const styleIcon: React.CSSProperties = {
    marginRight: 5,
    color: "#00B894"
}

const colorIcon: string = '#00B894'

function DrawerMenu(props: TDrawerMenu): JSX.Element {

    const drawerHeader: JSX.Element =
        <>
            <h3 style={{ color: colorIcon }}><FaBars size={15} color={colorIcon} /> Menu</h3>
        </>

    const drawerFooter: JSX.Element =
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={styleContainerIcon}>
                    <MdFeedback size={25} color={colorIcon} style={{ margin: 10 }} /> Feedback
                </div>
                <div style={styleContainerIcon}>
                    <MdHelp size={25} color={colorIcon} style={{ margin: 10 }} /> Ajuda
                </div>
            </div>
        </>

    return (
        <>
            <Drawer
                title={drawerHeader}
                placement={`left`}
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
                key={`left`}
                footer={drawerFooter}
            >
                <Menu defaultSelectedKeys={['1']} mode="inline"
                    style={styleMenu}>
                    <Menu.Item key="1" style={styleItem} icon={<MdCameraAlt size="20px"
                        style={styleIcon} />}>
                        O que fazer
                    </Menu.Item>
                    <Menu.Item key="2" style={styleItem} icon={<MdFlight size="20px"
                        style={styleIcon} />}>
                        Voos
                    </Menu.Item>
                    <Menu.Item key="3" style={styleItem} icon={<FaBed size="20px"
                        style={styleIcon} />}>
                        Hotéis
                    </Menu.Item>
                    <Menu.Item key="4" style={styleItem} icon={<FaHotel size="20px"
                        style={styleIcon} />}>
                        Aluguéis
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    )
}

export default DrawerMenu