import React from 'react';
import { Table } from 'antd';


const styleHeader: React.CSSProperties = {

    backgroundColor: "#52DF9A", 
    fontFamily: 'Nunito Sans',
}


const dataSource = [
    {
        key: '1',
        Titulo: 'Exemplo',
        Exemplo: 'Exemplo',
        address: 'Exemplo',
    },
    {
        key: '2',
        Titulo: 'Exemplo',
        Exemplo:   'Exemplo',
        address: 'Exemplo',
    },
    {
        key: '3',
        Titulo: 'Exemplo',
        Exemplo:   'Exemplo',
        address: 'Exemplo',
    },
    {
        key: '4',
        Titulo: 'Exemplo',
        Exemplo:   'Exemplo',
        address: 'Exemplo',
    },
];

const columns = [
    {
        title: 'Titulo',
        dataIndex: 'Titulo',
        key: 'Titulo',
    },
    {
        title: 'Exemplo',
        dataIndex: 'Exemplo',
        key: 'Exemplo',
    },
    {
        title: 'Exemplo',
        dataIndex: 'Exemplo',
        key: 'Exemplo',
    },
];
function CreateTable(): JSX.Element {
    return (
        <>
            <Table style={styleHeader} dataSource={dataSource} columns={columns} />;
        </>
    )
}

export default CreateTable;